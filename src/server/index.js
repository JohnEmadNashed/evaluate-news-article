// TODO: Configure the environment variables
// Done
const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
const BASE_API_URL = process.env.BASE_API_URL;

const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;

// TODO add Configuration to be able to use env variables
// Done
var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
var cors = require("cors");

// TODO: Create an instance for the server
// Done
const app = express();

// TODO: Configure cors to avoid cors-origin issue
// Done
app.use(cors());

// TODO: Configure express to use body-parser as middle-ware.
// Done
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Configure express static directory.
// Done
app.use(express.static("dist"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});
// INFO: a route that handling post request for new URL that coming from the frontend
app.post("/add-url", async (req, res) => {
  try {
    // Done 1
    userInput = req.body.url;
    // Done 2
    const apiURL = `${BASE_API_URL}key=${API_KEY}&url=${userInput}&lang=en`;
    // Done 3
    const response = await fetch(apiURL);
    // Done 4
    const incomingData = await response.json();
    const sample = {
      text: incomingData.sentence_list[0].text,
      score_tag: incomingData.score_tag,
      agreement: incomingData.agreement,
      subjectivity: incomingData.subjectivity,
      confidence: incomingData.confidence,
      irony: incomingData.irony,
    };
    res.send(sample);

    /* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: sentence_list[0].text,
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
  */
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing
module.exports = {
  app,
};
