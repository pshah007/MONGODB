var assert = require('assert');
const mongoose = require('mongoose');
const Author = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/author');

// Describe our tests
describe('Saving records for author', function(){



  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){

      done();

    });

  });

  // Create tests
  it('Saves a record of author to the database', function(done){
    const char = new Author({
      Name: 'Priyank',
      Age:30,
      Books:[{Title:'Age of words',Pages:300},{Title: 'World full of fear',Pages:300}]
    });

    char.save().then(function(){
  
      Author.findOne({Name:'Priyank'}).then(function(result){

        assert(result.name === 'Priyank' && result.Books.length === 1)
          done();
      });
    });

  });





  it('Adds a book to an author in the database', function(done){

    var pat = new Author({
      Name:'Priyank',
      Age:30,
      Books:[{Title:'Age of words',Pages:300},{Title: 'World full of fear',Pages:300}]


    });
    pat.save().then(function(){

        Author.findOne({Name:'Priyank'}).then(function(record){

            record.Books.push({Title:"Wise Mans's Fear", Pages:500});
            record.save().then(function(){
              Author.findOne({Name:"Priyank"}).then(function(result){

                  assert(result.Books.length === 2 && result.Books.Title === "Wise Mans's Fear");
                  done();

              });

            });
        });

    });

  });









});