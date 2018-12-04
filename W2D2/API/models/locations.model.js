const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    name: String,
    category: String,
    location: [Number]
}, {
    timestamps: true
});

module.exports = mongoose.model('location', locationSchema);