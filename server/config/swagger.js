const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Hedge Fund API',
      version: '1.0.0',
      description: 'API documentation for AI Hedge Fund system',
      contact: {
        name: 'Erfan Ahmadvand',
        phone: '+989109924707'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './routes/*.js',
    './config/swagger-schemas.js'
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs; 