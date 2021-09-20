const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo correspondiente a la tabla videogame
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    brand: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
	    
      type: DataTypes.DECIMAL,
      defaultValue:0,
    },
    stock : {
      type: DataTypes.INTEGER,
      defaultValue: 0,

     
    },
    picture: {
      type: DataTypes.STRING,
    }
  });
};

