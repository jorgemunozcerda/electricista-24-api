if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const app = express();
const { sequelize, connectToDatabase } = require('./utils/databaseUtils');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const passport = require('passport');
const session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

connectToDatabase(sequelize);

sessionStore = new SequelizeStore({
	db: sequelize,
	checkExpirationInterval: 15 * 60 * 1000,
	expiration: 7 * 24 * 60 * 60 * 1000,
});

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		store: sessionStore,
	})
);

app.use(passport.initialize());

app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', usersRoutes);
app.use('/', (req, res) => {
	res.send('Llegaste');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
