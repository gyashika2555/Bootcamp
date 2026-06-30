const route = require('express').Router();
const { login, register, home, dashboard } = require('../controller/Api');
const auth = require('../middleware/auth');

route.post('/register', register);
route.post('/login', login);
route.get('/home', home);
route.get('/dashboard', auth, dashboard);

module.exports = route;
