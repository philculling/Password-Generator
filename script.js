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

var lowerCase = "";
var upperCase = "";
var specials = "";
var numerics = "";
var mergedArray = "";
var pwLength

// Function to prompt user for password options
/* This function, called getPasswordOptions, should have 
1. The initial prompt that will result in establishing the password length
2. 4 nested confirms that will establish true or false for each of the
variables of lowerCase, upperCase, specials and numerics.
3. Merge the selected arrays.
*/
function getPasswordOptions() {
  pwLength = prompt("Welcome to your password generator! How many characters would you like your password to have? Choose a number between 8 and 64 inclusive.");
//pwLength is now stored as a number. Next line is just to test this.
console.log(pwLength);//Works, pwLength is stored ok.
  if (pwLength < 8 || pwLength > 64) {
    alert("Your number is not in the correct range. Please try again.");
  }
  /*else if (pwLength != type.number) {
    alert("Invalid. Please enter a number");//Come back to this. See Laura's Friday Slack notes.
  }*/

  var lowerCase = confirm("Would you like your password to include lower case characters?");
//lowerCase is now stored as either true or false
  
  var upperCase = confirm("Would you like your password to include upper case characters?");
//upperCase is now stored as either true or false

  var specials = confirm("Would you like your password to include special characters?");
//specials is now stored as either true or false

  var numerics = confirm("Would you like your password to include numeric characters?");
//numerics is now stored as either true or false
console.log(lowerCase);//successfully tested, displays as true when selected and false when not.

      if (lowerCase === true) {
        mergedArray = mergedArray.concat(lowerCasedCharacters);
      }
      if (upperCase === true) {
        mergedArray = mergedArray.concat(upperCasedCharacters);
      }
      if (specials === true) {
        mergedArray =  mergedArray.concat(specialCharacters);
      }
      if (numerics === true) {
        mergedArray = mergedArray.concat(numericCharacters);
      }
      //test
      console.log(mergedArray);//Successfully updates mergedArray each time.
    }
/*
However, can you apply DRY and turn the above into a function?
*/

getPasswordOptions();

//test mergedArray is stored ok before randomising in getRandom function:
console.log(mergedArray);//yes, displaying ok
//test pwLength is stored ok before using in getRandom function
console.log(pwLength);//yes, displaying ok
// Function for getting a random element from an array
function getRandom(arr) {
//2 parts to this.
//1. Randomising our mergedArray.
//2. Making sure it's the right length.
/*This is what has been tried so far and doesn't work.
I think I need to look closer at this for loop and what I'm asking.
e.g. just because pwLength is (say) 9, will this actually iterate 9 times?
Or do I need to do something else?
AND is the second half accurate and actually doing 
what your brain is wanting it to do?!
*/
  for (var i = 0; i < pwLength; i++) {
    mergedArray = mergedArray[Math.floor(Math.random() * mergedArray.pwLength)];
  }
}
//call the function:
getRandom(mergedArray);

//test:
console.log(mergedArray);//not showing at the moment

// Function to generate password with user input
/*This function will have 2 nested functions:
getPasswordOptions(), and
getRandom(arr) applied to the new, randomised, merged array.
*/
function generatePassword() {
getPasswordOptions();
getRandom(mergedArray);
}
// DO NOT TOUCH ANYTHING BELOW HERE
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