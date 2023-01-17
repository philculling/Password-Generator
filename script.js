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
3. Pushes 1 random character from each selection to the final array which I set up earlier.
4. Merges the selected arrays.
5. Randomises the merged array to create the final array.
6. Removes the commas from final array using .join.
*/
function getPasswordOptions() {
  pwLength = prompt("Welcome to your password generator! How many characters would you like your password to have? Choose a number between 8 and 64 inclusive.");
  //pwLength is now stored as a number.
  if (pwLength < 8 || pwLength > 64) {
    alert("Your number is not in the correct range. Please try again.");
    return
  }
  //Make sure user enters a number or it breaks.
  if (isNaN (pwLength) === true) {
    alert("Invalid. Please enter a number");
    return
  }

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

  //Make sure user chooses one option or it breaks.
  if (lowerCase === false && upperCase === false && specials === false && numerics === false) {
    alert("You must choose one option");
    return
  }
  /*For each selection, if selected, add 1 random element to finalArray
  and reduce pwLength by 1 (because the random element has used 1 of the spaces)*/
  if (lowerCase === true) {
    finalArray.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)]);
    pwLength--;
    mergedArray = mergedArray.concat(lowerCasedCharacters);
  }
  if (upperCase === true) {
    finalArray.push(upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)]);
    pwLength--;
    mergedArray = mergedArray.concat(upperCasedCharacters);
  }
  if (specials === true) {
    finalArray.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
    pwLength--;
    mergedArray = mergedArray.concat(specialCharacters);
  }
  if (numerics === true) {
    finalArray.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)]);
    pwLength--;
    mergedArray = mergedArray.concat(numericCharacters);
  }
  //TEST
  console.log(mergedArray);//Successfully updates mergedArray each time.

  /*Update finalArray by adding a randomised element from mergedArray
  the correct number of times.*/
  for (i = 0; i < pwLength; i++) {
      finalArray.push(mergedArray[Math.floor(Math.random()*mergedArray.length)]);
  };
  //TEST
  console.log(finalArray);//This works.
  //Remove commas from finalArray so it looks like a password.
  return finalArray.join("");
}
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