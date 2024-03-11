var val1 = 3 ;
var val2 = 5 ;
var total = val1 + val2;
document.write("sum of " + val1 + " and " + val2 + " is " + total + "<br>")
 
var val1 = 3 ;
var val2 = 5 ;
var total = val2 - val1;
document.write("sub of " + val1 + " and " + val2 + " is " + total + "<br>")

var val1 = 3 ;
var val2 = 5 ;
var total = val1 * val2;
document.write("mul of " + val1 + " and " + val2 + " is " + total + "<br>")

var val1 = 3 ;
var val2 = 5 ;
var total = val2 / val1;
document.write("div of " + val1 + " and " + val2 + " is " + total + "<br>")

var val1 = 3 ;
var val2 = 5 ;
var total = val2 % val1;
document.write("mod of " + val1 + " and " + val2 + " is " + total + "<br><br><br>")

// a. Declare a variable
var myVariable;

// b. Show the value of the variable in the browser
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the initial value of the variable in the browser
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable after increment in the browser
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of the variable after addition in the browser
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable
myVariable--;

// j. Show the value of the variable after decrement in the browser
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
var remainder = myVariable % 3;

// l. Show the remainder in the browser
document.write("The remainder is: " + remainder + "<br><br>");


// Store ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Output the result
document.write("The cost of buying 5 tickets to the movie is: " + totalCost + " PKR<br><br>");

// multiplication table of any number

var table = +prompt("enter a number to show table of it")
 
document.write("table of  " + table + "<br>")

document.write(table + " x 1 = "  + table*1 + "<br>")
document.write(table + " x 2 = "  + table*2 + "<br>")
document.write(table + " x 3 = "  + table*3 + "<br>")
document.write(table + " x 4 = "  + table*4 + "<br>")
document.write(table + " x 5 = "  + table*5 + "<br>")
document.write(table + " x 6 = "  + table*6 + "<br>")
document.write(table + " x 7 = "  + table*7 + "<br>")
document.write(table + " x 8 = "  + table*8 + "<br>")
document.write(table + " x 9 = "  + table*9 + "<br>")
document.write(table + " x 10 = "  + table*10 + "<br><br>")

// a. Store a Celsius temperature into a variable
var celsiusTemperature = 30;

// b. Convert Celsius to Fahrenheit
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Output the result
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F <br>");

// c. Store a Fahrenheit temperature into a variable
var fahrenheitTemp = 86;

// d. Convert Fahrenheit to Celsius
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;

// Output the result
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C <br><br>");

// Store the price of item 1
var priceItem1 = 100;

// Store the price of item 2
var priceItem2 = 150;

// Store the ordered quantity of item 1
var quantityItem1 = 2;

// Store the ordered quantity of item 2
var quantityItem2 = 3;

// Store the shipping charges
var shippingCharges = 50;

// Compute the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<h3>Total Cost: " + totalCost + " PKR</h3><br><br>");

// Store total marks
var totalMarks = prompt("Enter Your Total Marks");

// Store marks obtained by the student
var marksObtained = prompt("Enter Your Total Obtained Marks");

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage Obtained: " + percentage.toFixed(2) + "%</h3><br><br>");

// Define the amounts in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Define the exchange rates
var usdToPkrRate = 278.92;
var sarToPkrRate = 74.38;

// Convert the total currency to Pakistani Rupees using a single expression
var totalPakistaniRupees = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the result in the browser
document.write("<h2>Currency Conversion</h2>");
document.write("<p>Total amount in US dollars: $" + usDollars + "</p>");
document.write("<p>Total amount in Saudi Riyals: " + saudiRiyals + " SAR</p>");
document.write("<h3>Total amount in Pakistani Rupees: " + totalPakistaniRupees.toFixed(2) + " PKR</h3><br><br>");


// Initialize the variable with some number
var initialValue = 10;

// Perform arithmetic operations in the given sequence using a single expression
var result = (((initialValue + 5) * 10) / 2);

// Display the result in the browser
document.write("<h2>Arithmetic Sequence</h2>");
document.write("<p>Initial Value: " + initialValue + "</p>");
document.write("<h3>Result after sequence of operations: " + result + "</h3> <br><br>");

// Age Calculator

var birthYear = +prompt("Enter your birth year"); 
var currentYear = "2024"
var age_identify = (currentYear - birthYear)

document.write("<h2>Age Calculator</h2>");
document.write("<p>Current Year: " + currentYear + "</p>");
document.write("<p>Birth Year: " + birthYear + "</p>");
document.write("<p>Your Age is : " + age_identify + "</p><br><br>");

// a. Store a radius into a variable
var radius = 10; // You can change this value to any desired radius

// b. Calculate the circumference based on the radius
var circumference = 2 * Math.PI * radius;

// Calculate the area based on the radius
var area = Math.PI * Math.pow(radius, 2);

// Output the results
document.write("<h2>The Geometrizer</h2>");
document.write("<p>Radius: " + radius + "</p>");
document.write("<p>The circumference is: " + circumference.toFixed(2) + "</p>");
document.write("<p>The area is: " + area.toFixed(2) + "</p><br><br>");

// a. Store your favorite snack into a variable
var favoriteSnack = "chocolate bars";

// b. Store your current age into a variable
var currentAge = 30; // You can change this value to your current age

// c. Store a maximum age into a variable
var maximumAge = 80; // You can change this value to your estimated maximum age

// d. Store an estimated amount per day (as a number)
var amountPerDay = 2; // You can change this value to how many snacks you eat per day

// e. Calculate how many you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var totalSnacksNeeded = amountPerDay * 365 * yearsRemaining;

// Output the result to the screen
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("<p>Your favorite snack: " + favoriteSnack + "</p>");
document.write("<p>Your current age: " + currentAge + "</p>");
document.write("<p>Your estimated maximum age: " + maximumAge + "</p>");
document.write("<p>Estimated amount per day: " + amountPerDay + " snacks</p>");
document.write("<p>You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "</p>");