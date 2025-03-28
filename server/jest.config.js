module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000, // 30 seconds
  setupFilesAfterEnv: ['./tests/setup.js'],
  verbose: true,
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/'
  ]
}; 