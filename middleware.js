if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const jwt = require('jsonwebtoken');

module.exports.verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];
	if (!token) {
		return res.status(403).send({ mensaje: 'Request sin token' });
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				mensaje:
					'No tienes autorizacion o expiro token, vuelve a iniciar sesion.',
			});
		}
		next();
	});
};
