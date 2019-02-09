'use strict';

const express       = require('express');
const userCtrl      = require('../controllers/user');
const incidentCtrl  = require('../controllers/incident');


const api           = express.Router();
const auth          = require('../middlewares/auth');

//listeners user
api.post('/signup', userCtrl.singUp);
api.post('/signin', userCtrl.singIn);


//listeners event

api.get('/incidents/', incidentCtrl.getIncidents);
api.get('/incidents/:incidentId', incidentCtrl.getIncidentById);
api.post('/incidents/', incidentCtrl.saveIncident);
/*
api.put('/event/:eventId', auth.isAuth,  eventCtrl.updateEvent);
api.delete('/event/:eventId', auth.isAuth,  eventCtrl.deleteEvent);
api.get('/events/avaiable/:latitud/:longitud', auth.isAuth, eventCtrl.avaiableEvents);
*/

module.exports = api;