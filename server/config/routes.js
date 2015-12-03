var linksController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function(app, express) {
  // app.param will hijack any request with a 'code' parameter on in
  // like line 18 below. That code will actually be the shortned url
  // so the real URL will be pre fetched from mongo and attached to
  // req.navLink before it reaches line 18.
  app.param('code', linksController.findUrl);

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/links/', linksController.allLinks)
  app.post('/api/links/', linksController.newLink);
  app.get('/api/links/:code', linksController.navToLink)

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

