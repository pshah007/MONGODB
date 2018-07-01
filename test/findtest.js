var assert = require('assert');
const MarioChar = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/mariokart');

// Describe our tests
describe('Finding records', function(){


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
  it('Finds a record from the database by using name', function(done){

   MarioChar.findOne({name:"Mario"}).then(function(result){
    assert(result.name === "Mario");
    done();
   });

  

  });

  //Find record by ID
  it('Finds a record from the database by using id', function(done){

   MarioChar.findOne({_id:char._id}).then(function(result){
    assert(result._id.toString() === char._id.toString());
    done();
   });

  

  });



});