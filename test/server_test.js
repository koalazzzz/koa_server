'use strict';

const mongoose = require('mongoose');
const chai = require('chai');
const Master = require(__dirname + '/../models/jazzmaster');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
// set path for mongo
process.env.MONGOLAB_URI = 'mongodb://localhost/jazzDb';
// fire up the server
const server = require(__dirname + '/../lib/server');

describe('Jazzmaster API', () => {
  before(() => {
    server.listen(3000);
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect();
      server.close();
      done();
    });
  });
  it('should be able to make a GET request at /jazzmaster', (done) => {
    request('localhost:3000')
    .get('/api/jazzmaster')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });
  it('should be able to POST to /jazzmaster', (done) => {
    request('localhost:3000')
    .post('/api/jazzmaster')
    .send({ name: 'Thelonious' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('New Jazz Master uploaded successfully');
      done();
    });
  });

  describe('tests that require an existing db entry', () => {
    beforeEach((done) => {
      Master.create({ name: 'Django' }, (err, data) => {
        if (err) return process.stdout.write(err);
        this.testJazzmaster = data;
        done();
      });
    });
    it('should be able to PUT up new info', (done) => {
      request('localhost:3000')
      .put('/api/jazzmaster/' + this.testJazzmaster._id)
      .send(this.testJazzmaster)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('good put');
        done();
      });
    });
    it('should be able to DELETE a jazzmaster', (done) => {
      request('localhost:3000')
      .delete('/api/jazzmaster/' + this.testJazzmaster._id)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('good delete');
        done();
      });
    });
  });
});
