'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    static associate(models) {
      message.belongsTo(models.user, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        onDelete: 'CASCADE'
      });
    }
  }

  message.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attachment: {   // correction orthographe
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    userId: {       // remplace idUser
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'message',
  });

  return message;
};