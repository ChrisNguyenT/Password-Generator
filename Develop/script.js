// Assignment Code
var generateBtn = document.querySelector('#generate');

// Function to generate randomized password base on user input.
function generatePassword() {
  var passwordLength = Number(window.prompt('Please select the length of your password (8 to 128 characters).'));

  // Executes when the user inputs anything other than a number 8 to 128.
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters. Please try again');
    return null
  }
  if (isNaN(passwordLength)) {
    alert('Please input a number between 8 and 128 for the length of your password.');
    return null
  }

  // This creates the variables for the password characters.
  var uppercase, lowercase, numbercount, specialOption = false;
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  var numeric = '0123456789'
  var specialCharacter = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~'

  // These confirmation functions prompts the user what variables they would like in their password.
  uppercase = confirm('Would you like to include uppercase letters?');
  lowercase = confirm('Would you like to include lowercase letters?');
  numbercount = confirm('Would you like to include numbers?');
  specialOption = confirm('Would you like to include special characters (\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~) ?');

  // Concatenates strings of the variables selected by the user into one string. 
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

  // This makes sure the user selects at least one option for their password or else it prompts the user to try again.
  if (uppercase === false && lowercase === false && numbercount === false && specialOption === false) {
    alert('You must select at least one option. Please try again')
    return null
  }

  // This loop randomizes the variables the user selected by the password length and returns a new string. 
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