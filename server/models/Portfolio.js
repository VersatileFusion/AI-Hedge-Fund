const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  ticker: String,
  long: { type: Number, default: 0 },
  short: { type: Number, default: 0 },
  longCostBasis: { type: Number, default: 0 },
  shortCostBasis: { type: Number, default: 0 },
  shortMarginUsed: { type: Number, default: 0 }
});

const realizedGainSchema = new mongoose.Schema({
  ticker: String,
  long: { type: Number, default: 0 },
  short: { type: Number, default: 0 }
});

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initialCapital: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  cash: { type: Number, required: true },
  marginUsed: { type: Number, default: 0 },
  positions: [positionSchema],
  realizedGains: [realizedGainSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
portfolioSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Method to calculate total portfolio value
portfolioSchema.methods.calculateTotalValue = function() {
  let totalValue = this.cash;
  
  this.positions.forEach(position => {
    // Add long positions
    if (position.long > 0) {
      totalValue += position.long * position.longCostBasis;
    }
    
    // Subtract short positions
    if (position.short > 0) {
      totalValue -= position.short * position.shortCostBasis;
    }
  });
  
  return totalValue;
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio; 