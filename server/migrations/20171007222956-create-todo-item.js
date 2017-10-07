'use strict';
module.exports = {
  // When we run these migrations, the up function will be executed. It will
  // take care of creating the table and it's associated columns for us
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TodoItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complete: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      todoId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Todos',
          key: 'id',
          as: 'todoId'
        }
      }
    })
  },
  // If we needed to rollback (undo) the migration, the down function would be
  // executed and it would undo whatever the up function did, thus returning the
  // our database to the same state it was in before we performed the migration.
  down: (queryInterface /*, Sequelize*/) => {
    return queryInterface.dropTable('TodoItems')
  }
}
