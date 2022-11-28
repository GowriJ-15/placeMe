const {ifUserEligible} = require('../controllers/cgpa')
const express = require('express')
const router = express.Router();

router.route('/:id').get(ifUserEligible)



module.exports = router;