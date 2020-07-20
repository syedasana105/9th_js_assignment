// QUESTION # 01
var user = +prompt("Enter a positive integer.");
document.write("number: "+user+"<br>");
var roundOfNumber = Math.round(user);
document.write("round of value: "+roundOfNumber+"<br>");
var floorValue = Math.floor(user);
document.write("floor value: "+floorValue+"<br>");
var ceilValue = Math.ceil(user);
document.write("ceil value: "+ceilValue+"<br>");

// QUESTION # 02
var user = +prompt("Enter a negative integer.");
document.write("number: "+user+"<br>");
var roundOfNumber = Math.round(user);
document.write("round of value: "+roundOfNumber+"<br>");
var floorValue = Math.floor(user);
document.write("floor value: "+floorValue+"<br>");
var ceilValue = Math.ceil(user);
document.write("ceil value: "+ceilValue+"<br>");

// QUESTION # 03
var number =+prompt("Enter any number");
var  absoluteNumber=Math.abs(number);
document.write("The absolute value of "+number+" is "+absoluteNumber+"<br>" );

// QUESTION # 04
var dice=Math.random();
var improvedNumber=(dice*6)+1;
var roundOf=Math.floor(improvedNumber);
document.write("random dice value: "+roundOf+"<br>");

// QUESTION # 05

var coin=Math.random();
var improvedNumber=(coin*2)+1;
var roundOf=Math.floor(improvedNumber);
if(roundOf==2){
    document.write(roundOf+"<br>");
    document.write("random coin value: Heads");
}
else{
    document.write(roundOf+"<br>");
    document.write("random coin value: Tails"+"<br>");
}

// QUESTION # 06
var number=Math.random();
var randomNumber1TO100=(number*100)+1;
var roundOf=Math.floor(randomNumber1TO100);
document.write("random number between 1 and 100: "+roundOf+"<br>");

// QUESTION # 07

var user=prompt("Enter your weight in kilograms.");
var parseString=parseFloat(user);
document.write("The weight of user is "+parseString+" Kilograms."+"<br>");


// QUESTION # 08

var secretNumber=Math.random();
var randomNumber1TO10=(secretNumber*10)+1;
var roundSecret= Math.round(randomNumber1TO10);
var user=+prompt("Enter a number between 1 to 10.");
if(user==roundSecret){
    alert("Congratulations you make a right guess.");
}
else{
    alert("                               Try again!");
}
