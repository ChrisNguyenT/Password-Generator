// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var passwordLength = Number(window.prompt('Please select the length of your password (8 to 128 characters).'));

  var uppercase, lowercase, numbercount, specialOption = false;
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  var numeric = '0123456789'
  var specialCharacter = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~'

  uppercase = confirm('Would you like to include uppercase letters?');
  lowercase = confirm('Would you like to include lowercase letters?');
  numbercount = confirm('Would you like to include numbers?');
  specialOption = confirm('Would you like to include special characters (\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~) ?');

  var userPassword = '';

  if (uppercase === true) {
    userPassword += letters.toUpperCase()
  }
  if (lowercase === true) {
    userPassword += letters
  }
  if (numbercount === true) {
    userPassword += numeric
  }
  if (specialOption === true) {
    userPassword += specialCharacter
  }

  var genPassword = ''

  for (var i = 0; i < passwordLength; i++) {
    var ranChar = Math.floor(Math.random() * userPassword.length)
    genPassword += userPassword[ranChar]
  }
  return genPassword
}

// This function writes the password.
function writePassword() {
  var genPassword = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = genPassword;
}

// Add event listener to generate button.
generateBtn.addEventListener('click', writePassword);