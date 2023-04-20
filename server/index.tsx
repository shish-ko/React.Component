import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../src/App';

const PORT = 3000;

const app = express();
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['/client.entry.js'],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
    }
  );
});
app.listen(PORT, () => {
  console.log('Port is started on 3000');
});
