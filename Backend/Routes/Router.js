const express = require('express');
const searchResults = require("../Controllers/searchController");

const router = express.Router()

router.route('/').post(searchResults);  //routing 

module.exports = router;