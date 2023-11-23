function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
    // these log's helps get a reference in the console //

    //Validate first name and last name//
    let firstLast = firstName + " " + lastName;
    console.log(firstName);
    if(firstLast.length < 20){
        alert("Not enough characters. Firts and last name must have at least 20 characters");
        return; 
    }
    console.log("Valid first and last name");

    // We need a zip code that contains only digits and is 5 digits long //
    const zipRegExp = /\b\d{5}\b/;

    if(!zipRegExp.test(zip)) {
     alert("Invalid zip code. Zip must be a number of 5 digits"); 
     console.log(typeof zip)
        return false;
    }
    console.log("Validated!")

    //Shows the secret message when all the inputs are valid//
    let secretMessage = document.getElementById("secretMessage");
    secretMessage.style.display = "block";
    secretMessage.innerText = "Congratulations on completing all the requirements. Very good!!!";
    
}

// Prevent the form from submitting normally//
window.addEventListener ("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm"); 
    if (form) {
        form.addEventListener("submit" , validateInput)
    }
});

//Palindrome Checker//
// The function takes a string as an argument and returns true if it is a palindrome, and false otherwise//
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    // Reverses the cleaned string//
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Checks if the cleaned string is equal to the reversed string//
    return cleanedStr === reversedStr;
  }
  
  function checkPalindrome() {
    // A boolean variable 'continueLoop' is set to true to indicate that the loop should continue//
    let continueLoop = true;
  // A while loop is used to repeatedly ask the user for input and check if the input is a palindrome//
    while (continueLoop) {
      const userInput = prompt('Enter a word to check if it\'s a palindrome:');
      // If the user clicks "Cancel" or closes the alert box, the 'userInput' variable will be 'null'//
      if (userInput === null) {
        alert('Exiting the palindrome checker.');
        continueLoop = false;
      } else {
        const isPal = isPalindrome(userInput);
        
        if (isPal) {
          alert(`"${userInput}" is a palindrome!`);
        } else {
          alert(`"${userInput}" is not a palindrome.`);
        }
  // The user is asked if they want to enter another word. If the user clicks "OK", the loop continues. If the user clicks "Cancel", the loop exits//
        const askAgain = confirm('Do you want to enter another word?');
        if (!askAgain) {
          alert('Exiting the palindrome checker.');
          continueLoop = false;
        }
      }
    }
  }
  
  checkPalindrome();
  