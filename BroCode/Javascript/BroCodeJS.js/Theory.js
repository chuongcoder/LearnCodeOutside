
// VAR 
// let fullname = "Minh Chuong";
// let age = 19;
// let isStudent = true;
// document.getElementById("p1").textContent = `Your full name is ${fullname} ` ;
// document.getElementById("p2").textContent = `Your are ${age} years old ` ;
// document.getElementById("p3").textContent = isStudent;

// OPERATOR 
// let students = 20;
// ** , - , + , * , /,%  


// HOW TO ACCEPT USER INPUT 
// let username;
// username = window.prompt("What's your name ?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username} `;
// 

// <h1 id="myH1">Welcome</h1>
// <label for="">UserName: </label>
// <input id="myInput"> <br> <br>
// <button id="mySubmit">submit</button>
//  <script src="Theory.js" >
//  </script>

// TYPE CONVERSION : chuyen doi data 
// let x = "0";
// x = Number(x); // String, Boolean
// const PI = 3.14;
// let radius;
// let circumference;


// document.getElementById("mySubmit").onclick = function() {
//    radius = document.getElementById("myInput").value;
//    radius = Number(radius);
//    circumference = 2 * PI * radius;
//    document.getElementById("myH1").textContent = circumference + "cm";
// }

// <h1 id="myH1">Welcome</h1>
// <label for="">UserName: </label>
// <input id="myInput"> <br> <br>
// <button id="mySubmit">submit</button>
//  <script src="Theory.js" >
//  </script

// COUNTER PROGRAM 

// const decrease = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increase = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increase.onclick = function() {
//     count ++ ;
//     countLabel.textContent = count;
// }

// decrease.onclick = function() {
//     count -- ;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function() {
//     count = 0 ;
//     countLabel.textContent = count;
// }

// html
/* <label id="countLabel">0</label>
    <div id="btnContainer">
        <button class="buttons" id="decreaseBtn">decrease</button>
        <button class="buttons" id="resetBtn">reset</button>
        <button class="buttons" id="increaseBtn">increase</button>
    </div> */


// MATH OBJECT 
// MATH.floor/ceil/round/trunc/Pow(a,b)/sqrt/log/sin/cos/tan/abs/sign(1:Duong , -1:Am , 0)/max (a,b,c) /min (a,b,c)

//RANDOM NUMBER GENERATOR 
// Math.random() (0->1:real)
// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");

// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;
// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random()*max) + min;
//     randomNum2 = Math.floor(Math.random()*max) + min;
//     randomNum3 = Math.floor(Math.random()*max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// // }


//IF STATEMENTS 
// syntax: if(condition) {code}
// Ex:
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function() {

//     // string 
//     age = myText.value;
//     // string to num 
//     age = Number(age);
    
//     if (age > 25) {
//         resultElement.textContent = 'You are old';
//     }
//     else {
//         resultElement.textContent = 'You are not old';
//     }
// }

