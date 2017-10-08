// add an API route that maps to controller functionality
// This will add two new routes, a welcome route at /api and a route to create
// todos at /api/todos
const todosController = require('../controllers').todos
const todoItemsController = require('../controllers').todoItems

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }))

  app.post('/api/todos', todosController.create)
  app.get('/api/todos', todosController.list)
  app.post('/api/todos/:todoId/items', todoItemsController.create)
}
