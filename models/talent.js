/**
 * Rando Talent model.
 * @author antoinette@primeacademy.io
 */

// Step 0 - Get our dependencies
var mongoose = require('mongoose'); // our Object Document Mapper (ODM) for MongoDB
var Schema = mongoose.Schema; // mongoose schema for defining our models

// Step 1 - Create the schema
var talentSchema = new Schema({
  talent_id: Number,
  name: {type:String, required:true},
  address: String,
  skills: [String],
  wage_req: [{
    min: Number,
    max: Number,
    wage_type: {type: String, enum: ['annual','hourly']}
  }],
  history: [{
    org: String,
    start: Date,
    end: Date
  }],
  current: String
});

// Example of adding a method to our model
/**
 * Check if the min value for a given wage_req is less than the max range.
 * If not, switch values.
 */
talentSchema.methods.normalizeWageRange = function() {
  this.wage_req.forEach(function(element, index, array) {
    if(element.min > element.max) {
      var temp = element.min;
      element.min = element.max;
      element.max = temp;
    }
  });
}

// Step 2 - Create the model
var Talent = mongoose.model('Talent', talentSchema);

// Step 3 - Export our model so we can access it in other parts of our server-side app
module.exports = Talent;


