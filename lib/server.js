const app = require('koa')();
const router = require(__dirname + '/../routes/router');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/jazzDb');

app.use(router.routes()).use(router.allowedMethods());

module.exports = exports = app.listen(port, () => {
  process.stdout.write('Server up on ' + port + '\n');
});
