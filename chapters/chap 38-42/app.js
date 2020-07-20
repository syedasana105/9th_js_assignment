document.write("<hr>");
// QUESTION 01

function power(a,b)
{
        var result = 1;
        for (var i =1; i <= b; i++)
        {
                result = a * result;        
        }
        return result;
}
a=+prompt("Enter base value ");
document.write("The base value is: "+a+"<br>");
b=+prompt("Enter exponent ");
document.write("Exponent is: "+b+"<br>");
document.write("Answer is: "+power(a, b)+"<br>");

// QUESTION 02

function leapyear(year) {
    if ((year % 100 === 0) || (year % 400 === 0) || (year % 4 === 0)) {
        alert("This year is a leap Year");
    }
    else {
        alert("This year is not a leap year");
    }
    return year;
}
var b = +prompt("Enter year " + "");
leapyear(b);

// QUESTION 03

var a=+prompt("enter length of first side of triangle");
var b=+prompt("enter length of second side of triangle");
var c=+prompt("enter length of third side of triangle");
function s(s){
    s=(a+b+c)/2;
    return s;
}
var g=s(s);
function areaOfTriangle(a,b,c){
var x=g-a;
var y=g-b;
var z=g-c;
var area=Math.sqrt(g*x*y*z);
document.write("Area of triangle is: "+area+"<br>");
return area;

}
var h=areaOfTriangle(a,b,c);


// QUESTION 04

function calavg(i,j,k){
    var avg=(i+j+k)/3.0;
    return avg;
}
function calpercent(avg,total){
    var percent=(avg/total)*100;
    return percent;
}
function main(){
    var a,b,c,total;
    var av,per;
   a= +prompt("Enter the marks received by the student in 1st subject");
   b= +prompt("Enter the marks received by the student in 2cnd subject");
   c= +prompt("Enter the marks received by the student in 3rd subject");
total=+prompt("Enter total possible marks for 1 paper");
var g=calavg(a,b,c,av);
var h=calpercent(g,total);
alert("The average marks is: "+g);
alert("The total percentage is: "+h+"%");
}
main();

// QUESTION 05

  function indexOf(string, character) {
    var i=0;
    while(i < string.length){
        if(string[i] == character){  // yes? just return the index i
            return i
        }
        i++                       // no? increase i and move on to next loop iteration
    }
    return -1;         // made it through the loop and without returning. This means no match was found.
}
var string=prompt("Enter any string ");
  var character=prompt("Enter character to find its index ");
document.write( "The character you entered is at index: "+indexOf(string, character)+"<br>");

// QUESTION 06

function remove(string) {
    if (string.length > 25) {
        alert("Please enter string length between 1 to 25 alphabets including spaces ");
    }
    else { 
  document.write(string+"<br>");
    var arr1 = string.split("");
    var reg = /[aeiou]/ig
    var arr2 = string.match(reg);
    var noVowels = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            noVowels.push(arr1[i]);
        }
    }
   document.write(noVowels.join("")+"<br>");
}
}
string = prompt("Enter string");
remove(string);

// QUESTION 07

function findOccurrences() {
  var count = 0;
   vowelAvailable = false;
  for (const letter of string.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        {
          if (vowelAvailable) {
            count++;
            vowelAvailable = false;
          } else {
            vowelAvailable = true;
          }
          break;
        }
      default:
        vowelAvailable = false
    }
  }
  return count
}
var string = prompt("enter string")
document.write(findOccurrences(string)+"<br>");

// QUESTION 08

function convertMeters(km){
var m=km*1000;
return m;
}
function convertFeets(m){
    var f=m*3.28;
    return f;
}
function convertInches(f){
    var i=f*12;
    return i;
}
function convertCentimeters(i){
    var c=i*30;
    return c;
}
km=+prompt("Enter distance between two cities in km");
var n=convertMeters(km);
document.write("distanc between two cities in meters are: "+n+"meters <br>");
var n=convertFeets(n);
document.write("distanc between two cities in feets are: "+n+"feets <br>");
var n=convertInches(n);
document.write("distanc between two cities in inches are: "+n+"inches <br>");
var n=convertCentimeters(n);
document.write("distanc between two cities in centimeters are: "+n+"centimeters <br>");

// QUESTION 09
var overtimePay=0;
var overTime;
    var timeWorked=+prompt("enter the time employee worked in hour");
if(timeWorked>40){
    overTime=timeWorked-40;
    overtimePay=overtimePay+(12*overTime);
}
document.write("Total Overtime Pay  Is: "+overtimePay+"rupees<br>");


// QUESTION 10
function currencyDenomination() {
    var cash = +prompt("Enter amount to withdraw: ");
    var hundred =parseInt(cash / 100);
    var fifty = parseInt((cash-(hundred*100)) /50);
    var ten =parseInt( (cash-(hundred*100)-(fifty*50))/10 );
    var rupees=parseInt((cash-(hundred*100)-(fifty*50)-(ten*10)));
document.write("You will have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes and "+rupees+" one rupee coin.<br>")
}
currencyDenomination();
