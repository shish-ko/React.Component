import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../src/ssr';

const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['index.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    },
  });
});
app.use(express.static('dist'));
app.listen(PORT);
