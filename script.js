// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numbers = "1234567890".split("")
  var specialChars = "!@#$%^^&*()_+".split("")

  var possibleChars = [];

  var password="";

  var passwordLength = +(prompt("How long would you like this password to be? Please select a number between 8 and 128 characters"))

    if(passwordLength <8 || passwordLength > 128){
      alert ("You must select a password length between 8 and 128 characters");
      return;
    }

  var useLowerCase = confirm("Do you want to use lowercase letters?")
  var useUpperCase = confirm("Do you want to use upper case letters?")
  var useNumbers = confirm("Do you want to use numbers?")
  var useSpecial = confirm("Do you want to use special characters?")
  
  
  if(useSpecial){
    possibleChars = possibleChars.concat(specialChars);
  }

  if(useUpperCase){
    possibleChars = possibleChars.concat(upperCase);
  }

  if(useLowerCase){
    possibleChars = possibleChars.concat(lowerCase);

  if(useNumbers){
    possibleChars = possibleChars.concat(numbers);
  }  
  }

  console.log(possibleChars)

  for(i=0;i<passwordLength;i++){
    console.log(possibleChars[Math.floor(Math.random()*possibleChars.length)])
    password+=possibleChars[Math.floor(Math.random()*possibleChars.length)]
  }

  return password;
};
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click",writePassword);
