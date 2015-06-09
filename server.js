
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
});

var quotes = [
  '"I have not failed.  I have just found 10,000 ways that won\'t work." - Thomas Edison.',
  '"No matter where you go, there you are."',
  '"If it is a good idea, go ahead and do it.  It is much easier to apologize than to get permission." - Rear Admiral Grace Hopper, USN, Ph.D'
];

var adjectives = ["Cool", "Awesome", "Flaming", "Neat-O", "Amazing", "Purple"];

var jokes = [
  {"setup": "What do you call a fish with no eyes?", "punchline": "A FSHHHH"},
  {"setup": "What happens to a frog's car when it breaks down?", "punchline": "It gets toad away"},
  {"setup": "Why was six scared of seven?", "punchline": "Because seven ate nine."},
  {"setup": "How do you count cows?", "punchline": "With a cowculator"},
  {"setup": "What do computers eat for a snack?", "punchline": "Microchips"}
]

app.get("/adjective", function(req, res) {
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  res.send({"word": adjectives[randomIndex]});
});
