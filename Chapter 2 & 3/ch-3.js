var birthYear = +prompt("Enter your birth year"); 
var currentyear = "2024"
var age_identify = (currentyear - birthYear) 
// Assuming the age is ??
alert("My age is: " + age_identify);

// Check if the visitor count exists in local storage
var visitCount = localStorage.getItem('visitCount');

// If the visit count doesn't exist, initialize it to 0
if (!visitCount) {
    visitCount = 0;
}

// Increment the visit count by 1 for each visit
visitCount++;

// Save the updated visit count in local storage
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the web page
document.write("You have visited this site " + visitCount + " times.<br/>");

// Declare and assign the birth year 
// Change this to your actual birth year

// Display the message in the browser
document.write("My birth year is: " + birthYear + "<br/>");

// Store visitor information
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

// Display the message in the browser
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

