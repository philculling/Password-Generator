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
var mergedArray = "";
var finalArray = "";
var numOfSelections = 0;
var pwLength
var numOfIterations = 0;

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
//numerics is now stored as either true or false. Test:
console.log(lowerCase);//successfully tested, displays as true when selected and false when not.

//for each selection, if selected, add 1 to numOfSelections, and merge into array.
      if (lowerCase === true) {
        numOfSelections++;
        mergedArray = mergedArray.concat(lowerCasedCharacters);
        //also need to add a random element from lowerCasedCharacters to firstItemsInArray
      }
      if (upperCase === true) {
        numOfSelections++;
        mergedArray = mergedArray.concat(upperCasedCharacters);
        //also need to add a random element from upperCasedCharacters to firstItemsInArray
      }
      if (specials === true) {
        numOfSelections++;
        mergedArray =  mergedArray.concat(specialCharacters);
        //also need to add a random element from specialCharacters to firstItemsInArray
      }
      if (numerics === true) {
        numOfSelections++;
        mergedArray = mergedArray.concat(numericCharacters);
        //also need to add a random element from numericCharacters to firstItemsInArray
      }
      //test
      console.log(mergedArray);//Successfully updates mergedArray each time.
    }
/*
However, can you apply DRY and turn the above into a function?
*/

getPasswordOptions();

numOfIterations = (pwLength - numOfSelections);
//check this is stored ok
console.log (numOfIterations);//yes, displaying ok

// Function for getting a random element from an array
function getRandom(arr) {
//2 parts to this.
//1. Randomising our mergedArray.
//2. Making sure it's the right length.
/*This is what has been tried so far and doesn't work.
I think I need to look closer at this for loop and what I'm asking.
e.g. just because numOfIterations is (say) 9, will this actually iterate 9 times?
Or do I need to do something else?
AND is the second half accurate and actually doing 
what you want it to do?!
*/
  for (var i = 0; i < numOfIterations; i++) {
    mergedArray = mergedArray[Math.floor(Math.random() * mergedArray.numOfIterations)];
  }
}
//call the function:
getRandom(mergedArray);
//Update so that final array is first items + newly randomised merged
finalArray = firstItemsInArray.concat(mergedArray);
//tests:
console.log(mergedArray);//not showing at the moment
console.log(finalArray);//not showing yet

// Function to generate password with user input
/*This function will have 2 nested functions:
getPasswordOptions(), and
getRandom(arr) applied to the new, randomised, merged array.
*/
function generatePassword() {
getPasswordOptions();
//something that will turn the finalArray into the password
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