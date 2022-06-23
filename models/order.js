const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseUtils');

const Order = sequelize.define(
	'Order',
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		precio: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'Order', // We need to choose the model name
	}
);

module.exports = Order;
