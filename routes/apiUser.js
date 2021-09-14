const express = require('express');
const getUser = require('./../utilities/utilitiesUser');
const router = express.Router();

router.get('/', getUser.getAllUser);
// router.post('/signup', getUser.createUser);
router.post('/login', getUser.logUser);
router.get('/logout',getUser.logoutUser);


module.exports = router