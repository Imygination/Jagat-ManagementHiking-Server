'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posName: {
        defaultValue: '-',
        type: Sequelize.STRING
      },
      time: {
        defaultValue: '-',
        type: Sequelize.STRING
      },
      posMdpl: {
        defaultValue: '-',
        type: Sequelize.STRING
      },
      posDescription: {
        defaultValue: '-',
        type: Sequelize.TEXT
      },
      MountainId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mountains',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pos');
  }
};