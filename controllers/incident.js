'use strict';

const mongoose = require('mongoose');
const {Incident} = require('../models/incident');
const fs = require('fs')

function getIncidents(req, res) {
    Incident.find().then((incidents) => {
        res.send({incidents});
    }, (e) => {
        res.status(400).send(e);
    });
}

function getIncidentById(req, res) {
    var id = req.params.incidentId;
    Incident.findById(id).then((incident) => {
        if (!incident) {
            return res.status(404).send();
        }
        res.send({incident});
    }).catch((e) => {
        res.status(400).send();
    });
}

function saveIncident(req, res) {
    console.log(req.files);
    var incident = new Incident({
        category: req.body.category,
        subcategory: req.body.subcategory,
        state: req.body.state,
        date: new Date(),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        // photo: req
        comment: req.body.comment,
        user: req.body.user,
        likes: 1
    });

    incident.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
}


module.exports = {
    getIncidents,
    getIncidentById,
    saveIncident
}