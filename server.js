const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files from the public directory
  server.use(express.static(path.join(__dirname, 'public')));

  // Custom route to serve the HTML file
  server.get('/merch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'merch', 'index.html'));
  });

  // Handle other routes by Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
