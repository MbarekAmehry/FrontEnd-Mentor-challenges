const input = document.getElementById("input");
const submit = document.getElementById("submit");
const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", () => {
  if (input.value == "") {
    adjustInput("Please add your email", "red");
  } else if (regEx.test(input.value) == false) {
    adjustInput("Invalid Email", "red");
  } else {
    adjustInput("", "hsl(223, 100%, 88%)");
    input.value = "";
  }
});

const adjustInput = (msg, color) => {
  document.querySelector(".msg").innerHTML = msg;
  input.style.borderColor = color;
};
