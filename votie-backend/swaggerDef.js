const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Votie API",
    version: "1.0.0",
    description: "Votie API documentation",
    license: {
        name: "MIT",
        url: 'https://spdx.org/licenses/MIT.html',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;


// steps to achieve while documenting the API:

/**
 * 1. create swagger api specification
 * 2. create swagger-ui-express
 * 3. document the apis
 * 
 * */ 