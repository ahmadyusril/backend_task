'use strict';

const { UpdatedAt } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Genshin Impact',
        isDone: false,
        createdAt: new Date,
        UpdatedAt: new Date 
      },
      {
        title: 'Honkai Star Rail',
        isDone: true,
        createdAt: new Date,
        UpdatedAt: new Date
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
