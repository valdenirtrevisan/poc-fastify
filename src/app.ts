import fastify from 'fastify';
import { openapiGlue, glueOptions } from './openApiGlue';

export const createApp = () => {
  const app = fastify({
    logger: {
      level: 'debug',
      transport: { target: 'pino-pretty' },
    },
    ajv: {
      customOptions: {
        strict: false, // Permite keywords como "example"
        strictSchema: false, // Desativa outras checagens estritas
      },
    },
  });

  app.register(openapiGlue, glueOptions);

  return app;
};
