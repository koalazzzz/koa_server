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
> mongod --dbpath=./data
```

### Run the server
Open another terminal window and navigate to your project's home directory
```bash
> node index.js
```

### CHECK YO' SHIT OUT

```
open http://localhost:3000/api/jazzmaster
```

## Authors

Written by
[Greg Magdsick](https://github.com/gregmagdsick) and
[Gene Troy](https://github.com/energene)

## Acknowledgements
[Benjamin Harding](https://github.com/bharding2) gave us some helpful tutorials for learning Koa that saved us an immense amount of time.

## License

The project is licensed under the terms of the MIT license.
