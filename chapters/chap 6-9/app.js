
// ASSIGNMENT 06-09

// #Q No 01

var a=10;
document.write("Results:"+"<br>");
document.write("The value of a is:"+(a)+"<br>");
document.write("----------------------"+"<br><br>");

document.write("The value of ++a is:"+(++a)+"<br>");
document.write("Now the value of a is: " + a +"<br><br>");

document.write("The value of a++ is:"+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+(a)+"<br><br>");

document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

// #Q No 02
var a=2, b=1;
document.write("a is "+a+"<br>");  
document.write("b is "+b+"<br>"); 
document.write("<hr>");
var result = --a - --b + ++b + b--;
               1  -  0  +  1  + 1
 document.write("a=2 & b=1"+"<br>");
document.write("--a = 1 "+"<br>")
document.write("--a - --b = 1 - 0 "+"<br>");
document.write("--a - --b + ++b = 1 - 0 + 1 "+"<br>");
document.write("--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3 "  + "<br>");
document.write("<hr>");                     
document.write("result is "+result+"<br><br>");

// #Q No 03
var user=prompt("Assalam-o-alikum");

// #Q No 04
var table=+prompt("Enter table number");
for(a=1;a<=10;a++){
    document.write(table + "*" + a + "=" + (table*a)+"<br>");
}
for(a=1;a<=10;a++){
    document.write("5" + "*" + a + "=" + (5*a)+"<br>");
}

// #Q No 05

var subj1=prompt("Enter 1st Subject");
var subj2=prompt("Enter 2cnd Subject");
var subj3=prompt("Enter 3rd Subject");
var total_marks=100;
var obt_subj1=+prompt("Enter 1st subject marks ");
var obt_subj2=+prompt("Enter 2cnd subject marks ");
var obt_subj3=+prompt("Enter 3rd subject marks ");
var per1=(obt_subj1/total_marks)*100;
var per2=(obt_subj2/total_marks)*100;
var per3=(obt_subj3/total_marks)*100;
total_per=((per1+per2+per3)/300)*100;
document.write("<table> <tr> <td><b> Subjects </b></td>  <td><b>Total Marks</b></td>  <td><b>Obtained Marks</b></td>  <td><b>Percentage</b></td>  </tr>  <tr> <td>"+subj1+"</td>  <td>"+total_marks+"</td>  <td>"+obt_subj1+"</td>  <td>"+(obt_subj1/total_marks)*100+"%</td>  </tr> <tr> <td>"+subj2+"</td>  <td>"+total_marks+"</td>  <td>"+obt_subj2+"</td>  <td>"+(obt_subj2/total_marks)*100+"%</td>   </tr>  <tr> <td>"+subj3+"</td>  <td>"+total_marks+"</td>  <td>"+obt_subj3+"</td>  <td>"+(obt_subj3/total_marks)*100+"%</td>    </tr>  <tr> <td></td> <td><b>"+((total_marks)+(total_marks)+(total_marks))+"</b></td>  <td><b>"+((obt_subj1)+(obt_subj2)+(obt_subj3))+"</b></td>  <td><b>"+total_per+"%</b></td>    </tr> </table>");
