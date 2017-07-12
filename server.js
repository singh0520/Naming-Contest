import config from './config';
import express from 'express';
import apiRouter from './api';
const server  = express();
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

import './serverRender';

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '...+'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
  });
