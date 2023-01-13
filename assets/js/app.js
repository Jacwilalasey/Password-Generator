// // Array of special characters to be included in password
// var specialCharacters = [
//     '@',
//     '%',
//     '+',
//     '/',
//     "'",
//     '!',
//     '#',
//     '$',
//     '^',
//     '?',
//     ':',
//     ',',
//     ')',
//     '(',
//     '}',
//     '{',
//     '[',
//     '~',
//     '-',
//     '_',
//     '.'
//   ];
  
//   // Array of numeric characters to be included in password
//   var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
//   // Array of lowercase characters to be included in password
//   var lowerCasedCharacters = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z'
//   ];
  
//   // Array of uppercase characters to be included in password
//   var upperCasedCharacters = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z'
//   ];
  
// //   const pwdOptions = specialCharacters.concat(numericCharacters, upperCasedCharacters, lowerCasedCharacters); 
  
// //   console.log(pwdOptions);

const key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!#$%&'()*+,-./:;<=>?@()^_`{|}~",
  };
  
// function to prompt for what inputs you desire and using that info to calculate a new password to the dashboard
// added character check in same function

function generatePassword() {
    var passwordCharSet = "";
  
    var length = window.prompt("Enter a number from 10 to 64 for password length.");

    if (length >= 10 && length <= 64) {
        console.log("character lenght correct")
        } else {
            window.alert('You password needs to be between 10 and 64 characters to continue.');
            script.stop;
        } 
          
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase == true) {
        console.log("Lowercase included")
      passwordCharSet += key_strings.lowercase;
    } else {
        window.alert('You password needs to contain lowercase characters to continue.');
        script.stop;
    };
  
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase == true) {
        console.log("Uppercase included")
      passwordCharSet += key_strings.uppercase;
    } else {
        window.alert('You password needs to contain UPPERCASE characters to continue.');
        script.stop;
    };
  
    var symbols = window.confirm("Would you like to use special characters?");
    if (symbols == true) {
        console.log("Special characters included")
      passwordCharSet += key_strings.symbol;
    } else {
        window.alert('You password needs to contain special characters to continue.');
        script.stop;
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers ==true) {
        console.log("Numbers included")
      passwordCharSet += key_strings.number;
    } else {
        window.alert('You password needs to contain numbers to continue.');
        script.stop;
    };

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
  }

// Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }

// Get references to the #generate & #copy element
  var copyBtn = document.querySelector('#copy');

// Add event listener to copy button
  copyBtn.addEventListener('click', copyPassword);

// function for user to copy their new password
  function copyPassword() {
    var copyText = document.getElementById("#password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied to clipboard")  
  }
  
// Add event listener to generate button
  generateBtn.addEventListener('click', copyPassword);

