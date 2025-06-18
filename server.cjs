const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('books.json');
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('🚀 JSON Server running at http://localhost:3001');
});
