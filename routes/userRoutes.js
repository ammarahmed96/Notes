
var userController = require('../controllers/userController');

module.exports = function (app) {

    app.get('/', userController.welcome);

    app.post('/sign-up', userController.signUp);

    app.post('/sign-in', userController.signIn);

}