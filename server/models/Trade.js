const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  portfolioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  ticker: {
    type: String,
    required: true
  },
  action: {
    type: String,
    enum: ['buy', 'sell', 'short', 'cover'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  realizedGain: {
    type: Number,
    default: 0
  },
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: {}
  }
});

// Index for efficient querying
tradeSchema.index({ portfolioId: 1, timestamp: -1 });
tradeSchema.index({ ticker: 1, timestamp: -1 });

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade; 