console.log("Show Controller");
app.controller('showController', ["$scope", "questionFactory", "$location", "$routeParams", function($scope, questionFactory, $location, $routeParams){
  $scope.test="Show controller working?"
  // $scope.question = {};

console.log($routeParams.id);

  $scope.getQuestion = function(){
    questionFactory.getQuestion($routeParams.id, function(data){
      console.log(data);
      console.log("**************")
      $scope.question = data;
    })
  }
  $scope.getQuestion();



  $scope.newAnswer = function(new_Answer, questionId){
    console.log("in newA    nswer function");
    console.log(questionId);
    console.log("*******************");
    console.log(new_Answer);
    console.log("********************");
    questionFactory.addNewAnswer(new_Answer, questionId, function(response){
      // console.log("in question controller callback", response);
      $location.url('/backhome');
    })
  };


console.log($scope.question);
// $scope.getQuestion();

}])
