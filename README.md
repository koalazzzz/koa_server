# koa_server
Simple single resource Mongo-backed REST API built to explore a new HTTP framework for the Codefellows 401 course. We chose Koa.

## Model
Model is as follows:

```js
{
  name: String,
  instrument: String,
  facialHair: Boolean
}
```

## Running
  * Open the terminal
  * Clone to your own repo

### Install packages

```bash
> npm install
```

### Start mongodb

```bash
> mongod --config /usr/local/etc/mongod.conf
```

### Run the server

```bash
> node ./lib/server.js
```

### CHECK YO' SHIT OUT

```
open http://localhost:3000/jazzmaster
```

## Authors

Written by
[Greg Magdsick](https://github.com/gregmagdsick) and
[Gene Troy](https://github.com/energene)

## License

The project is licensed under the terms of the MIT license.
