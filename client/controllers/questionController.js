console.log('New Question Controller');
app.controller('questionController', ["$scope", "questionFactory", "$location", function($scope, questionFactory, $location){
  $scope.test="workkkk";
  $scope.all_questions = {};
  // $scope.all_answers = {};

  var getAllQuestions = function(){
    questionFactory.getQuestions(function(data){
      $scope.all_questions = data;
      // getAllQuestions();
    })
  };


$scope.newQuestion = function(question){
  console.log($scope.newQuestion);
  questionFactory.addNewQuestion($scope.newQuestion, function(){
    // getAllQuestions();
    $location.url('/backhome');
  })
}
//
// $scope.newAnswer = function(new_Answer, questionId){
//   console.log("in newA    nswer function");
//   console.log(questionId);
//   console.log("*******************")
//   console.log(new_Answer);
//   console.log("********************")
//   questionFactory.addNewAnswer(new_Answer, questionId, function(response){
//     console.log("in question controller callback", response);
//     $location.url('/backhome');
//   })
// }
//



getAllQuestions();
}])
