// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // character type variables
  var password = "";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "~!@#$%^&*()-_=+[]{}|;:',.<>?/";
  var numericalChars = "0123456789";

  // ask how long password should be
  // check if password is between 8 - 128 characters
  // no? ask again
  // are we using lowercase?
  // yes? add lowercase characters into list of chosen characters
  // are we using uppercase?
  // yes? add uppercase characters into list of chosen characters
  // are we using special characters
  // yes? add special characters into list of chosen characters
  // are we using numerical characters
  // yes? add numerical characters into list of chosen characters
  // random characters
  // based on chosen length select random characters from the chosen character set and put them in the password variable

  var password = "placeholder";
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
