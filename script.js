const passGenerator = (length) => {
  const passwordOutput = document.getElementById("passValue");
  const passwordLengthInput = document.getElementById("passLength");
  const passwordLength = parseInt(passwordLengthInput.value, 10);
  var numbers = document.getElementById("numbersAllowed").checked;
  var characters = document.getElementById("characAllowed").checked;

  if (passwordLength < 1 || passwordLength > 100) {
    alert("Password should be more than 1 charater");
    return;
  }
  var num = "123456789";
  var charac = "!@#$%^&*()_+{}~`:;<>?/";
  var charset = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  var pass = "";
  if (numbers) {
    charset += num;
  }
  if (characters) {
    charset += charac;
  }
  for (let index = 0; index < passwordLength; index++) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  passwordOutput.value = pass;
};

const slider = document.getElementById("passLength");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};

const copyInputText = () => {
  const inputField = document.getElementById("passValue");
  const text = inputField.value;
  navigator.clipboard.writeText(text);
};
