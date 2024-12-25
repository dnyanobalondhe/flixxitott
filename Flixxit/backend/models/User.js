const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Title' }],
});

module.exports = mongoose.model('User', UserSchema);
