var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
target_url = process.env.ATS_URL;
if ( !target_url ) {
  target_url = 'http://127.0.0.1:8080/_stats';
}
/* GET home page. */
router.get('/metrics', function(req, res, next) {
  request(target_url, {timeout:1000}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      data = JSON.parse(body);
      output = "";
      for(i in data.global) {
        var ary = i.split(".");
        len = ary.length;
        if(len > 2) {
          key = ary.join('_');
          key = key.replace(/\-/g, '_');
          key = key.replace(/\+/g, '_plus');
          key = key.replace(/\W/g, '_');
          val = parseFloat(data.global[i]);
          if (!isNaN(val)) {
            //console.log(key + " " + val);
            output+=key+" "+val+"\n"
          }
        }
      }
      res.send(output);
    }
  });
});

module.exports = router;
