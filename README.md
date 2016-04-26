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
Now you can use a HTTP client with standard REST commands to interact with your Jazz Masters database. Using a GET command on the endpoint below will yield all the masters in the database. Using a POST command on the endpoint below will allow you to add a Jazz Master to the database, following teh Model defined above.
```
http://localhost:3000/api/jazzmaster
```

For PUT and DELETE requests, the endpoint is the same, see below. For a PUT request, you should add all the fields for the Jazz Master, not just the fields you want to change. For a DELETE request, no data is needed to be sent.
```
http://localhost:3000/api/jazzmaster/[master name]
```

## Authors

Written by
[Greg Magdsick](https://github.com/gregmagdsick) and
[Gene Troy](https://github.com/energene)

## Acknowledgements
[Benjamin Harding](https://github.com/bharding2) gave us some helpful tutorials for learning Koa that saved us an immense amount of time.

## License

The project is licensed under the terms of the MIT license.
