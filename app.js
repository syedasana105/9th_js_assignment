document.write("<hr>");
// CHAPTER 43-48
//   QUESTION # 03
function deleteRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//   QUESTION # 04

function newImage(){
document.getElementById("image").src="images/10.jpg";
}
function oldImage(){
document.getElementById("image").src="images/9.jpg";
}
//   QUESTION # 05
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;

}
document.write("<hr>");

// CHAPTER 49-52
// QUESTION # 01

function showMessage(){
    var message = document.getElementById("message").value;
    display_mail.innerHTML= message;
    var name = document.getElementById("name").value;
    display_name.innerHTML = name;
}

// QUESTION # 02

 function seemore() {
     var listToPlace = "<ul><li>Released 2019, March</li><li>165g, 7.7mm thickness</li><li>32GB/64GB storage</li><li>16MP 1080p</li><li>3/4GB RAM</li><li>4000 mAh batter</li></ul>";
     document.getElementById("samsungdetails").innerHTML = listToPlace;
     var things="<ul><li>Released 2019, December</li> <li> Android 9.0, Funtouch 9.2</li> <li>128GB/256GB storage</li> <li>6.44 1080x2400 pixels</li><li>48MP 2160p</li><li>8GB RAM</li><li>4500mAh Battery </li></ul>";
    document.getElementById("vivodetails").innerHTML = things;
    }
    // QUESTION # 03
    // get selected row
            // display selected row data in text input
            
            var table = document.getElementById("table"),rIndex;           
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    console.log(rIndex);                   
                    document.getElementById("indexx").value = this.cells[0].innerHTML;
                    document.getElementById("namee").value = this.cells[1].innerHTML;
                    document.getElementById("classs").value = this.cells[2].innerHTML;
                };
            }   
            function deleteRow() {
                // event.target will be the input element.
                var td = event.target.parentNode; 
                var tr = td.parentNode; // the row to be removed
                tr.parentNode.removeChild(tr);
            }                 
           // edit the row
          
            function editRow()
            {
                table.rows[rIndex].cells[0].innerHTML = document.getElementById("indexx").value;
                table.rows[rIndex].cells[1].innerHTML = document.getElementById("namee").value;
                table.rows[rIndex].cells[2].innerHTML = document.getElementById("classs").value;
            }
        document.write("<hr>");

        // CHAPTER 52-57

        document.write("<hr>");
// CHAPTER 52-57
document.write("<hr>");
// QUESTION 01
function showImage(a){
var modalImage=document.getElementById('modalImage');
modalImage.src=a.src
}

// QUESTION 02
var fontSize = 1;
function zoomIn() {
	fontSize += 0.1;
	document.body.style.fontSize = fontSize + "em";
}
function zoomOut() {
	fontSize -= 0.1;
	document.body.style.fontSize = fontSize + "em";
}
document.write("<hr>");

// CHAPTER 58-67
document.write("<hr>");

// QUESTION 01
// Q: i
document.write("<hr>");
var main=document.getElementById('main-content')
 // Q: ii
var render=console.log(main.childNodes)
// Q: iii
var show=main.getElementsByTagName('p')
var content =console.log(show[0].innerHTML)
document.write(show[0].innerHTML+"<br>")
document.write(show[1].innerHTML+"<br>")
document.write(show[2].innerHTML+"<br>")
document.write(show[3].innerHTML+"<br>")
document.write(show[4].innerHTML+"<br>")
// Q: iv
var firstname=document.getElementById('first-name').value ="sana"
// Q: v
var lastname = document.getElementById('last-name').value ="Akbar"
// QUESTION 02
// Q: i
var type=document.getElementById('form-content').nodeType;
document.write(type+"<br>");
// Q: ii
var lasttype = document.getElementById('lastName').nodeType
document.write(lasttype+"<br>")
var lasttype = document.getElementById('lastName').childNodes[0].nodeType
document.write(lasttype+"<br>")
// Q: iii
var lasttype = document.getElementById('lastName').childNodes[0].value="update value"
document.write(lasttype+"<br>")
// Q: iv
var getfirst=document.getElementById('main-content').firstChild
document.write(getfirst+"<br>")
var getlast=document.getElementById('main-content').lastChild
document.write(getlast+"<br>")
// Q: v
var lname=document.getElementById('lastName')
var nsibling=lname.nextSibling
document.write(nsibling+"<br>")
var psibling=lname.previousSibling
document.write(psibling+"<br>")
// Q: vi
var mail=document.getElementById('email')
var mtype=mail.nodeType
document.write(mtype+"<br>")
var pnode=mail.parentNode
console.log(pnode+"<br>");
document.write("<hr>")