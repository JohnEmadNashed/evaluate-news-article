const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
const BASE_API_URL = process.env.BASE_API_URL;

const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;

var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});
app.post("/add-url", async (req, res) => {
  try {
    userInput = req.body.url;
    const apiURL = `${BASE_API_URL}key=${API_KEY}&url=${userInput}&lang=en`;
    const response = await fetch(apiURL);
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
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = {
  app,
};
