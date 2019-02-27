var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Article1 = new Schema({
  headline: {
    type: String,
    unique: true
  },
  summary: {
    type: String
  },
  url: {
    type: String
  }
});
var Article = mongoose.model("Article", Article1);
module.exports = Article;
