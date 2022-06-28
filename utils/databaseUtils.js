const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		logQueryParameters: true,
	}
);

module.exports.connectToDatabase = async function (sequelize) {
	try {
		await sequelize.authenticate();
		console.log('Connection to database has been established successfully.');
		// await sequelize.sync({ force: true });
		// console.log('Database tables are correct');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
