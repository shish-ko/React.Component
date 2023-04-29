import 'whatwg-fetch';
import { server } from './src/tests/API-mock/server';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'warn',
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
