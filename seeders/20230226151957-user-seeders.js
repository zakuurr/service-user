'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('users', [
      {
    name: 'Avatar',
  profession : 'Admin',
  role : 'admin',
  email : 'admin@gmail.com',
  password : await bcrypt.hash('admin',10),
  created_at : new Date(),
  updated_at : new Date(),
     },
     {
      name: 'User',
      profession : 'Student',
      role : 'student',
      email : 'user@gmail.com',
      password : await bcrypt.hash('user',10),
      created_at : new Date(),
      updated_at : new Date(),
     }
    
    ]);
   
  },

  async down (queryInterface, Sequelize) {
 
   
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
