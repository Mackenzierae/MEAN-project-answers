console.log('Home Controller');
app.controller('homeController', ["$scope", "loginFactory", "$location", function($scope, loginFactory, $location){
  $scope.test="Am I working...?";

  // $scope.all_answers = {};



  loginFactory.getLoggedUser(function(logged_user_data){
    $scope.logged_user = logged_user_data;
  })

  $scope.logout = function(){
    loginFactory.logout(function(){
      $location.url('/');
  })}
///////////////////////////////////////////////////______ __ _






}])
