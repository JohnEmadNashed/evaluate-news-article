import checkURL from "./checkURL";
const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {}
};

const handleSubmit = async () => {
  let incomingURL = document.getElementById("article-url").value;
  if (checkURL(incomingURL)) {
    post("http://localhost:8081/add-url", {
      url: incomingURL,
    }).then((data) => {
      document.getElementById("results").innerHTML = `<table>
      <tr><td>Sentiment</td><td>Result</td></tr>
      <tr><td>Text:</td><td>${data.text}</td></tr>
      <tr><td>Agreement:</td><td>${data.agreement}</td></tr>
      <tr><td>Subjectivity:</td><td>${data.subjectivity}</td></tr>
      <tr><td>Confidence:</td><td>${data.confidence}</td></tr>
      <tr><td>Irony:</td><td>${data.irony}</td></tr>
      </table>`;
      // Enable the submit button
      submitBtn.disabled = false;
    });
  } else {
    console.log("checker true");
    alert("Please try with a valid Url !");
  }
};

export default handleSubmit;
