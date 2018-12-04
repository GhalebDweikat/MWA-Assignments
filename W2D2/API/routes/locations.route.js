module.exports = (app) => {
    const locations = require('../controllers/locations.controller.js');

    app.post('/locations', locations.create);

    app.get('/locations', locations.findAll);

    app.get('/locations/:noteId', locations.findOne);

    app.put('/locations/:noteId', locations.update);

    app.delete('/locations/:noteId', locations.delete);
}