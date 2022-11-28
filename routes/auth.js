const {login,register,companyregister,getCompany} = require('../controllers/login')
const express = require('express')
const router = express.Router();

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/cregister').post(companyregister).get(getCompany)


module.exports = router;