# etrade-ts

A TypeScript E-Trade SDK implementation.

Documentation: https://markdoten.github.io/etrade-ts/

E-Trade developer documentation: https://developer.etrade.com/home

## Authorization

The E-Trade OAuth flow is a multi-step process. Here is the E-Trade OAuth documentation: https://developer.etrade.com/getting-started/developer-guides.

`etrade.auth.startOAuth()`: Fetxches the OAuth request token and secret, then returns the OAuth URL.

`etrade.auth.completeOAuth(verifier: string)`: Receives the OAuth verifier code, fetches the access token and secret, then set up the session for future use.

Here is an example using Express. Note that the endpoint `/etrade/auth/code` in this example would be set up in E-Trade as the OAuth callback.
```ts
import Etrade from 'etrade-ts';
import express from 'express';
import type {Request, Response} from 'express';

const app = express();
app.use(express.json());

const etrade: Etrade = new Etrade({
  consumerKey: '<consumer key>',
  consumerSecret: '<consumer secret>'
});

app.get('/etrade/auth/start', async (req: Request, res: Response) =>
  res.redirect(await etrade.auth.startOAuth()));

app.get('/etrade/auth/code', async (req: Request, res: Response) => {
  await etrade.auth.completeOAuth(req.query.oauth_verifier.toString());
});

app.listen(8080);
```

Once the OAuth process is complete, requests can be made using other APIs.

## APIs

Each of the APIs (Accounts, Alerts, Market, Order) are available on the Etrade instance.

Most API requests require to be made on a specific account within the E-Trade profile. First you will need to fetch the list of accounts and select which one you want to use.

```ts
const {accounts: {account}} = await etrade.accounts.ListAccounts();
console.log(account);
```

Once you select one of the accounts in the list, the `accountIdKey` property will need to be passed into most requests:

```ts
const {order} = await etrade.order.ListOrders({accountIdKey});
```
