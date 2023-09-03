const passwordBox = document.querySelector("#password");
const generatorButton = document.querySelector("[data-generator]");
const copyButton = document.querySelector("[data-copy]");
const copyConfirm = document.querySelector("[data-copy-confirm]");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%¨&*();.,:></-=[]{}+";

const allChars = upperCase + lowerCase + numbers + symbols;

generatorButton.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});

copyButton.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
  copyConfirm.style.display = "block";
  setTimeout(() => {
    copyConfirm.style.display = 'none'
  }, 3000);
});
