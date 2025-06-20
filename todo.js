const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true  // Every todo must have a task
  },
  completed: {
    type: Boolean,
    default: false  // Default to not completed
  },
  createdAt: {
    type: Date,
    default: Date.now  // Automatically set creation time
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],  // Only allow these values
    default: 'medium'
  }
});

module.exports = mongoose.model('Todo', todoSchema);
