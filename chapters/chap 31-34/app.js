// QUESTION # 01
var rightNow = new Date();
document.write(rightNow+"<br>");

// QUESTION # 02

var monthsName=["January","Februry","March","April","May","June","July","August","September","October","November","December"];
var d= new Date();
document.write("The current month is "+monthsName[d.getMonth()]+"<br>");

// QUESTION # 03

var daysName=["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
var d= new Date();
document.write("Today is: "+daysName[d.getDay()]+"<br>");

// QUESTION # 04

var daysName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var d= new Date();
var fun=daysName[d.getDay()];
if (fun=="Saturday"){
    alert("Its Fun day");
}
else if(fun=="Sunday"){
    alert("Its Fun day");
}


// QUESTION # 05

var d = new Date();
var Months=d.getDate();
if(Months<16){
    document.write("First fifteen days of month."+"<br>");
}
else{
    document.write("Last days of the month.");
}

// QUESTION # 06

var rightNow = new Date();
document.write("Current Date: "+rightNow+"<br>");
var millsSince = rightNow.getTime();
document.write("Elapsed milliseconds since January 1,1970: "+millsSince+"<br>");
var currMins = rightNow.getMinutes();
document.write("Elapsed minutes since January 1,1970: "+currMins+"<br>");

// QUESTION # 07
var d=new Date();
var currentHrs = d.getHours();
if(currentHrs<=11){
    alert("Its A.M");
}
else {
    alert("Its P.M");
}

// QUESTION # 08
var today = new Date();
var futureDate = new Date("December 31, 2020");
document.write(futureDate+"<br>");

// QUESTION # 09
var today = new Date();
var thisRamadan = new Date("April 25, 2020");
var ramadan2015 = new Date("June 18, 2015");
var currentRamadan = thisRamadan.getTime();
var Ramadan2015 = ramadan2015.getTime();
var msdiff=currentRamadan-Ramadan2015;
var dDiff = msdiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff+" days have been passes since 1st Ramadan,2015"+"<br>");

// QUESTION # 10
var msDiff = new Date("December 05,2015").getTime() - new Date("January 01, 2015").getTime();
document.write("On refrence Date"+ new Date("December 05,2015")+"<br>");
var dDiff = msDiff / (1000*60);
document.write(dDiff+" seconds had been passed since begining of 2015"+"<br>");

// QUESTION # 11

var d = new Date();
document.write("Current date: "+d+"<br>");
d.setHours( d.getHours() + 1 );
document.write( "1 hour ago, it was "+d+"<br>");

// QUESTION # 12
var d = new Date();
d.setFullYear( d.getFullYear() - 100 );
alert("Current date: "+d+"\n  100 years back, it was "+d);

// QUESTION # 13
var age=+prompt("Enter your age");
document.write("Your age is: "+age+"<br>");
var d = new Date();
var currYr = d.getFullYear();
var birthYear=currYr-age;
document.write("Your birth year is: "+birthYear+"<br>");

// QUESTION # 14

document.write("<h1><b>K-Electric bill</b></h1>"+"<br><br>");
var customerName="ABC Customer";
document.write("Customer Name: "+customerName+"<br>")
var monthsName=["January","Februry","March","April","May","June","July","August","September","October","November","December"];
var d= new Date();
document.write("Month : "+monthsName[d.getMonth()]+"<br>");
var units=410;
document.write("Number of units: "+units+"<br>");
var chargePerUnit=16;
document.write("Charges per unit: "+chargePerUnit+"<br><br>");
var netAmntPaywithDueDate = units * chargePerUnit;
document.write("Net Amount Payable (within Due Date): "+netAmntPaywithDueDate+"<br>");
var latePayCharges=350;
document.write("Late payment surcharge: "+latePayCharges+"<br>")
var grossAmntPayAfterDueDate=netAmntPaywithDueDate + latePayCharges;
document.write("Gross Amount Payable (after Due Date): "+grossAmntPayAfterDueDate+"<br>"); 


