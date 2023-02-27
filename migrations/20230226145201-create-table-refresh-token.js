'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('refresh_token', { 
      id: {
        type :Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      token: {
        type :Sequelize.TEXT,
        allowNull: false
      },
      user_id:{
        type :Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:true
      }
     });

     await queryInterface.addConstraint('refresh_token',{
      type : 'foreign key',
      fields:['user_id'],
      name : 'REFRESH_TOKEN_USER_ID',
      references : {
        table : 'users',
        field : 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('refresh_token');
    
  }
};
