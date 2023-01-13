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
  
    var length = window.prompt("Choose your password length between 10 and 64.");

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
    };
  
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase == true) {
        console.log("Uppercase included")
      passwordCharSet += key_strings.uppercase;
    };
  
    var symbols = window.confirm("Would you like to use special characters?");
    if (symbols == true) {
        console.log("Special characters included")
      passwordCharSet += key_strings.symbol;
    };
  
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers ==true) {
        console.log("Numbers included")
      passwordCharSet += key_strings.number;
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
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }


  function copyPassword() {
    /* Get the text field */
    let copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value).then(function() {
      alert("Copied to clipboard successfully!");
    }, function(error) {
      alert("ERROR:\n"+error);
    });;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);



  // This is how to check permissions
  // async function CheckPermission(){
  //   const readPerm = await navigator.permissions.query({name: 'clipboard-read', allowWithoutGesture: false });
    
  //   const writePerm = await navigator.permissions.query({name: 'clipboard-write', allowWithoutGesture: false });
    
  //   // Will be 'granted', 'denied' or 'prompt':
  //   alert('Read: '+readPerm.state+'\nWrite: '+writePerm.state);
  // }
  

