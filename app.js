if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const app = express();
const { sequelize, connectToDatabase } = require('./utils/databaseUtils');

connectToDatabase(sequelize);

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
