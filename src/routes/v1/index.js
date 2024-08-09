const express = require ('express');
const router = express.Router();

const {info_contorller} = require('../../controller')

router.get('/',info_contorller)

module.exports = router