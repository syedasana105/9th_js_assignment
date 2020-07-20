

// #ASSIGNMENT 14-16
// #Q NO 01
// var students_Array=[];
// #Q NO 02
// var stud = new_stud(); 
// #Q NO 03
students_Array =["sana","hamza","sakina","saba","sania"];
// #Q NO 04
// new_stud=(1,2,3,4,5,6,7);

// #Q NO 05
// var boolArr =new_boolArr[3];
// new_boolArr[0]="sana";
// new_boolArr[1]="hamza";
// new_boolArr[2]="sakina";
// #Q NO 06
var mixedArr=[1,2,3,"sana",6,"hamza"];
// #Q NO 07
var eduArray=["SSC " ,"HSC ", "BCS " , "BS " ,"BCOM " , "MS ","M.Phil","PhD "];
document.write("<h3>Qualifications:</h3>"+"<br>");
document.write("1)"+eduArray[0]+"<br>");
document.write("2)"+eduArray[1]+"<br>");
document.write("3)"+eduArray[2]+"<br>");
document.write("4)"+eduArray[3]+"<br>");
document.write("5)"+eduArray[4]+"<br>");
document.write("6)"+eduArray[5]+"<br>");
document.write("7)"+eduArray[6]+"<br>");
document.write("8)"+eduArray[7]+"<br>");

// #Q NO 08

var std_name=["Michael","John","Tony"];
var std_score=[320,230,480];
var tot_mark=500;
var per0=(std_score[0]/tot_mark)*100;
var per1=(std_score[1]/tot_mark)*100;
var per2=(std_score[2]/tot_mark)*100;
document.write("Score of "+std_name[0]+" is "+ std_score[0]+". Percentage : "+per0+"%"+"<br>" );
document.write("Score of "+std_name[1]+" is "+ std_score[1]+". Percentage : "+per1+"%"+"<br>" );
document.write("Score of "+std_name[2]+" is "+ std_score[2]+". Percentage : "+per2+"%"+"<br>" );

// #Q NO 09
// PART a:
 var colorName=["Red","Blue","Green","Orange","Pink"];
 document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br><br>");

// PART b:
var user=prompt("Enter a colour which you want to add at first.");
colorName.unshift(user);
document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br>"+colorName[5]+"<br><br>");

// PART c:
var user=prompt("Enter a colour which you want to add at End of the list.");
colorName.push(user);
document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br>"+colorName[5]+"<br>"+colorName[6]+"<br><br>");

// PART d:
colorName.shift(user);
document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br>"+colorName[5]+"<br><br>");

// PART e:
colorName.pop(user);
document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br><br>");

// PART f:
var user=+prompt("At which index you want to enter a colour.");
var color=prompt("Enter a colour which you want to add.");
colorName.splice(user,0,color);
document.write(colorName[0]+"<br>"+colorName[1]+"<br>"+colorName[2]+"<br>"+colorName[3]+"<br>"+colorName[4]+"<br>"+colorName[5]+"<br><br>");

// // PART g:
var user=+prompt("At which index you want to delete a colour.");
var color=prompt("Enter how many colours you want to delete.");
colorName.splice(user,color);
document.write(colorName+"<br><br>");

// #Q NO 10
var std_scor=[320,230,480,120]
document.write("Scores of students : "+std_scor+"<br>");
std_scor.sort();
document.write("Ordered Scores of Students :"+std_scor+"<br><br>");

// #Q NO 11
 
var city_name=["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:"+"<br>"+city_name+"<br><br>");
document.write("Selected cities  list:"+"<br>"+city_name.slice(2,4)+"<br><br>");

// #Q NO 12

var Arr=["This ","is ","my ","cat "];
document.write("Array:"+"<br>"+Arr+"<br><br>");
var k = Arr.join(" ");
document.write("String:"+"<br>"+ k +"<br><br>");

// #Q NO 13

var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices"+"<br>"+devices+"<br><br>");
document.write("Out:"+"<br>"+devices[0]+"<br>");
document.write("Out:"+"<br>"+devices[1]+"<br>");
document.write("Out:"+"<br>"+devices[2]+"<br>");
document.write("Out:"+"<br>"+devices[3]+"<br>");

// #Q NO 14

var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices"+"<br>"+devices+"<br><br>");
document.write("Out:"+"<br>"+devices[3]+"<br>");
document.write("Out:"+"<br>"+devices[2]+"<br>");
document.write("Out:"+"<br>"+devices[1]+"<br>");
document.write("Out:"+"<br>"+devices[0]+"<br>");

// #Q NO 15

var phone=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<form><select name=Phones_Brands> <option value="+ phone[0] +">"+ phone[0] +"</option> <option value="+phone[1]+">"+phone[1]+"</option><option value="+phone[2]+">"+phone[2]+"</option> <option value="+phone[3]+">"+phone[3]+"</option> <option value="+phone[4]+">"+phone[4]+"</option> <option value="+phone[5]+">"+phone[5]+"</option> </select></form>");
