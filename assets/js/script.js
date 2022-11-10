var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];

var password = "";

function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

function generatePassword() {

  password = "";

  var passwordLength = prompt("Choose a password length between 8 - 128");
  if (passwordLength < 8 || passwordLength > 128 || !onlyNumbers(passwordLength)) {
    alert("Incorrect Selection");
  } else {

    var useNum = confirm("Use Numbers?"); //determines use of numbers

    var useSpecial = confirm("Use Special Characters?"); //determines use of special characters

    var useUpper = confirm("Use Uppercase Characters?"); // determines use of upper case letters

    var charOptions = 4; //one of the 3 extra options will be randomly selected as the next character of the password or will default to another letter if the chosen option is not included in the password.


    for (var i = 0; i < passwordLength; i++) {
      switch (Math.floor(Math.random() * charOptions)) {
        case 0:
          password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]);
          break;
        case 1:
          if (!useNum) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]);
            break;
          }
          password = password.concat(num[Math.floor(Math.random() * num.length)]);
          break;
        case 2:
          if (!useSpecial) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]);
            break;
          }
          password = password.concat(special[Math.floor(Math.random() * special.length)]);
          break;
        case 3:
          if (!useUpper) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]);
            break;
          }
          password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase());
      }
    }
  }
  document.getElementById("passwordPrint").innerHTML = password;
}//end function