var variable1 , variable2, variable3, variable4, variable5, variable6, variable7, variable8;
variable1 = "numbers"
variable2 = "$"
variable3 = ". For example :"
variable4 = "$my_1stVariable"
variable5 = "$name"
variable6 = "name or name"
variable7 = "sensitive"
variable8 = "keywords"
variable9 = "letter"
// Legal Variable Names:
// firstName
// myVariable
// age_2
// $amount
// _myVar

// Illegal Variable Names:

// 2ndName (Variable names cannot start with a number)
// my-variable (Variable names cannot contain hyphens)
// my variable (Variable names cannot contain spaces)
// var (Reserved keyword in JavaScript)
// function (Reserved keyword in JavaScript)
document.write("<h1>Rules for naming JS variables</h1>")
document.write("Variable names can only contain" + variable1 + " ," + variable2 + " ," +
variable3 + " and " + variable4 + "<br>")
document.write("Variables must begin with a " + variable9 + " ," + variable2 + " or" +
variable3 + "For example $name, _name or name<br>")
document.write("Variable names are case- " + variable7 + "<br>");
document.write("Variable names should not be JS reserved " + variable8 + "<br>");
        