'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING
      },

      content: {
        allowNull: false,
        type: Sequelize.STRING
      },

      attachment: { // correction orthographe
        type: Sequelize.STRING
      },

      likes: { // éviter "like"
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      userId: { // cohérent avec le model
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // EXACTEMENT le nom de la table
          key: 'id'       // minuscule
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('messages');
  }
};