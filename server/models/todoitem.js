'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  TodoItem.associate = (models) => {
    // define the relationship between the TodoItems and the Todo objects
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      // tells Postgres that if we delete a todo, it's associated todo items
      // should be deleted as well
      onDelete: 'CASCADE'
    })
  }

  return TodoItem
}
