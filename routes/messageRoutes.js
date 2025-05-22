// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { createMessage, getAllMessages } = require('../controllers/messageController');

router.post('/message', createMessage);
router.get('/messages', getAllMessages);

module.exports = router;
