const router = require('express').Router();
router.use('/users', require('./modules/user/user.route'));

module.exports = router;