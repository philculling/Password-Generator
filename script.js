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

// Function to prompt user for password options
/* This function, called getPasswordOptions, should have 
1. The initial prompt that will result in establishing the password length
2. 4 nested confirms that will establish true or false for each of the
variables of lowerCase, upperCase, specials and numerics.
3. Nested function to merge the selected arrays.
*/
function getPasswordOptions() {
  var pwLength = prompt("Welcome to your password generator! How many characters would you like your password to have? Choose a number between 8 and 64 inclusive.");

  if (pwLength < 8 || pwLength > 64) {
    alert("Your number is not in the correct range. Please try again.");
  }
  /*else if (pwLength != type.number) {
    alert("Invalid. Please enter a number");//This needs another look
  }*/
//pwLength is now stored. I think...

  var lowerCase = confirm("Would you like your password to include lower case characters?");
//lowerCase is now stored as either true or false
  
  var upperCase = confirm("Would you like your password to include upper case characters?");
//upperCase is now stored as either true or false

  var specials = confirm("Would you like your password to include special characters?");
//specials is now stored as either true or false

  var numerics = confirm("Would you like your password to include numeric characters?");
//numerics is now stored as either true or false
console.log(lowerCase);//successfully tested, stored as true when selected.

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
      console.log(mergedArray);

/*Now this is better can you apply DRY and turn into a function?
Previously you tried this but it didn't work:
This nested function updates the variable called mergedArray by
adding all those which were selected at the confirm stage above.
      function mergeArrays(arr) {
        if (arr === true) {
          mergedArray = mergedArray.concat(arr);
          }
}
This should call the function 4 times, resulting in mergedArray being correct.
mergeArrays(lowerCase);
mergeArrays(upperCase);
mergeArrays(specials);
mergeArrays(numerics);
*/
//Does mergedArray work outside the function? Test here:
console.log(mergedArray);
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
//2 parts to this.
//1. Randomising our mergedArray.
//2. Making sure it's the right length.
  for (var i = 0; i < pwLength; i++) {
    mergedArray = mergedArray[Math.floor(Math.random() * mergedArray.pwLength)];
  }
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