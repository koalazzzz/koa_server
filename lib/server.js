const app = require('koa')();
//  don't know why putting () after require koa-rouer, play with it
const router = require('koa-router')();

//  what does the star do in the list
router.get('/', function* (next) {
  this.body = 'Hello World!';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {console.log('Server up on 3000');});
