const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");

  return (small.innerText =
    input.id.charAt(0).toUpperCase() + input.id.slice(1) + message);
}

//Success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//mail kontrol
function checkMail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, " is required. ");
  }
}

//şifre kontrol
function checkPassword(input, inputtwo) {
  if (
    input.value == inputtwo.value &&
    input.value != "" &&
    inputtwo.value != ""
  ) {
    showSuccess(inputtwo);
  } else {
    showError(inputtwo, " does not match password");
  }
}

//uzunluk kontrol
function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    showError(input, " must be at between " + min + "-" + max + " characters");
  } else {
    showSuccess(input);
  }
}

//null kontrol
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() == "") {
      showError(input, " is required");
    } else {
      showSuccess(input);
    }
  });
}

//Çalıştır
form.addEventListener("submit", function (e) {
  e.preventDefault(); //sumbit olduktan sonra yenilemeyi durdurma.

  checkRequired([username, email, password, password2]);
  checkMail(email);
  checkPassword(password, password2);
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
});

function changeFont(input) {
  const labelId = document.getElementById(input);
  labelId.style.color = "#0c0c0c";
}
function backFont(input) {
  const labelId = document.getElementById(input);
  labelId.style.color = "#777";
}
function resetColor(input) {
  const inputborder = document.getElementById(input);
  const inputparent = inputborder.parentElement;
  inputparent.className = "form-control";
}
