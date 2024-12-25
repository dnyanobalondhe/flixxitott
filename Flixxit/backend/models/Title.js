const mongoose = require('mongoose');

const TitleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    genre: [String],
    thumbnail: String,
    videoUrl: String,
});

module.exports = mongoose.model('Title', TitleSchema);
