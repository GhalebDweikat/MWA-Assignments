module.exports = (app) => {
    const locations = require('../controllers/locations.controller.js');

    app.post('/locations', locations.create);

    app.get('/locations', locations.findAll);

    app.get('/locations/:id', locations.findOne);

    app.put('/locations/:id', locations.update);

    app.delete('/locations/:id', locations.delete);
}