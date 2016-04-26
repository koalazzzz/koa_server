# koa_server
Simple single resource Mongo-backed REST API built to explore a new HTTP framework for the Codefellows 401 course. We chose Koa.

## Model
The model for creating a jazz master is as follows:

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

### Run tests
```bash
> gulp
```

### Run the server
Open another terminal window and navigate to your project's home directory
```bash
> npm start
```

### How to use
Now you can use a HTTP client with standard REST commands that follow the Model defined above to POST, PUT or DELETE jazz masters from the database at the following endpoint.
```
http://localhost:3000/api/jazzmaster
```

## Authors

Written by
[Greg Magdsick](https://github.com/gregmagdsick) and
[Gene Troy](https://github.com/energene)

## Acknowledgements
[Benjamin Harding](https://github.com/bharding2) gave us some helpful tutorials for learning Koa that saved us an immense amount of time.

## License

The project is licensed under the terms of the MIT license.
