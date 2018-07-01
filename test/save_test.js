var assert = require('assert');
const MarioChar = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/mariokart');

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

    const char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

});