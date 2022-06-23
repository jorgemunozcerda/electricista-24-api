const User = require('../models/user');

module.exports.createUser = async function (req, res) {
	const newUser = await User.create(req.body);
	res.json({ response: 'User created maybe?', user: newUser });
};
