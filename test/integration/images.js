var indico = require('../..')
  , settings = require('../../lib/settings.js')
  , data = require('../data.json')
  , should = require('chai').should()
  , url = 'https://indico.io/static/img/people/slater.png'
  , path = require('path')
  , filePath = path.resolve(__dirname, './../slater.png')
  ;

describe('BatchImage', function () {
  this.timeout(10000);
  if (settings.resolveApiKey() === false) {
    // skip test -- indico auth keys are not available
    console.warn('Api keys are now required. Skipping some tests.\nhttp://docs.indico.io/v2.0/docs/api-keys')
    return;
  }
  describe('batchFer', function() {
    describe('with file path', function(done){
      it('should get the right response format', function(done) {
        indico.batchFer([filePath])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(6);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with web url', function(){
      it('should get the right response format', function(done) {
        indico.batchFer([url])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(6);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with array or arrays', function(){
      it('should get the right response format', function(done) {
        indico.batchFer([data])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(6);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });

  });

  describe('batchFacialFeatures', function() {
    describe('with file path', function(){
      it('should get the right response format', function(done) {
        indico.batchFacialFeatures([filePath])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(48);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with web url', function(){
      it('should get the right response format', function(done) {
        indico.batchFacialFeatures([url])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(48);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with array or arrays', function(){
      it('should get the right response format', function(done) {
        indico.batchFacialFeatures([data])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(48);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
  });

  describe('batchImageFeatures', function() {
    describe('with file path', function(done){
      it('should get the right response format', function(done) {
        indico.batchImageFeatures([data])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(2048);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })

      });
    });
    describe('with web url', function(done){
      it('should get the right response format', function(done) {
        indico.batchImageFeatures([data])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(2048);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })

      });
    });
    describe('with array or arrays', function(done){
      it('should get the right response format', function(done) {
        indico.batchImageFeatures([data])
          .then(function(res){

            res.should.have.length(1);
            Object.keys(res[0]).should.have.length(2048);
            done();
          })
          .catch(function(err) {
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
  });
});

describe('Image', function() {
  if (settings.resolveApiKey() === false) {
    // skip test -- indico auth keys are not available
    console.warn('Api keys are now required. Skipping some tests.\nhttp://docs.indico.io/v2.0/docs/api-keys')
    return;
  }
  describe('fer', function() {
    describe('with file path', function(done){

    });
    describe('with web url', function(done){

    });
    describe('with array or arrays', function(done){

    });
    it('should get the right response format', function(done) {
      indico.fer(data)
        .then(function(res){

          Object.keys(res).should.have.length(6);
          done();
        })
        .catch(function(err){
          err.should.not.exist();
          done(err);
          return;
        })

    });
  });

  describe('facialFeatures', function() {
    describe('with file path', function(done){
      it('should get the right response format', function(done) {
        indico.facialFeatures(filePath)
          .then(function(res){

            res.should.have.length(48);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })

      });
    });
    describe('with web url', function(done){
      it('should get the right response format', function(done) {
        indico.facialFeatures(url)
          .then(function(res){

            res.should.have.length(48);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with array or arrays', function(done){
      it('should get the right response format', function(done) {
        indico.facialFeatures(data)
          .then(function(res){

            res.should.have.length(48);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });

  });

  describe('imageFeatures', function() {
    describe('with file path', function(){
      it('should get the right response format', function(done) {
        indico.imageFeatures(filePath)
          .then(function(res){

            res.should.have.length(2048);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with web url', function(done){
      it('should get the right response format', function(done) {
        indico.imageFeatures(url)
          .then(function(res){

            res.should.have.length(2048);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
    describe('with array or arrays', function(done){
      it('should get the right response format', function(done) {
        indico.imageFeatures(data)
          .then(function(res){

            res.should.have.length(2048);
            done();
          })
          .catch(function(err){
            err.should.not.exist();
            done(err);
            return;
          })
      });
    });
  });

  });
