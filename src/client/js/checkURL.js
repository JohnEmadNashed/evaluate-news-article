// TODO declare a function to check the url ..
var validUrl = require("valid-url");

function checkURL(inputURL) {
  if (validUrl.isUri(inputURL)) {
    return true;
  } else {
    return false;
  }
}

export default checkURL;
