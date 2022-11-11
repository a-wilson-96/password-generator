var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //array containing characters of the alphabet

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //array containing 0-9

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=']; //array containing a selection of Special Characters

var password = ""; //initializing the password variable

function onlyNumbers(str) {
  return /^[0-9]+$/.test(str); //this checks the pop-up box input for numbers only on the if statement on line 18
}

function generatePassword() {

  password = "";

  var passwordLength = prompt("Choose a password length between 8 - 128");
  if (passwordLength < 8 || passwordLength > 128 || !onlyNumbers(passwordLength)) { //checks to make sure the user input meets the parameters
    alert("Incorrect Selection"); 
  } else {

    var useNum = confirm("Use Numbers?"); //determines use of numbers

    var useSpecial = confirm("Use Special Characters?"); //determines use of special characters

    var useUpper = confirm("Use Uppercase Characters?"); //determines use of upper case letters

    var charOptions = 4; //number of different types of characters the password generator will use for the switch statement


    for (var i = 0; i < passwordLength; i++) { 
      switch (Math.floor(Math.random() * charOptions)) {
        case 0: //if 0, add a lowercase letter
          password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]); //adds a lowercase letter
          break;
        case 1: //if 1, check to see if numbers were selected, and add the appropriate character
          if (!useNum) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]); //if !useNum add a lowercase letter instead
            break;
          }
          password = password.concat(num[Math.floor(Math.random() * num.length)]); //add a number
          break;
        case 2: /if 2, check to see if special characters were seleceted, and add the appropriate character
          if (!useSpecial) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]); //if !useSpecial, add a lowercase letter instead
            break;
          }
          password = password.concat(special[Math.floor(Math.random() * special.length)]); //add a special character
          break;
        case 3: //if 3, check to see if uppercase characters were selected, and add the appropriate character
          if (!useUpper) {
            password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)]); //if !useUpper, add a lowercase letter instead
            break;
          }
          password = password.concat(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()); //add an uppercase letter
      }
    }
  }
  document.getElementById("passwordPrint").innerHTML = password; //prints the password on the screen for the user to copy
}//end function
