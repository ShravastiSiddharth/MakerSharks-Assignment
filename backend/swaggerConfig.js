const swaggerJSDoc = require('swagger-jsdoc');


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My API Documentation', 
    version: '1.0.0', 
    description: 'This is the API documentation for my Express.js application',
  },
  servers: [
    {
      url: 'http://localhost:3000', 
      description: 'Development server',
    },
  ],
};


const options = {
  swaggerDefinition,
  
  apis: ['./routes/*.js'], 
};


const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
