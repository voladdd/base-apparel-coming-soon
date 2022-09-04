const sendButton = document.getElementsByClassName("button-container")[0];
const iconError = document.getElementsByClassName("icon-error")[0];
const inputContainer = document.getElementsByClassName("input-container")[0];
const messageError = document.getElementsByClassName("message-error")[0];
const messageSuccess = document.getElementsByClassName("message-success")[0];
const inputMessage = document.getElementsByClassName("input-message")[0];

const expEmail = /\S+@\S+\.\S{2,3}/;

sendButton.addEventListener("click", () => {
  const isValid = expEmail.test(inputMessage.value);
  if (!isValid) {
    iconError.style.display = "block";
    messageError.style.display = "block";
    inputContainer.classList.add("border-error");
  } else {
    iconError.style.display = "none";
    messageError.style.display = "none";
    messageSuccess.style.display = "block";
    inputContainer.classList.remove("border-error");
  }
});
