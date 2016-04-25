const router = module.exports = require('koa-router')();
const Master = require(__dirname + '/../models/jazzmaster');
const errorHandler = require(__dirname + '/../lib/error_handler');
const bodyParser = require('koa-body-parser')();

router.get('/api/jazzmaster', function* () {
  yield Master.find(null, (err, data) => {
    if (err) return errorHandler(err);
    this.response.body = data;
  });
});

router.post('/api/jazzmaster/', bodyParser, function* () {
  var newMaster = new Master(this.request.body);
  yield newMaster.save((err) => {
    if (err) return errorHandler(err);
    this.response.body = 'New Jazz Master uploaded successfully';
  });
});

router.put('/api/jazzmaster/:id', bodyParser, function* () {
  var master = this.request.body;

  yield Master.findOne({ '_id': this.params.id }, (err, data) => {
      if (err) return errorHandler(err);

      data.name = master.name;
      data.instrument = master.instrument;
      data.facialHair = master.facialHair;
      data.save();
      this.response.body = 'good put';
  });
});

router.delete('/api/jazzmaster/:id', function* () {
  yield Master.remove({ '_id': this.params.id }, (err) => {
    if (err) return errorHandler(err);
    this.response.body = 'good delete';
  });
});
