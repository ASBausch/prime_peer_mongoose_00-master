/**
 * Populate our database with an example talent document.
 *
 * @author antoinette@primeacademy.io
 */

var Talent = require('../models/talent');

module.exports.createTestData = function() {
  // see if we have records already
  // if so, don't continue
  Talent.find(function(err, talent) {
    if(talent.length) {
      return;
    }

    // create a talent document
    var exampleTalent = new Talent({
      talent_id: 9,
      name: 'Lisa Leslie',
      address: 'Gardena, CA',
      skills: ['basketball', 'acting', 'modeling'],
      wage_req: [{
        min: 250000,
        max: 400000,
        wage_type: 'annual'
      }],
      history: [{
        org: 'Los Angeles Sparks',
        start: '1/22/1997',
        end: '2/4/2009'
      }],
      current: null
    });

    // save that talent document to the database
    exampleTalent.save(function(err) {
      if(err) {
        throw err;
      }
    });
  });
};