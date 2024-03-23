// user greet program 
var yourName = prompt("Please enter your name")
document.write( "Hello.! " + yourName + " Welcome to the browser<br><br>")

// arithmetic increment / decrement

var number = +prompt("write your favorite number");

document.write ("Result:<br>" + "The value of a number is " + number + "<br><br><br>");

var result = ++number
document.write ( "The value of a ++number is : " + result + "<br>now the value is" + result +"<br><br>" );

document.write ( "The value of a number++ is : " + result++ + "<br>now the value is" + result +"<br><br>" );

document.write ( "The value of a --number is : " + --result + "<br>now the value is" + result +"<br><br>" );

document.write ( "The value of a number-- is : " + result-- + "<br>now the value is" + result +"<br><br>" );

// variable output result

var a = 2, b = 1;
document.write("a is = " + a + "<br> b is = " + b + "<br>")

var result = --a - --b + ++b + b--;
document.write("result is = " + result)

// multiplication of table 

var table = +prompt("enter a number to show table of it")
if (table==0) { table = 5}
 
document.write("<br><br>table of  " + table + "<br>")

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

// Take user result 

let sub1= prompt("Enter the Subject 1","English"); 
let sub2= prompt("Enter the Subject 2","Maths"); 
let sub3= prompt("Enter the Subject 3","Urdu")
let marksObt1= +prompt("Enter marks of "+sub1,54)
let marksObt2= +prompt("Enter marks of "+sub2,54)
let marksObt3= +prompt("Enter marks of "+sub3,48)
const maxMarks = 100;
let totalMarks = 300;
let totalObt = marksObt1 + marksObt2 + marksObt3;
let perc = totalObt/totalMarks*100;
let perc1 = marksObt1/maxMarks*100;
let perc2 = marksObt2/maxMarks*100;
let perc3 = marksObt3/maxMarks*100
document.write(`<table> 
    <tr>
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
    </tr>
    <tr>
    <td>${sub1}</td>
    <td>${maxMarks}</td>
    <td>${marksObt1}</td>
    <td>${Math.round(perc1)}%</td>
    </tr
    <tr>
    <td>${sub2}</td>
    <td>${maxMarks}</td>
    <td>${marksObt2}</td>
    <td>${Math.round(perc2)}%</td>
    </tr
    <tr>
    <td>${sub3}</td>
    <td>${maxMarks}</td>
    <td>${marksObt3}</td>
    <td>${Math.round(perc3)}%</td>
    </tr>
    <tr>
    <th>Total</th>
    <th>${totalMarks}</th>
    <th>${totalObt}</th>
    <th>${Math.round(perc)}%</th>
    </tr>

 </table>`)


