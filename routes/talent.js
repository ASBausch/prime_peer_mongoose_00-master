var express = require('express');
var router = express.Router();
var Talent = require('../models/talent');

/* GET all talent. */
router.get('/', function(req, res, next) {
  // TODO: Find all talent documents and send them back as an array of objects
});

/* Add a talent record. */
router.post('/', function(req, res, next) {
  // TODO: Add a talent document that you've received from the client
});

/* Add a history object to a talent record by ID. */
router.put('/history/:id', function(req, res, next) {
  // TODO: Find the talent record and update its history
});

/* Delete talent by ID. */
router.delete('/:id', function(req, res, next) {
  // TODO: Find one talent document by ID and remove it
});

module.exports = router;
