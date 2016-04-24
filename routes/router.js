const router = module.exports = require('koa-router')();
const Master = require(__dirname + '/models/jazzmaster');
const errorHandler = require(__dirname + '/lib/error_handler');
const bodyParser = require('koa-body-parser');

router.get('/api/jazzmaster', function* () {
  yield Master.find(null, (err, data) => {
    if (err) return errorHandler(err);
    this.response.body = data;
  });
});

router.post('/api/jazzmaster/', bodyParser, function* () {
  var newMaster = new Master(this.request.body);
  yield newMaster.save((err, data) => {
    if (err) return errorHandler(err);
    this.response.body = 'New Jazz Master uploaded successfully';
  });
});

router.put('/api/jazzmaster/:name', function* () {

});

router.delete('/api/jazzmaster', function* () {

});
