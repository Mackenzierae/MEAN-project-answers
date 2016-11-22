var mongoose = require('mongoose')
var users = require('./../controllers/users.js')
var questions = require('./../controllers/questions.js')
var answers = require('./../controllers/answers.js')

module.exports = function(app){
  console.log("server routes");

  app.post('/users', users.register);
  app.post('/login', users.login);
  //middleware is declared to be used here
  app.use(userAuth);
  //all the routes that use the middleware before invoking their functions:
  app.get('/getCurrentUser', users.getCurrentUser);
  app.post('/question', questions.newQuestions);
  app.get('/getQuestions', questions.getAllQuestions);
    app.get('/questions/:id', questions.show);
  app.post('/logout', users.logout);
  app.post('/answer/:id', answers.addAnswer);
}
//userAuth middleware
function userAuth(req,res,next){
  if(req.session.user){
    console.log('user has been authorized');
    next();
  }else{
    res.sendStatus(401);
  }
}
