var assert = require('assert');
const MarioChar = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/mariokart');

// Describe our tests
describe('Deleting records', function(){


var char ;
  beforeEach(function(done){

       char = new MarioChar({
      name: 'Mario'
    });

        char.save().then(function(){
      done();
    });

  });


  // Finds record by name
  it('Delete one record from the database', function(done){

   MarioChar.findOneAndRemove({name:'Mario'}).then(function(){

    MarioChar.findOne({name:'Mario'}).then(function(result){
      assert(result === null);
      done();

    });

   });
  });





});