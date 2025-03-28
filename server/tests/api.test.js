const request = require('supertest');
const { app, mongoose } = require('../app');
const Portfolio = require('../models/Portfolio');
const Trade = require('../models/Trade');

// Mock the Python bridge service
jest.mock('../services/pythonBridge', () => {
  return {
    runHedgeFund: jest.fn().mockResolvedValue({
      analysis: { summary: 'mocked analysis', decisions: [] }
    }),
    runBacktest: jest.fn().mockResolvedValue({
      results: { summary: 'mocked backtest', portfolio_values: [] }
    }),
    getMarketData: jest.fn().mockResolvedValue({
      data: { AAPL: [], GOOGL: [], MSFT: [] }
    })
  };
});

describe('API Tests', () => {
  let testPortfolioId;
  let testTradeId;

  // Helper function to wait for database operations to complete
  const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Create test data before running tests
  beforeAll(async () => {
    try {
      // Get the collection names (they can vary based on model configuration)
      const portfolioCollection = mongoose.model('Portfolio').collection.name;
      const tradeCollection = mongoose.model('Trade').collection.name;
      
      console.log(`Using collections: portfolios=${portfolioCollection}, trades=${tradeCollection}`);
      
      // Create a test portfolio
      const portfolio = new Portfolio({
        name: 'Test Portfolio',
        initialCapital: 100000,
        currentValue: 100000,
        cash: 100000,
        positions: [],
        realizedGains: []
      });
      
      const savedPortfolio = await portfolio.save();
      testPortfolioId = savedPortfolio._id.toString();
      console.log('Created test portfolio with ID:', testPortfolioId);
      
      // Create a test trade
      const trade = new Trade({
        portfolioId: testPortfolioId,
        ticker: 'AAPL',
        action: 'buy',
        quantity: 5,
        price: 150.00,
        timestamp: new Date()
      });
      
      const savedTrade = await trade.save();
      testTradeId = savedTrade._id.toString();
      console.log('Created test trade with ID:', testTradeId);
      
      // Wait for a moment to ensure data is fully persisted
      await waitFor(500);
      
      // Verify data was saved correctly
      const checkPortfolio = await Portfolio.findById(testPortfolioId);
      const checkTrade = await Trade.findById(testTradeId);
      
      if (!checkPortfolio || !checkTrade) {
        throw new Error('Test data not saved correctly');
      }
      
      console.log('Test data verified in database');
    } catch (error) {
      console.error('Error setting up test data:', error);
      throw error;
    }
  });

  // Clear mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Portfolio Endpoints', () => {
    test('POST /api/portfolio - Create a new portfolio', async () => {
      const response = await request(app)
        .post('/api/portfolio')
        .send({
          name: 'New Portfolio',
          initialCapital: 100000,
          cash: 100000
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
      expect(response.body.name).toBe('New Portfolio');
    });

    test('GET /api/portfolio - Get all portfolios', async () => {
      const response = await request(app)
        .get('/api/portfolio');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.some(p => p._id === testPortfolioId)).toBeTruthy();
    });

    test('GET /api/portfolio/:id - Get specific portfolio', async () => {
      const response = await request(app)
        .get(`/api/portfolio/${testPortfolioId}`);

      expect(response.status).toBe(200);
      expect(response.body._id).toBe(testPortfolioId);
    });

    test('POST /api/portfolio/:id/analyze - Run portfolio analysis', async () => {
      const response = await request(app)
        .post(`/api/portfolio/${testPortfolioId}/analyze`)
        .send({
          tickers: ['AAPL', 'GOOGL', 'MSFT'],
          startDate: '2024-01-01',
          endDate: '2024-02-01'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('analysis');
    });

    test('POST /api/portfolio/:id/backtest - Run portfolio backtest', async () => {
      const response = await request(app)
        .post(`/api/portfolio/${testPortfolioId}/backtest`)
        .send({
          tickers: ['AAPL', 'GOOGL', 'MSFT'],
          startDate: '2024-01-01',
          endDate: '2024-02-01',
          initialCapital: 100000
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('results');
    });
  });

  describe('Trade Endpoints', () => {
    test('POST /api/trades - Create a new trade', async () => {
      const response = await request(app)
        .post('/api/trades')
        .send({
          portfolioId: testPortfolioId,
          ticker: 'GOOGL',
          action: 'buy',
          quantity: 3,
          price: 2500.00
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
    });

    test('GET /api/trades - Get all trades', async () => {
      const response = await request(app)
        .get('/api/trades');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.some(t => t._id === testTradeId)).toBeTruthy();
    });

    test('GET /api/trades/:id - Get specific trade', async () => {
      const response = await request(app)
        .get(`/api/trades/${testTradeId}`);

      expect(response.status).toBe(200);
      expect(response.body._id).toBe(testTradeId);
    });
  });

  describe('Analysis Endpoints', () => {
    test('POST /api/analysis/run - Run market analysis', async () => {
      const response = await request(app)
        .post('/api/analysis/run')
        .send({
          tickers: ['AAPL', 'GOOGL', 'MSFT'],
          startDate: '2024-01-01',
          endDate: '2024-02-01'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('analysis');
    });

    test('POST /api/analysis/backtest - Run backtest analysis', async () => {
      const response = await request(app)
        .post('/api/analysis/backtest')
        .send({
          tickers: ['AAPL', 'GOOGL', 'MSFT'],
          startDate: '2024-01-01',
          endDate: '2024-02-01',
          initialCapital: 100000
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('results');
    });
  });
}); 