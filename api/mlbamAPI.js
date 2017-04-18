var request = require('request');
var express = require('express');
var router = express.Router();
// Set the headers

router.get('/mlbam', function(req, res){

  var headers = {

    'Content-Type': 'application/json',
    'ApiKey': 'ffff7c7d-2959-4492-8e39-750294b69e4c'
  }

// Configure the request
  var options = {
    url: 'https://proservices.trackmanbaseball.com/api/mlbam/GetStandardReport ',
    method: 'POST',
    headers: headers,
    json: {}
  }

// Start the request
  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Print out the response body
        res.status(200).json(body);
        console.log(body)
    }
})

})
module.exports = router;
