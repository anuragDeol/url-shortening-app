const mongoose = require('mongoose');
const shortid = require('shortid');     // library - shortens the url

const linkSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
