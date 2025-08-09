import { createApp } from './app';
import { env } from './utils/env';

createApp().listen({
  port: env.PORT,
});
