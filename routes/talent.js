var express = require('express');
var router = express.Router();
var Talent = require('../models/talent');

/* GET all talent. */
router.get('/', function(req, res, next) {
    Talent.find({}, function(err, talents){
        if(err) throw err;
        console.log(talents);
        res.send(talents);
    });
  // TODO: Find all talent documents and send them back as an array of objects
});

/* Add a talent record. */
router.post('/', function(req, res, next) {
    var talent = new Talent({
        talent_id: 6,
        name: 'Cave Johnson',
        address: '3400 Johnson Road, Gardina CA',
        skills: ['skeet shooting', 'dragon slaying'],
        wage_req:[{
            min:300000,
            max:300001,
            wage_type:'annual'}],
        history: [{
            org: 'King William VI',
            start:'12/31/2014',
            end:'12/31/2015'
            }],
            current: 'none'
    });
    talent.save(function(err){
        if(err) throw err;
    });
    res.send();
  // TODO: Add a talent document that you've received from the client
    //done manually
});

/* Add a history object to a talent record by ID. */
router.put('/history/:id', function(req, res, next) {

    var id = req.params.id;
    var update = req.body;

    Talent.findByIdAndUpdate(id, update,
        function(err, talent) {
            if(err) throw err;
            // updated talent object
        });
    res.send();
  // TODO: Find the talent record and update its history
    //used cocoa
});

/* Delete talent by ID. */
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;

    Talent.findByIdAndRemove(id,
        function(err, talent) {
            if(err) throw err;
            // updated talent object
        });
    res.send();
  // TODO: Find one talent document by ID and remove it
    //use cocoa
});

module.exports = router;