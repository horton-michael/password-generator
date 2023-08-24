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
  var passwordLength = prompt("How long should the password be?");
  // check if password is between 8 - 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    // no? ask again
    passwordLength = prompt("Password length must be between 8 and 128.");
  }
  var userChars = "";
  // Determine which character types should be used and verify user selects at least one character type
  function characterSelection() {
    // are we using lowercase?
    var useLowercase = confirm("Do you want to include lowercase characters?");
    // yes? add lowercase characters into list of chosen characters
    if (useLowercase) {
      userChars += lowerChars;
    }

    // are we using uppercase?
    var useUppercase = confirm("Do you want to include uppercase characters?");
    // yes? add uppercase characters into list of chosen characters
    if (useUppercase) {
      userChars += upperChars;
    }

    // are we using special characters
    var useSpecialChars = confirm("Do you want to include special characters?");
    // yes? add special characters into list of chosen characters
    if (useSpecialChars) {
      userChars += specialChars;
    }

    // are we using numerical characters
    var useNumericalChars = confirm(
      "Do you want to include numerical characters?"
    );
    // yes? add special characters into list of chosen characters
    if (useNumericalChars) {
      userChars += numericalChars;
    }

    // verify user selected at least one character type, otherwise run the function again
    if (userChars === "") {
      alert("Please choose at least one character type.");
      return characterSelection();
    }
  }

  characterSelection();
  // based on chosen length select random characters from the chosen character set and put them in the password variable
  for (var i = 0; i < passwordLength; i++) {
    var randomInd = Math.floor(Math.random() * userChars.length);
    password += userChars[randomInd];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
