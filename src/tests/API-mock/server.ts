import { setupServer } from 'msw/node';
import { pathHandlers } from './path-handlers';

export const server = setupServer(...pathHandlers);
