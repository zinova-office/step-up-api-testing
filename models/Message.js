// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
