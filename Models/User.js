const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  gmail: { type: String, require: true },
  password: { type: String, require: true },
});

 const User = mongoose.model("User",userSchema);
 module.exports = {User}
