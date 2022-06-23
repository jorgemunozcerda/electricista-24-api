const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseUtils');
const Order = require('./order');

const User = sequelize.define(
	'User',
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		streetAndNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		colonia: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		initialProblemDescription: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		orders: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			references: {
				model: Bar,
				key: 'id',
			},
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'User', // We need to choose the model name
	}
);

module.exports = User;
