console.log('Question Factory');
app.factory('questionFactory', ['$http', "$location", function($http, $location){
  var factory = {};

  factory.addNewQuestion = function(question, callback){
    $http({
      method: "POST",
      url: "/question",
      data: question
    }).then(function(res){
      console.log("this is the question that gets back from the server:", res);
      callback(res);
    })
  },

  factory.getQuestions = function(callback){
    $http({
      method:'get',
      url: '/getQuestions',
    }).then(function(returned_data){
      callback(returned_data.data);
    })
  },

  factory.getQuestion = function(id, callback){
    $http({
      url: '/questions/'+id,
      method: 'GET'
    }).then(function(question_data){
      callback(question_data.data)
    })
  },

  factory.addNewAnswer = function(answer, questionId, callback){
    console.log('**************' + questionId + '*************');
    $http({
      method: "POST",
      url: "/answer/"+questionId,
      data: answer,
    }).then(function(returned_data){
      callback(returned_data);
    })
  }

  return factory;
}])
