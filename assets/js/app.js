// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  const pwdOptions = specialCharacters.concat(numericCharacters, upperCasedCharacters, lowerCasedCharacters); 
  
  console.log(pwdOptions);
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    let pwdSec 
  }
  
  // Function for getting a random element from an array
  function getRandom (array) {
    return array[Math.floor(Math.random() * array.length)]
  };
  
  
  // Function to generate password with user input
  function generatePassword() {
    pwd = "";
    pwd += getRandom(pwdOptions);
    for (let i = 10; i < 30; i++)
      pwd += getRandom(pwdOptions);
      return pwd
  }
  
  console.log(generatePassword());
  
  //check password security level
  function checkPassword() {
    if (generatePassword.length < 10) {
      alert('Password is too short!')
    } else if (generatePassword.length > 64) {
      alert('Password is too long!')
    } else {
      console.log('Password length acceptable')
    }
  }
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);