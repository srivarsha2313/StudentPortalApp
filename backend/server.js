// backend/server.js
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('StudentPortalApp — Backend running');
});
server.listen(port, () => console.log(`Server listening on ${port}`));
