/**
 * @file Development Express server configuration.
 */
require('dotenv').config();
import {promises as fs} from 'fs';
import Etrade from '../src/index';
import etradeSession from '../src/session';
import express from 'express';
import path from 'path';
import session from 'express-session';
import type {Cookie} from 'express-session';
import type {Request, Response} from 'express';

const PORT = 8080;

const app = express();
app.use(express.json());

const sess = {
  cookie: {} as Cookie,
  secret: 'keyboard cat'
};
const sessionPath = path.join(__dirname, 'session.json');

app.set('trust proxy', 1);
sess.cookie.secure = true;
app.use(session(sess));

let etrade: Etrade;
let sessionData: any;

fs.readFile(sessionPath, 'utf8')
  .then((data: any) => (sessionData = JSON.parse(data)))
  .finally(() => {
    etrade = new Etrade({
      ...(sessionData || {}),
      consumerKey: process.env.ETRADE_CONSUMER_KEY,
      consumerSecret: process.env.ETRADE_CONSUMER_SECRET
    });
  });

app.get('/ping', async (req: Request, res: Response) => {
  res.send('pong');
});

app.get('/etrade/auth/start', async (req: Request, res: Response) =>
  res.redirect(await etrade.auth.startOAuth()));

app.get('/etrade/auth/code', async (req: Request, res: Response) => {
  await etrade.auth.completeOAuth(req.query.oauth_verifier.toString());
  const {accounts: {account}} = await etrade.accounts.ListAccounts();
  fs.writeFile(sessionPath, JSON.stringify(etradeSession.toJSON(), null, 2));
  res.send(account[0].accountIdKey);
});

app.post('/test/:folder/:func', async (req: Request, res: Response) => {
  const {folder, func} = req.params;
  try {
    const data = await etrade[folder][func](req.body);
    console.log(JSON.stringify(data, null, 2));
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(PORT);
