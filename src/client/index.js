import handleSubmit from "./js/formHandler";

import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const buttonSubmit = document.getElementById("btn-submit");
  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    // Get a reference to the logger
    let logger = document.getElementById("logger");
    // Log the action
    console.log("::: Form Submitted :::");
    // Disable the button while the request is being made to prevent repeated actions
    buttonSubmit.disabled = true;
    // Update Logger
    logger.innerText = "Working...";
    handleSubmit();
  });
});
export { handleSubmit };
