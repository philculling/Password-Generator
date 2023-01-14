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

// Function to prompt user for password options
/* This function, called getPasswordOptions, will have 
1. The prompt
2. 4 nested functions that will activate when called:
 the 4 yes/no functions.
3. PLUS a final function to merge the (up to 4) arrays to create a
new array.
*/

var lowerCase = "";
var upperCase = "";
var specials = "";
var numerics = "";
var mergedArray = "";

function mergeArrays(arr) {
  if (arr === true) {
    mergedArray = mergedArray.push(arr);
  }
}

function getPasswordOptions() {
  var length = prompt("Welcome to your password generator! How many characters would you like your password to have? Choose a number between 8 and 64 inclusive.");

  if (length < 8 || length > 64) {
    alert("Your number is not in the correct range. Please try again.");
  }
  else if (length != type.number) {
    alert("Invalid. Please enter a number");//This needs another look
  }
//length is now stored. I think...

  var lowerCase = confirm("Would you like your password to include lower case characters?");
//lowerCase is now stored as either true or false
  
  var upperCase = confirm("Would you like your password to include upper case characters?");
//upperCase is now stored as either true or false

  var specials = confirm("Would you like your password to include special characters?");
//specials is now stored as either true or false

  var numerics = confirm("Would you like your password to include numeric characters?");
//numerics is now stored as either true or false

mergeArrays(lowerCase);
mergeArrays(upperCase);
mergeArrays(specials);
mergeArrays(numerics);
}

// Function for getting a random element from an array
function getRandom(arr) {
//Hopefully this will be simple. 2 parts to this.
//1. Randomising our mergedArray.
//2. Making sure it's the right length.
}

// Function to generate password with user input
/*This function will have 2 nested functions:
getPasswordOptions(), and
getRandom(arr) applied to the merged array.
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