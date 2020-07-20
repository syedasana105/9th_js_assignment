

// ASSIGNMENT 12-13
// #Q NO 01

var input=prompt("Enter any character, number, or string.");
if(input >= 'A' && input <= 'Z') {
    alert("Uppercase letters.");
}
else if (input >= 'a' && input <= 'z'){
    alert("Lowercase letter.")
}
else if(input >= '0' && input <= '9'){
    alert("Digit.");
}
else{
    alert("special character.");
}

// #Q NO 02

var int_1=+prompt("Enter 1st integer :");
var int_2=+prompt("Enter 2cnd integer :");
if(int_1 > int_2){
alert(int_1);
}
else if(int_2 > int_1){
    alert(int_2);
    }
else if (int_1===int_2){
    alert("Integers are equal "+int_2);
}
else{
    alert("");
}


// #Q NO 03
var int =+prompt("Enter any integer to check it is positive , negative or zero.");
if(int > 0){
    alert("Integer is positive.");
}
else if(int < 0){
    alert("Integer is negative");
}
else{
    alert("Integer is zero.");
}


// #Q NO 04

var char=prompt("Enter any character.");
var a=confirm;
if(char === 'a'||char === 'e' || char === 'i' ||char === 'o' || char ==='u' || char === 'A' ||char === 'E' || char ==='I' ||char === 'O' || char ==='U'){
   alert("true");
} 
else{
    alert("false");
}

// #Q NO 05
var storePassword="karachi123";
 var password=prompt("Enter your password : ");
if(password==""){
    alert("Please enter your password");
}
else if(password==storePassword){
    alert("Correct! The password you entered matches thr original password");
}
else{
    alert("Incorrect password");
}

// #Q NO 06
var greeting;
var hour =13;
if(hour < 18){
    greeting="Good day";
    alert(greeting);
}
else{
    greeting="Good evening";
alert(greeting);
}

// #Q NO 07
var time = 1900;
if(time >= 0000 && time < 1200){
    alert("Good morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good afternoon!")
}
else if(time >= 1700 && time < 2100 ){
    alert("Good evening!");
}
else if(time >= 2100 && time <= 2359){
    alert("Good night!");
}