document.getElementById("submit").addEventListener("click", () => {
  // Check first name value
  const firstName = document.getElementById("firstName");
  if (firstName.value == "") {
    addError(firstName);
  } else {
    removeError(firstName);
  }

  // Check Last name value
  const lastName = document.getElementById("lastName");
  if (lastName.value == "") {
    addError(lastName);
  } else {
    removeError(lastName);
  }

  // Check email value
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailAddress = document.getElementById("emailAddress");

  if (emailAddress.value == "") {
    addError(emailAddress);
    emailAddress.nextElementSibling.nextElementSibling.innerHTML =
      "Email is reqquired";
  } else if (regEx.test(emailAddress.value) == false) {
    addError(emailAddress);
    emailAddress.nextElementSibling.nextElementSibling.innerHTML =
      "Email isn't valid";
  } else {
    removeError(emailAddress);
  }

  // check Password
  const password = document.getElementById("password");
  if (password.value == "") {
    addError(password);
  } else {
    removeError(password);
  }
});

function addError(field) {
  field.nextElementSibling.nextElementSibling.style.visibility = "visible";
  field.nextElementSibling.style.visibility = "visible";
}

function removeError(field) {
  field.nextElementSibling.nextElementSibling.style.visibility = "hidden";
  field.nextElementSibling.style.visibility = "hidden";
}
