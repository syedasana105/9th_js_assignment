// ASSIGNMENT 17-20
// #Q NO 01
// var multiA = [[],[]];
// #Q NO 02
var multi_Arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<3;i++){
    for(j=0;j<4;j++){
    document.write(multi_Arr[i][j]+" ");
}
document.write("<br>");
}

// #Q NO 03
for(var k=1;k<=10;k++){
    document.write(k+"<br>");
}

// #Q NO 04

var table_NO=+prompt("Enter a number to show its multiplication number.");
var table_length=+prompt("Enter length of multiplication table.");
for(var i=1;i<=table_length;i++){
    document.write(table_NO + " * "+ i + " = " + (table_NO*i) + "<br>");
}

// #Q NO 05

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var z=0;z<=fruits.length;z++){
    document.write("Elements at index "+z+" is "+fruits[z]+"<br>");
}

// #Q NO 06
// PART a:
document.write("<h3>Counting</h3>"+"<br>");
for(var y=1;y<=15;y++){
    document.write(y+ ",");
}
document.write("<br>");
// PART b:
document.write("<h3>Reverse Counting</h3>"+"<br>");
for(var y=10;y>0;y--){
    document.write(y+",");
}
document.write("<br>");
// PART c:
document.write("<h3>Even</h3>"+"<br>");
for(var y=0; y<=20;y=y+2){
    document.write(y+",");
}
document.write("<br>");
// PART d:
document.write("<h3>Odd</h3>"+"<br>");
for(var y=1; y<=20;y=y+2){
    document.write(y+",");
}
document.write("<br>");
// PART  e:
document.write("<h3>Series</h3>"+"<br>");
for(var y=2; y<=20;y=y+2){
    document.write(y+"k,");
}
document.write("<br>");

// #Q NO 07

var arr=["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery, What do you want to order sir/,ma'am?");
var bakeryItems= arr.indexOf(search);
if(arr.indexOf(search) != -1){
    document.write(search + " is available at index "+bakeryItems+" in our bakery"+"<br>");
}
else{
    document.write(search + " is not available  in our bakery"+"<br>")
}



// #Q NO 08

var arry=[24,53,78,91,12];
document.write("Array items: "+arry+"<br>");
var largest = arry[0];
for(var i = 0; i < arry.length; i++){
if(arry[i] > largest){
    largest=arry[i];
}
}
document.write("The largest number is "+largest+"<br>");

// // #Q NO 09

var arry=[24,53,78,91,12];
document.write("Array items: "+arry+"<br>");
var smallest = arry[0];
for(var i = 0; i < arry.length; i++){
if(arry[i] < largest){
    smallest=arry[i];
}
}
document.write("The smallest number is "+smallest+"<br>");

// #Q NO 10
var tab=5;
for(i=1;i<=20;i++){
    document.write((i*tab) + " ,");
}
document.write("<br>");
