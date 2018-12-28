import express from 'express' ;
import bodyParser from 'body-parser';
import indexController from './controllers/index';
import initItemController from './controllers/item';

const initRoutes = async () => {
  const itemController = await initItemController();
  const app = express();
  app.use(bodyParser.json());

  app.use('/assets', express.static('assets'));

  app.get('/', indexController.showIndex);

  app.get('/api/items', itemController.getItems);
  app.put('/api/item/', itemController.createItem);
  app.get('/api/item/:id', itemController.getItemById);
  app.post('/api/item/:id', itemController.updateItemById);
  app.delete('/api/item/:id', itemController.deleteItemById);

  return app;
};

module.exports = initRoutes;

