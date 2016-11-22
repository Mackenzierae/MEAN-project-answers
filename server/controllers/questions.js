console.log('backend questions Controller (questions.js)');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

  getAllQuestions: function(req,res){
    Question.find({}).populate('_user').populate({path:'answers', model:'Answer', populate:{path:'_user', model:'User'}}).exec(function(err, questions){
      if(err){
        console.log('unable to grab questions');
        res.sendStatus(404);
      }else{
        console.log('got em allllllllllllll!!');
        res.json(questions);
      }
    })
  },


  // getAllMessages:function(req,res){
  //   Message.find({}).populate('_user').populate({path:'comments', model:'Comment', populate:{path:'_user', model:'User'}}).exec(function(err,messages){
  //     if(err){
  //       console.log('unable to grab messages');
  //       res.sendStatus(404);
  //     }else{
  //       console.log('foundem allll')
  //       res.json(messages);
  //
  //     }
  //   })
  // },

  newQuestions: function(req,res){
    console.log("in newQuestion function in questions.js");
    console.log(req.session.user._id);
    console.log("******************")
    console.log(req.body);
    console.log("******************")
    var newQuestions = new Question();
    if(req.body.description){
      newQuestion.question = req.body.question;
      newQuestion.description = req.body.description;
      newQuestion._user = req.session.user._id;
      newQuestion.save(function(show_me_err, result){
        console.log('trying to save new question.............', newQuestion);
        if(show_me_err){
          console.log("ERRROR:", show_me_err)
          console.log('unable to add question');
        }else{
          console.log('successfully add a question!');
          res.json(result);
        }
      })
    }else{
      newQuestions.question = req.body.question;
      newQuestions._user = req.session.user._id;
      newQuestions.save(function(show_me_err, result){
        console.log('trying to save new question.............', newQuestions);
        if(show_me_err){
          console.log("ERRROR:", show_me_err)
          console.log('unable to add question');
        }else{
          console.log('successfully add a question!');
          res.json(result);
        }
      })
    }
  },

  show: function(req,res){
    Question.findOne({_id:req.params.id}).populate('_user').populate({path:'answers', model:'Answer', populate:{path:'_user', model:'User'}}).exec(function(err, question){
      //POPULATE
      if(err){
        console.log("it went to shit");
      }else{
        res.json(question)
      }
    })
  },
  //
  // show: function(req,res){
  //   Question.findOne({_id:req.params.id}, function(err,question){
  //     //POPULATE
  //     if(err){
  //       console.log("it went to shit");
  //     }else{
  //       res.json(question)
  //     }
  //   })
  // },
  //
  // getAllQuestions: function(req,res){
  //   Question.find({}).populate('_user').populate({path:'answers', model:'Answer', populate:{path:'_user', model:'User'}}).exec(function(err, questions){
  //     if(err){
  //       console.log('unable to grab questions');
  //       res.sendStatus(404);
  //     }else{
  //       console.log('got em allllllllllllll!!');
  //       res.json(questions);
  //     }
  //   })
  // },


}
