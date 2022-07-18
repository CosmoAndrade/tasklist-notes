const express = require('express');



const routes = express.Router();

const TasklistController = require('./controllers/TasklistController');
const PrioridadeController = require('./controllers/PrioridadeController');
const ContentController = require('./controllers/ContentController');

// Rotas tasklist
routes.post('/tasklist', TasklistController.create);
routes.get('/tasklist', TasklistController.read);
routes.delete('/tasklist/:id', TasklistController.delete);


// Rotas Prioridade

routes.get('/prioridade', PrioridadeController.read);
routes.post('/prioridade/:id', PrioridadeController.update);


// Rotas Content

routes.post('/contents/:id' , ContentController.update);

module.exports = routes;