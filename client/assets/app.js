var app = angular.module('app', ['ngRoute']);

//necessary to kick me back out to login page if not logged in
app.factory('loginInterceptor',['$q','$location',function($q, $location){
 return{
  'responseError': function(rejection){
   if (rejection.status == 401){
         $location.url('/login');
   }
   return $q.reject(rejection);
  }
 }
}])
//////

app.config(function ($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('loginInterceptor');
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/home',{
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  })
  .when('/backhome',{
    templateUrl: 'partials/home.html',
    controller: 'questionController'
  })
  .when('/allQuestions',{
  templateUrl: 'partials/new_question.html',
  controller: 'questionController'
  })
  .when('/new_question',{
  templateUrl: 'partials/new_question.html',
  controller: 'questionController'
  })
  .when('/question/:id',{
  templateUrl: 'partials/show.html',
  controller: 'showController'
  })



  .when('/question/:id/new_answer',{
  templateUrl: 'partials/answer.html',
  controller: 'questionController'
  })

   //
  //  .when('/allMessages', {
  //    templateUrl: 'partials/home.html',
  //    controller: 'messageController'
  //  })
  .otherwise({
    redirectTo: '/'
  })

})
