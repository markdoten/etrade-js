/**
 * @file Development Express server configuration.
 */
require('dotenv').config();
import Etrade from '../src';
import express from 'express';
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

app.set('trust proxy', 1);
sess.cookie.secure = true;
app.use(session(sess));

const etrade = new Etrade({
  consumerKey: process.env.ETRADE_CONSUMER_KEY,
  consumerSecret: process.env.ETRADE_CONSUMER_SECRET
});

app.get('/ping', async (req: Request, res: Response) => {
  res.send('pong');
});

app.get('/etrade/auth/start', async (req: Request, res: Response) =>
  res.redirect(await etrade.auth.startOAuth()));

app.get('/etrade/auth/code', async (req: Request, res: Response) => {
  await etrade.auth.completeOAuth(req.query.oauth_verifier.toString());
  const {accounts: {account}} = await etrade.accounts.ListAccounts();
  console.log(await etrade.accounts.ViewPortfolio({
    accountIdKey: account[0].accountIdKey,
    count: 10,
    sortBy: etrade.accounts.SortBy.SYMBOL
  }));
});

app.get('/test/:function', async (req: Request, res: Response) => {

});

app.listen(PORT);
