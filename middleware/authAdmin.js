const auth = require('./auth');

const authAdmin = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role !== 'admin') {
            return res.status(403).send('Access denied.');
        }
        next();
    });
};

module.exports = authAdmin;
