module.exports = {
    swaggerDefinition: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'Blog Api',
        description: 'Blog Api2, which contain different operation such as create delete comment etc',
        servers: ['http://localhost:3000'],
      },
      components: {
        securitySchemes: {
          jwt: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['routes/*.js'],
  };
  