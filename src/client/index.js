import handleSubmit from "./js/formHandler";

import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const buttonSubmit = document.getElementById("btn-submit");
  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let logger = document.getElementById("logger");
    console.log("::: Form Submitted :::");
    buttonSubmit.disabled = true;
    logger.innerText = "Working...";
    handleSubmit();
  });
});
export { handleSubmit };
