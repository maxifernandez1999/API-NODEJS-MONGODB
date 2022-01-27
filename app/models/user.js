const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age:{
    type: Number
  },
  lastName: String,
  email: String,
  password: String
},{
  timestamps: true,
  versionKey: false
});
const User = mongoose.model('User', userSchema);

module.exports = User;