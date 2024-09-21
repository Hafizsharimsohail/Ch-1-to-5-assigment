// The chapter one is start???????
//Q:1,2
alert("Do you want to continue?")
//Q:3
alert("Welcome to our resturants!\nTurn on notification")
// The chapter one is end......
// The chapter two is started????????
//Q:1
let username;
//Q:2
let myname = "Micheal jackson";
//Q:3
let message = "Helloworld";
alert(message);
//Q:4
let studentname = "Sharim";
let Studentage = "18";
let studentsubject = "Maths";

alert("studentname:" + studentname );
alert("Studentage:" + Studentage);
alert("studentsubject:" + studentsubject);
//Q:5
alert("Pizza\nPizz\nPiz\nPi\nP");
//Q:6
let email = "Shareemk405@gmail.com";
alert("My email address is:" + email);
//Q:7
let book = "A smart way to learn javascript";
alert("I am trying to learn from the book:" + book);
//Q:8
let message1 = "Yah! I can write HTML content through javascript";
document.write(message1);
//Q:9
let message2 = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(message2);
// The chapter two is end.......
// The chapter three is start??????
//Q:1
let age = "I am 18 year old";
alert(age);
//Q:2
let visitcount = localStorage.getItem('visitCount') || 0
visitcount++
localStorage.setItem('visitCount',visitcount)
alert("You have visited this site" + visitcount +"times")
//Q:3
let  birthyear = 2007;
document.write( "<br />" + "My birth year is" + birthyear + ".<br>");
document.write( "Data type of my declared variable is" + typeof(birthyear));
//Q:4
let visitor = "Micheal";
let product = "Boots";
let quantity = "10";
document.write("<br />" + visitor + "ordered" + quantity +""+ product + "On adidas clothing store")
// The chapter three is end......
// The chapter fout is start????????
//Q:!
let var1, var2, var3;
//five legal variables names
let userName;
let $dollarSign;
let _underscore;
let Casesensitive;
let myVariable123;
//Five Illegal variable names are commented due to error.
  // let 1stVariable;        // Illegal: Cannot start with a number
        // let var-name;           // Illegal: Hyphens are not allowed
        // let let;                // Illegal: Reserved keyword
        // let my variable;        // Illegal: No spaces allowed
        // let @symbol;            // Illegal: Special symbols (except $ and _) are not allowed
// The heading of rules (a)
{
    document.write("<h1>Rules for naming JS variables</h1>");

    // b) Rules for variable names
    document.write("Variable names can only contain letters, numbers, $ and _.<br>");
    //Example of b
    document.write("For example: $my_1stVariable<br><br>");

    // c) Starting characters for variables
    document.write("Variables must begin with a letter, $ or _.<br>");
    //Example of c
    document.write("For example: $name, _name, or name<br><br>");

    // d) Case sensitivity of variable names
    document.write("Variable names are case sensitive.<br><br>");

    // e) Variables should not be JS keywords
    document.write("Variable names should not be JavaScript keywords.");
}
// The chapter four is end???????
//Q:1
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.write("<br/>" + "<br/>" + "The sum of " + num1 + "and" + num2  + "is:" + sum + "<br/>" )
//Q:2
{
  // Two numbers
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  //  basic math operations
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  let modulus = num1 % num2;

  // Display results in the browser
  document.write("<h2>Results:</h2>");
  document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
  document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
  document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
  document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");
   {
      // a) Declare a variable
      let myVar;

      // b) Show the value after declaration
      document.write("Value after variable declaration is: " + myVar + "<br>");

      // c) Initialize the variable with some number (5)
      myVar = 5;
      document.write("Initial value: " + myVar + "<br>");

      // e) Increment the variable
      myVar++;
      document.write("Value after increment is: " + myVar + "<br>");

      // g) Add 7 to the variable
      myVar += 7;
      document.write("Value after addition is: " + myVar + "<br>");

      // i) Decrement the variable
      myVar--;
      document.write("Value after decrement is: " + myVar + "<br>");

      // k) Show the remainder after dividing by 3
      let remainder = myVar % 3;
      document.write("The remainder is: " + remainder + "<br>");
  }
}
//Q:3
let ticketprice = 600 ;
let numberoftickets = 5;
let totalcost = ticketprice * numberoftickets;
document.write("Total cost to buy 5 tickets to movie is" + totalcost);
//Q:4
let number = 5;
document.write("<br />" + "<br/>" + number + "x" + "1" + "=" + number * 1 );
document.write("<br />" + number + "x" + "2" + "=" + number * 2 );
document.write("<br />" + number + "x" + "3" + "=" + number * 3 );
document.write("<br />" + number + "x" + "4" + "=" + number * 4 );
document.write("<br />" + number + "x" + "5" + "=" + number * 5 );
document.write("<br />" + number + "x" + "6" + "=" + number * 6 );
document.write("<br />" + number + "x" + "7" + "=" + number * 7 );
document.write("<br />" + number + "x" + "8" + "=" + number * 8 );
document.write("<br />" + number + "x" + "9" + "=" + number * 9 );
document.write("<br />" + number + "x" + "10" + "=" + number * 10 );
//Q:5
let celsius = 25; // Example Celsius temperature

// Step b: Convert Celsius to Fahrenheit
let fahrenheitFromCelsius = (celsius * 9/5) + 32;

// Output: "NNoC is NNoF"
document.write( "<br />" + `${celsius}°C is ${fahrenheitFromCelsius.toFixed(2)}°F<br>`);

// Step c: Store a Fahrenheit temperature into a variable
let fahrenheit = 77; // Example Fahrenheit temperature

// Step d: Convert Fahrenheit to Celsius
let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

// Output: "NNoF is NNoC"
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`);
//Q:6
let totalMarks = 500;         
let marksObtained = 420;      

let percentage = (marksObtained / totalMarks) * 100;
document.write('<p>Total Marks: ' + totalMarks + '</p>');
document.write('<p>Marks Obtained: ' + marksObtained + '</p>');
document.write('<p>Percentage: ' + percentage.toFixed(2) + '%</p>');
//Q:7
let dollor = 10;
let Riyal = 25;
let dollorrate = 104.80;
let Riyalrate = 28
let PKR1 = dollorrate * dollor;
let PKR2 = Riyalrate * Riyal;
let totalcurrency = PKR1 + PKR2;
document.write("Total currency in PKR is:" + totalcurrency );
//Q:8

let number1 = 5;
let result = ((number1 + 10) * 10) / 2;
document.write("<br />" + "The result is:" + result );
//Q:9
let Currentyear = 2024;
let birthyear1 = 2007;
let age1 = Currentyear - birthyear;    // Calculate current age
let age2 = age1  -2 ;
document.write("<br />" +  "Your age is"  + age2 + " years old." );
//Q:10
var radius = 5; 
var pi = 3.142;
var circumference = 2 * pi * radius;
document.write( "<br />" + "The circumference is " + circumference + "<br>");
var area = pi * radius * radius;
document.write( "The area is " + area);  
//Q:11
var favoriteSnack = "Chips"; 
var currentAge = 25; 
var maxAge = 80; 
var amountPerDay = 2; 
var yearsLeft = maxAge - currentAge;
var totalSnacks = yearsLeft * 365 * amountPerDay;
document.write("<br />" +"You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");



