const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();

router.get("/", newsController.home);
router.get("/search", newsController.search);
router.get("/details/:idx", newsController.show);

module.exports = router;