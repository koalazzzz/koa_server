const app = require('koa')();
const router = require(__dirname + '/../routes/router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jazzDb');

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {process.stdout.write('Server up on 3000\n');});
