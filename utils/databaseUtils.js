const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	}
);

module.exports.connectToDatabase = async function (sequelize) {
	try {
		await sequelize.authenticate();
		console.log('Connection to database has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
