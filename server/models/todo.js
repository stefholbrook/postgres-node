'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      // database will not allow us to write to it if we don't provide a value for the title
      allowNull: false
    }
  })

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      // every time we query for a todo and include it's todo items, they'll be
      // included under the key todoItems instead of TodoItems
      as: 'todoItems'
    })
  }

  return Todo
}
