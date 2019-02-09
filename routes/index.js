'use strict';

const express       = require('express');
const userCtrl      = require('../controllers/user');


const api           = express.Router();
const auth          = require('../middlewares/auth');

//listeners user
api.post('/signup', userCtrl.singUp);
api.post('/signin', userCtrl.singIn);


//listeners event
/*api.get('/event', auth.isAuth, eventCtrl.getEvents);
api.get('/event/:eventId', auth.isAuth, eventCtrl.getEventById);
api.post('/event/', auth.isAuth, eventCtrl.saveEvent);
api.put('/event/:eventId', auth.isAuth,  eventCtrl.updateEvent);
api.delete('/event/:eventId', auth.isAuth,  eventCtrl.deleteEvent);
api.get('/events/avaiable/:latitud/:longitud', auth.isAuth, eventCtrl.avaiableEvents);*/

module.exports = api;