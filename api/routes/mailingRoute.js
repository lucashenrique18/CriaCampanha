module.exports = function(app){
    app.post('/api/mailing', app.api.services.token.validateToken, function (req, res) {
        app.api.controllers.mailingController.save(app, req, res);

    });

    app.get('/api/mailing', app.api.services.token.validateToken, function (req, res) {
        app.api.controllers.mailingController.findAll(app, req, res);

    });

    app.get('/api/mailing/:id', app.api.services.token.validateToken, function (req, res) {
        app.api.controllers.mailingController.findByID(app, req, res);

    });

    app.put('/api/mailing/:id', app.api.services.token.validateToken, function (req, res) {
        app.api.controllers.mailingController.alterByID(app, req, res);

    });

    app.delete('/api/mailing/:id', app.api.services.token.validateToken, function (req, res) {
        app.api.controllers.mailingController.deleteByID(app, req, res);

    });

}