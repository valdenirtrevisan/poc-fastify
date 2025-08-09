import openapiGlue from 'fastify-openapi-glue';
import userService from './services/userService';

const glueOptions = {
  specification: './swagger.yml',
  serviceHandlers: { ...userService },
  prefix: '/api',
};

export { openapiGlue, glueOptions };
