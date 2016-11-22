var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// answer Schema:
var AnswerSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  answer: {type: String, required:true, minlength:5, trim: true},
  supporting_deats: {type: String},
},{timestamps:true});

mongoose.model('Answer', AnswerSchema);
