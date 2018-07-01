var assert = require('assert');
const MarioChar = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/mariokart');

// Describe our tests
describe('Updating records', function(){


var char ;
  beforeEach(function(done){

       char = new MarioChar({
      name: 'Mario',
      weight: 150
    });

        char.save().then(function(){
      done();
    });

  });


  // Finds record by name
  it('Update one record in the database', function(done){

      MarioChar.findOneAndUpdate({name:"Mario"}, {name:"Luigi"}).then(function(){
       MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result.name === "Luigi");
        done();

       });   


      });

  });


  // Finds record by name
  it('Update the weight by incremeting it to one', function(done){

    MarioChar.update({},{$inc:{weight:10}}).then(function(){

      MarioChar.findOne({name:"Mario"}).then(function(result){

        assert(result.weight === 160);
        done();


      });

    });

  });




});