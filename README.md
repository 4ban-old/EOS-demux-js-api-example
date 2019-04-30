# demux-api
The API example for getting the data from MongoDB.

There are 2 identical routes to demonstrate easy modifications to use different models and functions.

## Usage
To run the API service: `npm start`

Current running configurations:
```bash
http://{server_address}:3000/
```
Default pagination parameters:
* `skip = 0`
* `limit = 10`

> By default sorted in descending order by **`blockNumber`** field (recent transactions first)

API examples:

| Method | URL                                       | Description                                                           |
| ------ | :---------------------------------------- | --------------------------------------------------------------------- |
| GET    | `/`                                       | List of available API                                                 |
| GET    | `/col1`                                    | List of available APIs for account 1                               |
| GET    | `/col1/{accountName}`                      | History for account 1. First 10 transactions                        |
| GET    | `/col1/{accountName}?skip=10`              | History for account 1. Second page (i.e next 10 transactions)       |
| GET    | `/col1/{accountName}?limit=100`            | History for account 1. First 100 transactions                       |
| GET    | `/col1/{accountName}?skip=100&limit=100`   | History for account 1. Second page (i.e. next 100 transactions)     |
| GET    | `/col1/stats/{accountName}`                | Stats for account 1                                                 |
| GET    | `/col2`                                    | List of available APIs for account 2                               |
| GET    | `/col2/{accountName}`                      | History for account 2. First 10 transactions                        |
| GET    | `/col2/{accountName}?skip=10`              | History for account 2. Second page (i.e next 10 transactions)       |
| GET    | `/col2/{accountName}?limit=100`            | History for account 2. First 100 transactions                       |
| GET    | `/col2/{accountName}?skip=100&limit=100`   | History for account 2. Second page (i.e. next 100 transactions)     |
| GET    | `/col2/stats/{accountName}`                | Stats for account 2                                                 |


## Install
Install dependencies: `npm install`
Fill the `.env` file.

```bash
# Mainnet API
MONGODB_URL=mongodb://{server_address}:27017/DBname
PORT=3000
```
Credentials
```bash
MONGODB_USER={username}
MONGODB_PASS={password}
```


## Additional
The example of the service that fill the DB go to [demux-js service example](https://github.com/4ban/EOS-demux-js-example)