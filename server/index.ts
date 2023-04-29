import express from 'express';
import { renderTPS } from './server.entry';

const PORT = 3000;

const app = express();
app.use(express.static('dist/client'));

app.get('*', async (req, res) => {
  const { pipe } = renderTPS(req.url, {
    bootstrapScripts: ['/client.entry.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    },
  });
});
app.listen(PORT, () => {
  console.log('Port is started on 3000');
});
