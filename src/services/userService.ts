import { FastifyReply, FastifyRequest } from 'fastify';
import type { components, paths } from 'src/types/api';

type ReqCreateUser = components['schemas']['User'];

// src/services/userService.ts
export default {
  // Operação correspondente ao 'operationId' no OpenAPI
  getUser: async (req: any, reply: any) => {
    const { id } = req.params;
    return { user: { id, name: 'John Doe' } };
  },

  createUser: async (req: FastifyRequest<{ Body: ReqCreateUser }>, reply: FastifyReply) => {
    const { firstName } = req.body;

    return { id: 123, firstName };
  },

  haha: async (req: FastifyRequest, reply: FastifyReply) => {
    return { message: 'Hahaha!' };
  },
};
