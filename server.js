
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

var adjectives = {
  "adjective": ["Cool", "Awesome", "Flaming", "Neat-O", "Amazing", "Purple"]
}

var verbs = {
  "verb": ["Flying", "Run", "Flip", "Jaunt", "Squirm", "Shout"]
}

var nouns = {
  "noun": ["Peanut Butter", "Wasp", "Swich", "Pear", "Tire Fire", "Octopus"]
}

function randomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.get("/adjective", function(req, res) {
  res.json(randomIndex(adjectives));
})

// $("button").on("click", function() {
//   $("#adjective").show().text(randomIndex(adjectives.adjective));
// });
