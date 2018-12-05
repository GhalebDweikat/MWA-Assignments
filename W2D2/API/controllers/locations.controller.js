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
        name: req.body.name,
        category: req.body.category,
        location: req.body.location
    });

    // Save Note in the database
    location.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the location."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    locations.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    locations.findById(req.params.noteId)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "location not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "location not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving location with id " + req.params.id
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "location content can not be empty"
        });
    }

    // Find note and update it with the request body
    locations.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        category: req.body.category,
        location: req.body.location
    }, {new: true})
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "location not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "location not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating location with id " + req.params.id
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    locations.findByIdAndRemove(req.params.id)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "location not found with id " + req.params.id
                });
            }
            res.send({message: "location deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "location not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete location with id " + req.params.id
        });
    });
};