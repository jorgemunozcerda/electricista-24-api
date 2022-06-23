if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	}
);

try {
	await sequelize.authenticate();
	console.log('Connection to database has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', (req, res) => {
	res.send('Llegaste');
});

const port = process.env.PORT || 0;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
