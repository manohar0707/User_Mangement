const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Assume hashed passwords
});
module.exports = mongoose.model('User', userSchema);
