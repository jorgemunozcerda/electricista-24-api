const User = require('../models/user');
var crypto = require('crypto');

module.exports.createUser = async function (req, res) {
	req.body.isAdmin = false;

	const newUser = await User.create(req.body).catch(function (err) {
		console.log(err);
		res.json({ response: err });
		return;
	});
	res.json({ response: 'User created maybe?', user: newUser });
};

module.exports.signUp = async function (req, res) {
	let user = await User.findOne({ where: { id: req.body.id } }).catch(function (
		err
	) {
		console.log(err);
		return res.json({ response: err });
	});
	user.username = req.body.username;

	let salt = crypto.randomBytes(16);
	const key = crypto.pbkdf2Sync(req.body.password, salt, 310000, 32, 'sha256');

	let hashedPassword = key.toString('hex');
	console.log(hashedPassword);

	user.password = hashedPassword;

	await user.save();
};
