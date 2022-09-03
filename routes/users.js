const express = require('express');
const app = express();
const router = express.Router()
const userController = require('../controllers/users_controller');

router.get('/', userController.profile);

module.exports = router;