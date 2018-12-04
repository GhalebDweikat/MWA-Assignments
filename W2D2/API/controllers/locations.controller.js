const locations = require('../models/locations.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
// Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "location content can not be empty"
        });
    }

    // Create a Note
    const location = new locations({
        title: req.body.title || "Untitled content",
        content: req.body.content
    });

    // Save Note in the database
    location.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};