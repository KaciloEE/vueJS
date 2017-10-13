const ApiController = require('./controllers/ApiController')


module.exports = (app) => {
  app.get('/api', ApiController.show)
}
