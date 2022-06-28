const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/databaseUtils');
const Order = require('./order');

const User = sequelize.define(
	'User',
	{
		password: {
			type: DataTypes.STRING,
		},
		username: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
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
		},
		// orders: {
		// 	type: DataTypes.ARRAY(DataTypes.INTEGER),
		// 	references: {
		// 		model: Order,
		// 		key: 'id',
		// 	},
		// },
		isAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{}
);

module.exports = User;
