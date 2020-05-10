const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const error = document.querySelector(".error");
const msgError = document.querySelector(".msgError");

btn.addEventListener("click", () => {
  if (regEx.test(input.value) !== true) {
    error.style.display = "initial";
    input.style.borderColor = "hsl(0, 93%, 68%)";
    msgError.style.visibility = "visible";
  } else {
    input.value = "";
    error.style.display = "none";
    input.style.borderColor = "hsl(0, 36%, 70%)";
    msgError.style.visibility = "hidden";
  }
});

const test = regEx.test("Hiiiigmail.com");
// console.log(test);
