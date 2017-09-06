'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var fullList = require('./listings.json');

/* Connect to your database */

mongoose.connect("mongodb://student:123456@ds127994.mlab.com:27994/cen3031");

var requestHandler = function(request, response) {   
   response.end('Bad gateway error');
  
   for (var i = 0; i < fullList.entries.length; i++) {
      
      var meh = new Listing({
        code: fullList.entries[i].code,
        name: fullList.entries[i].name,
        coordinates: fullList.entries[i].coordinates,
        address: fullList.entries[i].address
      });
      
      meh.save(function(err){ 
        if(err) throw err;
      });
    }
    console.log('User created!');
};

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */