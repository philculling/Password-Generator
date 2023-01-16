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
var randomisedMergedArray = "";
var secondItemsInArray = "";
var finalArray = "";
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
  }
  /*else if (pwLength != type.number) {
    alert("Invalid. Please enter a number"); Come back to this. See Laura's Friday Slack notes.
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

//for each selection, if selected, add 1 to numOfSelections, add the selction
//to mergedArray AND add 1 random element to firstItemsInArray.
      if (lowerCase === true) {
        numOfSelections++;
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
        mergedArray =  mergedArray.concat(specialCharacters);
        firstItemsInArray = firstItemsInArray//+ 1 random selection from specialCharacters
      }
      if (numerics === true) {
        numOfSelections++;
        mergedArray = mergedArray.concat(numericCharacters);
        firstItemsInArray = firstItemsInArray//+ 1 random selection from numericCharacters
      }
      //TEST
      console.log(mergedArray);//Successfully updates mergedArray each time.
    }
/*
However, can you apply DRY and turn the above into a function?
*/

getPasswordOptions();

numOfRandoms = (pwLength - numOfSelections);
//check this is stored ok. TEST
console.log (numOfRandoms);//yes, displaying ok

// Function for getting a random element from an array
function getRandom(arr) {
/*
Aim of this function is to change mergedArray into randomisedMergedArray.
    randomisedMergedArray = arr[CODE TO RANDOMISE MERGED ARRAY; need help!]
*/
}
//call the function:
getRandom(mergedArray);

secondItemsInArray = randomisedMergedArray.slice(0, numOfRandoms);
//WILL THE ABOVE WORK OK?

//Test what is working and what isn't by console logging.
console.log(firstItemsInArray);//
console.log(secondItemsInArray);//

//Update so that final array is first + second sets of items
finalArray = firstItemsInArray.concat(secondItemsInArray);
//test:
console.log(finalArray);

// Function to generate password with user input
function generatePassword() {
getPasswordOptions();
//something that will turn the finalArray into the password? Not sure how they're linked.
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