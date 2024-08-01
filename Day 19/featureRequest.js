// Feature Request:

// Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.

const textFR1 = "JavaScript is fun. JavaScript is powerful.";
const patternFR1 = /JavaScript/g;
const matchesFR1 = textFR1.match(patternFR1);
console.log(matchesFR1);

// Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.

const textFR2 = "Alice and Bob are friends. They went to Paris.";
const patternFR2 = /\b[A-Z][a-z]*\b/g;
const matchesFR2 = textFR2.match(patternFR2);
console.log(matchesFR2);

// Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.

const textFR3 = "Contact me at (123) 456-7890 or email@example.com.";
const phonePattern = /\((\d{3})\) (\d{3})-(\d{4})/;
const emailPattern = /(\w+)@(\w+\.\w+)/;
const phoneMatches = textFR3.match(phonePattern);
const emailMatches = textFR3.match(emailPattern);
console.log(phoneMatches);
console.log(emailMatches);

// Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.

const textFR4 = "JavaScript is fun. I like JavaScript.";
const startPattern = /^JavaScript/;
const endPattern = /JavaScript\.$/;
const startMatches = textFR4.match(startPattern);
const endMatches = textFR4.match(endPattern);
console.log(startMatches);
console.log(endMatches);

// Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.

const passwordFR5 = "Password123!";
const urlFR5 = "https://www.example.com";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
const isPasswordValid = passwordPattern.test(passwordFR5);
const isURLValid = urlPattern.test(urlFR5);
console.log(isPasswordValid);
console.log(isURLValid);


// Day 19 Completed...