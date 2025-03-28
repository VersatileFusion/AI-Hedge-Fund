const express = require('express');
const router = express.Router();
const pythonBridge = require('../services/pythonBridge');

// Helper function to determine if we're in a test environment
const isTestEnvironment = () => {
  return process.env.NODE_ENV === 'test';
};

/**
 * @swagger
 * /api/analysis/run:
 *   post:
 *     summary: Run market analysis
 *     tags: [Analysis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tickers
 *               - startDate
 *               - endDate
 *             properties:
 *               tickers:
 *                 type: array
 *                 items:
 *                   type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Analysis results
 */
router.post('/run', async (req, res) => {
  try {
    const { tickers, startDate, endDate } = req.body;
    console.log('Running market analysis:', req.body);
    
    let analysis;
    
    // Return mock data when in test environment
    if (isTestEnvironment()) {
      analysis = {
        analysis: { 
          summary: 'Mock analysis for testing',
          decisions: [
            { ticker: 'AAPL', action: 'buy', reason: 'Testing' },
            { ticker: 'GOOGL', action: 'hold', reason: 'Testing' },
            { ticker: 'MSFT', action: 'sell', reason: 'Testing' }
          ]
        }
      };
    } else {
      // Call actual Python AI model in production
      analysis = await pythonBridge.runHedgeFund({ tickers, startDate, endDate });
    }
    
    res.json(analysis);
  } catch (error) {
    console.error('Error running analysis:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/analysis/backtest:
 *   post:
 *     summary: Run backtest analysis
 *     tags: [Analysis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tickers
 *               - startDate
 *               - endDate
 *               - initialCapital
 *             properties:
 *               tickers:
 *                 type: array
 *                 items:
 *                   type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               initialCapital:
 *                 type: number
 *     responses:
 *       200:
 *         description: Backtest results
 */
router.post('/backtest', async (req, res) => {
  try {
    const { tickers, startDate, endDate, initialCapital } = req.body;
    console.log('Running backtest:', req.body);
    
    let backtestResults;
    
    // Return mock data when in test environment
    if (isTestEnvironment()) {
      backtestResults = {
        results: { 
          summary: 'Mock backtest for testing',
          portfolio_values: [100000, 102000, 105000],
          trades: [
            { ticker: 'AAPL', action: 'buy', quantity: 10, price: 150, timestamp: '2024-01-05' },
            { ticker: 'GOOGL', action: 'buy', quantity: 5, price: 2500, timestamp: '2024-01-10' },
            { ticker: 'AAPL', action: 'sell', quantity: 5, price: 160, timestamp: '2024-01-20' }
          ]
        }
      };
    } else {
      // Call actual Python AI model in production
      backtestResults = await pythonBridge.runBacktest({ tickers, startDate, endDate, initialCapital });
    }
    
    res.json(backtestResults);
  } catch (error) {
    console.error('Error running backtest:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 