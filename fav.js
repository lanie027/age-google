// Ask the user for the age of their favorite artist
let artistAge = prompt("What is the age of your favorite artist?");

// Convert the user's input to a number
artistAge = Number(artistAge);

// Compare the artist's age to 25
// If the age is below 25 and if the age is older and if the age is also 25
if (artistAge < 25) {
  console.log("They're " + artistAge + " years old and they're younger than Google");
} else if (artistAge == 25) {
  console.log("They're " + artistAge + " years old and they're as old as Google");
} else if (artistAge > 25){
  console.log("They're " + artistAge + " years old and they're older than Google");
}