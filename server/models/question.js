var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//messageSchema
var QuestionSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: {type: String, required:true, minlength: 10, trim: true},
  description: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps:true});

mongoose.model('Question', QuestionSchema);
