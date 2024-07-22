const router = require("express").Router();
const auth = require("../componnents/authentications/admin/auth");

router.post('/signup',auth.login);

module.exports = router;