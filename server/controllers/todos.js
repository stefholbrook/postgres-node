const Todo = require('../models').Todo

module.exports = {
  // This create function is designed to be a route handler for whichever
  // Express route we'll choose to attach it to
  create(req, res) {
    return Todo
      .create({ title: req.body.title })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error))
  },

  // fetching all todos from database and sending them back to the user as
  // an array in the response
  list(req, res) {
    return Todo
      .all()
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(400).send(error))
  }
}
