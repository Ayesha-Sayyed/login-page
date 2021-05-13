function myFunction() {
  const x = document.getElementById("password");
  const y = document.getElementById("hide1");
  const z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (!isPwd(passwordValue)) {
    setErrorFor(password, "Not a valid Password");
  } else {
    setSuccessFor(password);
    alert("Thank You!");
    clearFunc();
  }
}

function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector("small");
  inputBox.className = "input-box error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputBox = input.parentElement;
  inputBox.className = "input-box small";
}

//7 to 15 characters which contain at least one numeric digit and a special character
function isPwd(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/.test(
    password
  );
}

function clearFunc() {
  username.value = "";
  password.value = "";
}
