var config = require('./config');
var should = require('should');
var nock = require('nock');
var up = require('../index')(config);

var baseApi = nock('https://jawbone.com:443');

describe('up', function(){
  describe('.moves', function(){
    describe('.get()', function(){
      it('should return correct url', function(){
        up.moves.get({}, function(err, body) {
          body.should.equal('https://jawbone.com/nudge/api/v.1.1/users/@me/moves?');
        }, debug);
      });
    });

    describe('.get({ xid: 123 })', function(){
      it('should return correct url', function(){
        up.moves.get({ xid: 123 }, function(err, body) {
          body.should.equal('https://jawbone.com/nudge/api/v.1.1/moves/123');
        }, debug);
      });
    });
  });
});
