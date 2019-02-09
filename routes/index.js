'use strict';

const express       = require('express');
const userCtrl      = require('../controllers/user');
const incidentCtrl  = require('../controllers/incident');
const routeCtrl  = require('../controllers/route');

const api           = express.Router();
const auth          = require('../middlewares/auth');



//listeners user
api.post('/signup', userCtrl.singUp);
api.post('/signin', userCtrl.singIn);
api.get('/usersNotValidated', auth.isAuth, userCtrl.getUsers);
api.put('/user/:userId', auth.isAuth, userCtrl.validateUser);
api.delete('/user/:userId', auth.isAuth, userCtrl.deleteUser);


//listeners event

api.get('/incidents/', incidentCtrl.getIncidents);
api.get('/incidents/:incidentId', incidentCtrl.getIncidentById);
api.post('/incidents/', incidentCtrl.saveIncident);
api.get('/routes/', auth.isAuth, routeCtrl.getRoutes);
//api.get('/routes/:routeId', auth.isAuth, routeCtrl.getRouteById);
//api.delete('/routes/:routeId', auth.isAuth, routeCtrl.deleteRouteById);


/*
api.put('/event/:eventId', auth.isAuth,  eventCtrl.updateEvent);
api.delete('/event/:eventId', auth.isAuth,  eventCtrl.deleteEvent);
api.get('/events/avaiable/:latitud/:longitud', auth.isAuth, eventCtrl.avaiableEvents);
*/

module.exports = api;