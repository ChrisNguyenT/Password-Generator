// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var passwordLength = Number(window.prompt('Please select the length of your password (8 to 128 characters).'));

  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters. Please try again');
    return null
  }
  if (isNaN(passwordLength)) {
    alert('Please input a number between 8 and 128 for the length of your password.');
    return null
  }

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

  if (uppercase === false && lowercase === false && numbercount === false && specialOption === false) {
    alert('You must select at least one option. Please try again')
    return null
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