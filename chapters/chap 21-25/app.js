// ques # 01
var firstName=prompt("Enter First name ");
var lastName=prompt("Enter Last name ");
var fullName=firstName+lastName;
document.write("hello " +fullName+"<br>");
// ques # 02
var favouritePhone =prompt("Write name of your favourite mobile phone modal ");
document.write("My favourite phone is: "+favouritePhone+"<br>");
document.write("Length of string: "+favouritePhone.length+"<br>");
// ques # 03
var a="Pakistani";
document.write("String: "+a+"<br>");
var n= a.indexOf("n");
document.write("Index of 'n' : " +n+"<br>");
// ques # 04
var b="Hello World";
document.write("String: "+b+"<br>");
var f=b.lastIndexOf("l");
document.write("Last index of 'l': "+f+"<br>");
// ques # 05
var a="Pakistani";
document.write("String: "+a+"<br>");
var n=a.charAt(3);
document.write("Character at index 3: "+n+"<br>");
// ques # 06
var firstName=prompt("Enter First name ");
var lastName=prompt("Enter Last name ");
var fullName=firstName.concat(lastName);
document.write("hello " +fullName+"<br>");
// ques # 07
var city = "Hyderabad";
document.write("City: " + city+"<br>");
for (var i = 0; i < city.length; i++) {
    if (city.slice(i, i + 5) === "Hyder") {
        city = city.slice(0, i) + "Islam" + city.slice(i + 5);
    }
}
document.write("After replacement: " + city + "<br>");
// ques # 08
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br>");
var replac=message.replace(/and/g,"&");
document.write(replac+"<br>");
// ques # 09
 var integerString = "472"
 document.write("Value:"+integerString+"<br>");
document.write("Type: "+typeof integerString+"<br>");
 var num = Number(integerString);
 document.write("Value: "+num+"<br>");
 document.write("Type: "+typeof num+"<br>");

// ques # 10
var user=prompt("write any word");
document.write("User input: "+user+"<br>");
var capituser=user.toUpperCase();
document.write("Upper case: "+capituser+"<br>")

// ques # 11
var user=prompt("write any word");
document.write("User input: "+user+"<br>");
var firstchar = user.slice(0,1);
firstchar = firstchar.toUpperCase();
var otherchar = user.slice(1);
otherchar = otherchar.toLowerCase();
var fullName=firstchar.concat(otherchar);
document.write("Title case: "+fullName+"<br>");

// ques # 12
 var num="3.142";
 document.write("Number: "+num+"<br>");
  var num = num.toString();
 var start = num.slice(0,1);
 var end = num.slice(2,5);
 var fullNum=start.concat(end);
 document.write("Result: "+fullNum+"<br>");

// ques # 13
var userName = prompt("Enter your name");
if(userName.match(/@/gi) || userName.match(/,/gi) || userName.match(/!/gi) || userName.match(/./gi) ){
    alert("Please enter a valid username.");
}
else{
    alert("User name is: "+userName);
}

// ques # 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome to ABC Bakery, What do you want to order sir/,ma'am?");
search = search.toLowerCase();
var bakeryItems= arr.indexOf(search);
if(arr.indexOf(search) != -1){
    document.write(search + " is available at index "+bakeryItems+" in our bakery"+"<br>");
}
else{
    document.write(search + " is not available  in our bakery"+"<br>")
}

// ques # 15

var userpassWord = prompt("Enter your password");
function checkPassWord(pass) 
    {
        var a = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var ans = a.test(pass);
        if (ans === true) {
            alert("It is a valid password");
        }
        else {
            alert("Please enter a valid password");
        }
    }
    checkPassWord(userpassWord);



// ques # 16

var university = "University of Karachi";
var ar = university.split(''); 
for(var f=0;f<ar.length;f++){
document.write(ar[f]+"<br>");
}

// ques # 17
var user=prompt("Enter your country name.");
document.write("User input: "+user+"<br>");
var lastCharOfuser=user.slice(-1);
document.write("Last character of input: "+lastCharOfuser+"<br>");


// ques # 18
function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="The quick brown fox jumps over the lazy dog"; 
 document.write("Text: "+text+"<br>");
 text=text.toLowerCase();
 var count=countOccurences(text,"the");
 document.write("There are "+count+" occurence(s) of the word 'the'"+"<br>");

