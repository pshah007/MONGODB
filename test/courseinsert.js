var assert = require('assert');
const CourseModel = require('C:/Users/Priyank Shah/Downloads/mongodb-playlist/model/courses');
const mongoose = require('mongoose');
// Describe our tests
describe('Course Insertion Testing', function(){

//Drop the characters collection before each test
this.timeout(5000);
beforeEach(function(done){


  //Drop the collection
  mongoose.connection.collections.courses.drop(function(){
    done();

  });
});


  it('Saves a course record to the database. Testing for Books lenght', function(done){

    const cour = new CourseModel({
      Name: 'Javascript',
      Instructor: 'M Hoffman',
      Books:
      [

      {Title:'Age of words',Pages:300,Author:[{ Name:"Frank Carl",Age:30 },{ Name:"Mario Cedra" ,Age:40 }]},
      {Title:'Freedom to die',Pages:300,Author:[{ Name:"Neil Carl",Age:30 },{ Name:"Mark Hunt" ,Age:40 }]}

      ]
    });

    cour.save().then(function(){
      
       CourseModel.findOne({Name:'Javascript'}).then(function(result){

        assert(result.Books.length === 2)
          done();
      });


    });

  });



  it('Saves a course record to the database. Testing for the name of the author', function(done){

    const cour = new CourseModel({
      Name: 'Java',
      Instructor: 'M Hoffman',
      Books:
      [

      {Title:'Age of words',Pages:300,Author:[{ Name:"Frank Carl",Age:30 },{ Name:"Mario Cedra" ,Age:40 }]},
      {Title:'Freedom to die',Pages:300,Author:[{ Name:"Neil Carl",Age:30 },{ Name:"Mark Hunt" ,Age:40 }]}

      ]
    });

    cour.save().then(function(){
      
       CourseModel.findOne({Name:'Java'}).then(function(result){

        assert(result.Books[0].Author[0].Name  === 'Frank Carl' && result.Books[0].Author[1].Name  === 'Mario Cedra' )
          done();
      });


    });

  });




});