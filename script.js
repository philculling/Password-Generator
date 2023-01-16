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
var firstItemsInArray = "";
var mergedArray = [];
var randomisedMergedArray = "";
var secondItemsInArray = "";
var finalArray = [];
var numOfSelections = 0;
var pwLength
var numOfRandoms = 0;

// Function called getPasswordOptions, to prompt user for password options
/* This function: 
1. Has the initial prompt that will result in establishing the password length
2. Has 4 nested confirms that will establish true or false for each of the
variables of lowerCase, upperCase, specials and numerics.
3. Merges the selected arrays.
*/
function getPasswordOptions() {
  pwLength = prompt("Welcome to your password generator! How many characters would you like your password to have? Choose a number between 8 and 64 inclusive.");
  //pwLength is now stored as a number.
  if (pwLength < 8 || pwLength > 64) {
    alert("Your number is not in the correct range. Please try again.");
    return
  }
  if (isNaN (pwLength) === true) {
    alert("Invalid. Please enter a number");
    return
  }
  /*else if (pwLength != type.number) {
     Come back to this. See Laura's Friday Slack notes.
  }*/

  var lowerCase = confirm("Would you like your password to include lower case characters?");
  //lowerCase is now stored as either true or false
  var upperCase = confirm("Would you like your password to include upper case characters?");
  //upperCase is now stored as either true or false
  var specials = confirm("Would you like your password to include special characters?");
  //specials is now stored as either true or false
  var numerics = confirm("Would you like your password to include numeric characters?");
  //numerics is now stored as either true or false.
  //TEST
  console.log(lowerCase);//successfully tested, displays as true when selected and false when not.

  if (lowerCase === false && upperCase === false && specials === false && numerics === false) {
    alert("You must choose one option");
    return
  }
  //for each selection, if selected, add 1 to numOfSelections, add the selction
  //to mergedArray AND add 1 random element to firstItemsInArray.
  if (lowerCase === true) {
    finalArray.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)]);
    pwLength--;//copy this and line above, adapted, to all 4
    mergedArray = mergedArray.concat(lowerCasedCharacters);
    firstItemsInArray = firstItemsInArray//+ 1 random selection from lowerCasedCharacters
  }
  if (upperCase === true) {
    numOfSelections++;
    mergedArray = mergedArray.concat(upperCasedCharacters);
    firstItemsInArray = firstItemsInArray//+ 1 random selection from upperCasedCharacters
  }
  if (specials === true) {
    numOfSelections++;
    mergedArray = mergedArray.concat(specialCharacters);
    firstItemsInArray = firstItemsInArray//+ 1 random selection from specialCharacters
  }
  if (numerics === true) {
    numOfSelections++;
    mergedArray = mergedArray.concat(numericCharacters);
    firstItemsInArray = firstItemsInArray//+ 1 random selection from numericCharacters
  }
  //TEST
  console.log(mergedArray);//Successfully updates mergedArray each time.

  for (i = 0; i < pwLength; i++) {
      finalArray.push(mergedArray[Math.floor(Math.random()*mergedArray.length)]);
  };
  console.log(finalArray);

  return finalArray.join("");
}
// DO NOT TOUCH ANYTHING BELOW HERE
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);