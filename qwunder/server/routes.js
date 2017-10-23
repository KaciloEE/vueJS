const ApiController = require('./controllers/ApiController')


module.exports = (app) => {
  app.get('/api', ApiController.show)	
  app.post('/api', (req, res) => {
    console.log(req.body)	
  })
}
