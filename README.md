# EOS-demux-js-api-example
The API example for getting the data from MongoDB.

An example of API to access two different collections in MongoDB and output the result in json format.

> Example of demux-js daemon for this API you can find [here](https://github.com/4ban/EOS-demux-js-example)

## Install
Install dependencies: `npm install`
Fill the `.env` file.

```bash
MONGODB_URL=mongodb://<ip_address>:27017/DBNAME
PORT=3000

MONGODB_USER=username
MONGODB_PASS=password
```

## Usage
To run the API service: `npm start`

```bash
http://<ip_address>:3000/
```

* `/` - List of available API
* `/eos` - List of available API for EOS accounts
* `/ledger` - List of available API for Ledger wallets
* `/eos/<accountName>` - History for EOS account
* `/ledger/<wallet>` - History for Ledger wallet (Public key)


