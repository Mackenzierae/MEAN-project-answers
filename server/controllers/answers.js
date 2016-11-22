console.log('comments controller');
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {

  addAnswer: function(req,res){
      console.log("in new   Answer function in answers.js");
      Question.findOne({_id: req.params.id}, function(err, question){
        console.log("did I break.....?");
        var newAnswer = new Answer();
        if(req.body.supporting_deats){
          newAnswer.answer = req.body.answer;
          newAnswer.supporting_deats = req.body.supporting_deats;
          newAnswer._user = req.session.user._id;
          newAnswer._question = req.params.id;
          question.answers.push(newAnswer._id);
          newAnswer.save(function(err,result){
            if(err){
              console.log('error saving a new answer!');
              res.json(err);
            }else{
              console.log("added a new answer supposedly both to answers and pushed to questions answers........");
              question.save(function(err, result){
                if(err){
                  console.log("error saving new answer in question answers");
                  res.json(err);
                }else{
                  console.log("ultimate success");
                  res.sendStatus(200);
                }
              })
            }
          })

        }else{
          newAnswer.answer = req.body.answer;
          newAnswer._user = req.session.user._id;
          newAnswer._question = req.params.id;
          question.answers.push(newAnswer._id);
          newAnswer.save(function(err,result){
            if(err){
              console.log('error saving a new answer!');
              res.json(err);
            }else{
              console.log("added a new answer supposedly both to answers and pushed to questions answers........");
              question.save(function(err, result){
                if(err){
                  console.log("error saving new answer in question answers");
                  res.json(err);
                }else{
                  console.log("ultimate success");
                  res.sendStatus(200);
                }
              })
            }
          })
        }
      })

    },





};
