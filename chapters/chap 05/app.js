// ASSIGNMENT 05
// #Q no 01
var e=3;
var r=5;
var c=e+r;
document.write("Sum of "+e+" and "+r+" is: "+c+"<br>");

// // #Q no 02
var e=3;
var r=5;
var c=e-r;
document.write("Subtraction of "+e+" and "+r+" is: "+c+"<br>");
var c=e*r;
document.write("Multiplication of "+e+" and "+r+" is: "+c+"<br>");
var c=e/r;
document.write("Division of "+e+" and "+r+" is: "+c+"<br>");
var c=r%e;
document.write("Modulus of "+r+" and "+e+" is: "+c+"<br>");

// #Q no 03
// #PART a:
var f;
// #PART b:
document.write("Value after variable declaration is: "+f+"<br>");
// #PART c:
f=5;
// #PART d:
document.write("Initial value: "+f+"<br>");
// #PART e:
f++;
// #PART f:
document.write("Value after increament is: "+f+"<br>");
// #PART g:
f=f+7;
// #PART h:
document.write("Value after addition is: "+f+"<br>");
// #PART i:
f--;
// #PART j:
document.write("Value after decreament is: "+f+"<br>");
// #PART k:
f=f%3;
// #PART l:
document.write("The remainder is: "+f+"<br>");

// #Q no 04

var ticket_price=600;
var buy5=5;
var buy = ticket_price*buy5;
document.write("<br><br>"+"Total cost to buy "+buy5+" tickets to a movie is "+buy+"PKR"+"<b>");

// // #Q no 05

var tab=4;
document.write("<br><br>"+"table of "+tab+"<br>");
document.write(tab+"x1="+tab+"<br>");
document.write(tab+"x2="+(tab*2)+"<br>");
document.write(tab+"x3="+(tab*3)+"<br>");
document.write(tab+"x4="+(tab*4)+"<br>");
document.write(tab+"x5="+(tab*5)+"<br>");
document.write(tab+"x6="+(tab*6)+"<br>");
document.write(tab+"x7="+(tab*7)+"<br>");
document.write(tab+"x8="+(tab*8)+"<br>");
document.write(tab+"x9="+(tab*9)+"<br>");
document.write(tab+"x10="+(tab*10)+"<br>");

// // #Q no 06

var celTemp=25;
var FarenTemp=70;
var convert_fTOc=(FarenTemp-32)*5/9;
var convert_cTOf=((celTemp*9/5)+32);
document.write("<br><br>"+celTemp+"<sup>o</sup>C is "+convert_cTOf+"<sup>o</sup>F"+"<br>");
document.write(FarenTemp+"<sup>o</sup>F is "+convert_fTOc+"<sup>o</sup>C"+"<br>");

// // #Q no 07

var item1=650;
var quantity1=3;
var item2=100;
var quantity2=7;
var shipping_charges=100;
var Total=((item1*quantity1)+(item2*quantity2)+shipping_charges);
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is: " +item1+ "<br>");
document.write("Quantity of item 1 is: "+quantity1+"<br>");
document.write("Price of item 2 is: " +item2+ "<br>");
document.write("Quantity of item 2 is: "+quantity2+"<br>");
document.write("Shipping Charges " +shipping_charges + "<br><br>");
document.write("Total cost of your order is " +Total + "<br>");


// // #Q no 08

var totMarks=980;
var obtMarks=804;
var percent=(totMarks/obtMarks)*100;
document.write("<h1>Marks Sheet</h1>"+"<br><br>");
document.write("Total marks: "+totMarks+"<br>");
document.write("Marks obtained: "+obtMarks+"<br>");
document.write("Percentage: "+percent+"<br>");

// // #Q no 09
var usDollars=10;
var Saudi=25;
var usTOpakistani=usDollars*104.80;
var saudiTOpakistani=Saudi*28;
var totPakistani=(usTOpakistani+saudiTOpakistani);
document.write("<h1>Currency in PKR</h1>"+"<br><br>");
document.write("Total currency in PKR: "+totPakistani+"<br>");

// // #Q no 10

var g=4;
g=g+5;
g=g*10;
g=g/2;
document.write("Answer of all calculations= "+g+"<br>");

// // #Q no 11

var currentYear=2020;
var birthYear=2000;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1>"+"<br><br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age is: "+age+"<br>");

// // #Q no 12

var radius=20;
var circumference=(2*3.142*radius);
var area=(3.142*radius*radius);
document.write("<h1>The Geometrize</h1>"+"<br><br>");
document.write("Radius of a circle: "+radius+"<br>")
document.write("The circumference is: "+circumference+"<br>");
document.write("The are is: "+area+"<b>");

// // #Q no 13

var snack=" choclate chip";
var age=15;
var max_age=65;
var amount=3;
var total=(max_age-age)*amount;
document.write("The Lifetime Supply Calculator"+"<br><br>");
document.write("Favourit Snack: "+snack+"<br>");
document.write("Current age: "+age+"<br>");
document.write("Estimated Maximum Age: "+max_age+"<br>");
document.write("Amount of snack per day: "+amount+"<br>");
document.write("You will need "+(total)+(snack)+" to last you untill ripe old age of "+max_age+"<br><br><br>");
