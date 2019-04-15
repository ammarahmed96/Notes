var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    date: { type: Date, default: Date.now }
});

module.exports = {
    user: mongoose.model('User', userSchema)
}