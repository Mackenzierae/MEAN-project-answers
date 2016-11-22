console.log('Login/Reg Factory');
app.factory('loginFactory', ['$http', "$location", function($http, $location){
  var factory = {};

  factory.registerUser = function(user, callback){
    $http({
      method: "POST",
      url: "/users",
      data: user
    }).then(function(returned_data){
      console.log("factory reveiced response:", returned_data.data);
      callback(returned_data.data);
    })
  }
  //login user
  factory.loginUser = function(user, callback){
    $http({
      method: "POST",
      url: "/login",
      data: user
    }).then(function(returned_data){
      console.log('factory received response:', returned_data.data);
      callback(returned_data.data);
    })
  }
  //the session in ONLY in the server side,
    //so I have to go back to the server side to set that session to be the logged_user on the client side.
  factory.getLoggedUser = function(callback){
    $http({
      method:'get',
      url: '/getCurrentUser'
    }).then(function(res){
      callback(res.data);
    })
  }

  factory.logout = function(callback){
    console.log('factory logout');
    $http({
      method:'POST',
      url: '/logout'
    }).then(function(res){
      callback();
    })
  }

  return factory;
}])
