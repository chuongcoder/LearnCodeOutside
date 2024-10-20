// * MENU
// 0. TYPECAST(ép kiểu)
// 1. VARIABLE DECLARATIONS
// 2. ARITHMETIC(so hoc) OPERATORS
// 3. ACCEPT INPUT
// 4. TYPE CONVERSION
// 5. CONST
// 6. COUNTER PROGRAMMING (mini project)
// 7. MATH OBJECT
// 8. RANDOM NUMBER
// 9. IF STATEMENTS:
// 10. CHECKED PROPERTY
// 11. TERNARY OPERATOR (toan tu 3 ngoi)
// 12. SWITCHES
// 13. STRING METHODS
// 14. STRING SLICING
// 15. METHOD CHAINING
// 16. LOGICAL OPERATORS
// 17. STRICT EQUALITY
// 18. LOOPS
// 19. TRUTHY & FALSY
// 20. GAME GUESS (mini project)
// 21. FUNCTION
// 22. VARIABLES SCOPE
// 23. TEMPERATURE CONVERSION PROGRAM (mini project)
// 24. ARRAY
// 25. OBJECT
// 26. HTML DOM & DOM API

// 0. TYPE COERCION
// 0.1 ép kiểu sang string(cast to string) : string(), toString(), template literals
// Ex:
// String(123)
// (123).toString()
// `${123}`
// 123 + ""
// console.log(typeof(String(null))) // string
// console.log(String(undefined)) // undefined
// console.log(String(true)) // true
// console.log(String(false)) //false
// console.log(Symbol("Duy nhat")) //Symbol(Duy nhat)
// console.log(String(["red","blue"])) // red,blue
// console.log(String({ name: "Chuong" })) //[object Object]

// null.toString() // error
// undefined.toString() //error
// 123.toString() //error
// 123..toString() // "123"
// 123.4.toString() //"123.4"
// console.log(({}).toString()) //[object Object]

// 0.2 Cast to number: Number(), + , parseInt()/ parseFloat()
// Ex:
// console.log(Number("12")) // 12
// console.log(Number(true)) // 1
// console.log(Number(null)) // 0

// console.log(+"12") // 12

// // * Note: "", 0, -0, null, false, newDate(0) => cast to Number = 0
// console.log(Number("1abc")) // NaN
// console.log(Number(undefined)) // NaN

// // * cách hoạt động của parseInt()/ parseFloat():
// // - khi đầu vào là một chuỗi: khi tim thấy kí tự đầu tiên không phải số -> return / all not num -> return NaN
// // - khi đầu vào ko là một chuỗi: convert to string rồi thực hiện lại quá trình như trên
// // Ex:
// console.log(parseFloat("123.99"))  //123.99
// console.log(parseInt("123.99"))  //123
// console.log(parseFloat("123"))  //123
// console.log(parseInt("123"))  //123

// 0.3 Cast to Boolean : Boolean(), !!
// Ex:
// Boolean("hello") // true
// Boolean(1) // true
// Boolean(0) // true
// Boolean("") // false

// !!0 //false
// !!1 //true
// console.log(!![]) //true

// * Note : 6 value alway return false -> undefined, false, null, NaN, 0 ,"".

// * Quy tắc ép kiểu ngầm trong Javascript
// - nguyên tắc trả về true/false khi so sánh x == y :
//  + Nếu x, y cùng kiểu dữ liệu:
//    .Nếu cả hai là undefined hoặc null -> true
//     Ex:
// x = null
// y = undefined
// z = null
//  console.log(x == y) // true
//  console.log(x == z) // true
//   .Nếu là số:
//     + Nếu một trong 2 là NaN -> false
//     + Nếu cả 2 số giống hệt nhau -> true
//   .Nếu là chuỗi -> cùng kí tự + length -> true
//   . Nếu là boolean: return true nếu cả 2 cùng true/false
// + Nếu x là null và y là undefined hoặc ngược lại -> true
// + Nếu một trong 2 là số, và cái kia là chuỗi, chuyển đổi chuỗi thành số rồi so sánh
// + Nếu một trong hai là Boolean , chuyển đổi boolean thành số rồi so sánh
// + Nếu một trong 2 là đối tượng và cái kia là chuỗi hoặc số, chuyển đổi đối tượng thành nguyên thủy rồi so sánh
//  .Primitive(nguyên thủy): string, number, bigint, symbol, null, undefined
//  .Non-Primitive: Object
// + Nếu không thỏa mãn các th trên -> false

// * Ép kiểu ngầm với toán tử số học:
// .(+) : cộng || nối chuỗi
//   - xem xét giá trị bên trái và phải của toán tử
//   - chuyển đổi giá trị này sang kiểu nguyên thủy (toPrimitive)
//   - Nếu một trong hai giá trị sau khi chuyển đổi là chuỗi -> nối chuỗi
//   - Nếu không -> cộng
// Ex:
// [] + 10  // 10
// [] -> [].toString() (toPrimitive) -> '' -> '' + 10 -> 10
//  .(-) : chỉ thực hiện phép trừ, chuyển đổi cả hai giá trị sang số rồi trừ

// Ex: Kiểm tra data nhập từ prompt of user
// let numA = +prompt("Nhap so a: ")
// let numB = +prompt("Nhap so b: ")

// function isNum(value) {
//   return typeof value === 'number' && !isNaN(value);
// }

// if(isNum(numA) && isNum(numB)) {
//   console.log(`Sum: ${numA + numB}`);
// }
// else {
//   console.log('Unvalid')
// }

// Ex: create a function convert type
// function convertDataType(value, type) {
//   switch (type){
//     case "number": return Number(value) //+value;
//     case "string": return String(value) //`${value}`;
//     case "boolean": return Boolean(value) //!!value ;
//     default : return "Invalid type";
//   }
// }

// Ex: create calculate function
// function calculate(a, b, operator) {
//   numA = Number(a);
//   numB = Number(b);
//   if (isNaN(numA) || isNaN(numB)) return "Invalid input number"
//   switch (operator) {
//     case "add" : return numA + numB;
//     case "substract" : return numA - numB;
//     case "multiply" : return numA * numB;
//     case "divide" : return numA / numB;
//     default : return "Invalid Number"
//   }
// }

// console.log(calculate("2","4","add"))

// 1. VARIABLE DECLARATIONS
// - var: js old , not use recently.
// Scope: Function-scoped or globally-scoped.
// Hoisting: Hoisted to the top of their scope but initialized as undefined.
// Re-declaration: Can be re-declared and updated.
// Use Case: Older codebases, but generally avoided in modern JavaScript due to scoping issues.

// - let: exists in the nearest block of code
// Scope: Block-scoped (within {}).
// Hoisting: Hoisted but not initialized, resulting in a temporal dead zone until the declaration is encountered.
// Re-declaration: Cannot be re-declared in the same scope but can be updated.
// Use Case: Preferred for variables that will be reassigned.

// - const
// Scope: Block-scoped.
// Hoisting: Hoisted but not initialized, resulting in a temporal dead zone.
// Re-declaration: Cannot be re-declared or updated.
// Immutability: The variable itself cannot be reassigned, but the contents of objects or arrays can be modified.
// Use Case: Preferred for variables that should not be reassigned, especially for constants.

// Ex:
// Global scope
// var globalVar = "I'm global";

// function exampleFunction() {
//   // Function scope
//   var functionVar = "I'm local to the function";
//   if (true) {
//     // Block scope
//     let blockVar = "I'm local to the block";
//     const blockConst = "I'm also local to the block";
//   }
//   // console.log(blockVar); // Error: blockVar is not defined
//   // console.log(blockConst); // Error: blockConst is not defined
// }

// exampleFunction();
// // console.log(functionVar); // Error: functionVar is not defined

// Ex_BroCode:
// let fullName = "M Chuong";
// let age = 19;
// let isStudent = true;

// console.log("hello javascript")

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// 2. ARITHMETIC OPERATORS
// 2.1 Basic Arithmetic Operators
// Addition (+)
// Example: let sum = 5 + 3; // sum is 8

// Subtraction (-)
// Example: let difference = 5 - 3; // difference is 2

// Multiplication (*)
// Example: let product = 5 * 3; // product is 15

// Division (/)
// Example: let quotient = 6 / 3; // quotient is 2

// Modulus (%)
// Example: let remainder = 5 % 2; // remainder is 1

// Exponentiation (**)
// Example: let power = 2 ** 3; // power is 8
// 2.2 Increment and Decrement Operators
// Increment (++)
// Increases a variable by one.
// let a = 5;
// a++; // a is now 6, a++: 5
// ++a; // a, ++a = 6

// Unary Negation (-)
// Example:
// let a = 5;
// let b = -a; // b is -5

// Unary Plus (+)
// Example:
// let a = "5";
// let b = +a; // b is 5 (number)

// 3. ACCEPT INPUT
// Ex:
{
    /* 
    <h1 id="myH1"> </h1>
    <label for="">username: </label>
    <input type="text" id="myText">
    <button id="mySubmit">submit</button>

let username;
document.getElementById("mySubmit").onclick = function() {
  username = document.getelementById("myText").value;

  document.getElementById("myH1").textContent = `Hello ${username}`;
} */
}

// 4. TYPE CONVERSION : change the datatype of a value to another (strings, numbers, booleans,undefined,null,Symbol)
// Ex: let x = "pizza"

// x = Number/String/Boolean(x)

// console.log(x, typeof x);
// // NaN, number

// - NaN (not a number) : biểu thị phép toán không hợp lệ
// - Symbol: tạo ra đối tượng duy nhất không trùng nhau
// Ex:
// let id1 = Symbol('ID');
// let id2 = Symbol('ID');
// console.log( typeof id1 === typeof id2);
// Ex: return array
// function createUser(name, age) { return {name,age};}
// console.log(createUser("Chuong",19));

// - some situation return undefined : unassigned variable ,function does not return, access an object(key/value) that does not exist in object, acces index does not exist - array
// - difference between null & undefined:
//  + undefined represents an uninitialized or undefined state,
//  + null represents emptiness or nothingness
// - some situation use null:
//  + initialize variable for non-existing object
//  + when not found in the search query
//  + reset value of variable
//  + represents an optional parameter (para = null)

// - cách kiểm tra kiểu dữ liệu: isNumber / isArray

// + a = Number, Boolean, String, Symbol: typeof a === a
// + typeof Null == Null
// + check object type ? (typeof person === 'object' && person !== null && !Array.isArray(person)) // true (not array and null | isArray(array) === array instanceof Array )
// + typeof Null, Array, Object === object
// + typeof function == function

// Ex:
// function isNumber(num) {
//   return typeof num === 'number' && !isNaN(num);
// }

// function isString(input) {
//   return typeof input === 'string';
// }

// function isBigint(input) {
//   return typeof input === 'BigInt';
// }

// function isUndefined(input) {
//   return typeof input === 'undefined';
// }

// function isOject(input) {
//   return isArray(input) && typeof input === 'object' && input !== null;
// }

// function isFunction(input) {
//   return typeof input === 'function';
// }

// 5. CONST
// Ex:
{
    /* <h1 id="myH1"> Enter the radius of a circle</h1>
<label for="">radius:</label>
<input type="text" name="" id="myText">
<button id="mySubmit">submit</button>
<h3 id="myH3"></h3> */
}

// const PI = 3.14;
// // let radius = window.prompt("Input your radius of circle")
// document.getElementById("mySubmit").onclick = () => {
//   let radius = document.getElementById("myText").value;
//   let result = Number(radius) * 2 * PI;
//   document.getElementById("myH3").textContent = `${result} cm^2`;
// }

// 6. Counter program (mini project)
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Javascrip Theory</title>
//     <style>
//         #countLabel {
//             display: block;
//             text-align: center;
//             font-size: 10em;
//             font-family: Helvetica;
//         }
//         #btnContainer {
//             text-align: center;
//         }

//         .buttons {
//             padding: 10px 21px;
//             font-size: 1.5rem;
//             color: white;
//             background-color: rgb(72, 72, 129);
//             border-radius: 5px;
//             cursor: pointer;
//             transition: background-color 0.25ss;
//         }

//         .buttons:hover {
//             background: rgb(76, 76, 212);
//         }
//     </style>
// </head>

// <body>

//     <label id="countLabel" for="">0</label>
//    <div id="btnContainer">
//         <button id="decreaseBtn" class="buttons">decrease</button>
//         <button id="resetBtn" class="buttons">reset</button>
//         <button id="increaseBtn" class="buttons">increase</button>
//    </div>

//     <script>

//         const decreaseBtn = document.getElementById("decreaseBtn");
//         const resetBtn = document.getElementById("resetBtn");
//         const increaseBtn = document.getElementById("increaseBtn");
//         const countLabel = document.getElementById("countLabel")

//         let count = 0;
//         increaseBtn.onclick = () => {
//             count++;
//             countLabel.textContent = count;
//         }

//         decreaseBtn.onclick = () => {
//             count--;
//             countLabel.textContent = count;
//         }

//         resetBtn.onclick = () => {
//             count = 0;
//             countLabel.textContent = count;
//         }
//     </script>
// </body>

// </html>

// 7. MATH OBJECT
// x = Math.round/floor/ceil/trunc/pow(x,y)/sqrt/log/sin/cos/tan/abs/
// Ex:
// console.log(Math.trunc(4.9)); // 4

// -Math.sign(x) :
// 1 if the number is positive.
// -1 if the number is negative.
// 0 if the number is zero.
// -0 if the number is negative zero.
// NaN if the value is not a number.

// 8. Random number generator
// myBtn.onclick = () => {
//   randomNum = Math.floor(Math.random() * max) + min;
//   myLabel.textContent = randomNum;
//   // roll min -> max
// }

// 9.IF STATEMENTS:
// * define: if a condition is true, excute some code / if not, do something else
// syntax: if (condition) {} else {}

// * ==, != : non-strict comparison: does not compare data types
// * ===, !== :strict comparison: compare data types

// 10. CHECKED PROPERTY
{
    /* <label for="">subscribe</label>
<input type="checkbox" name="" id="input">
<button type="submit" id="sub">submit</button>

<h1 id="subresult"></h1>
<script>
    const input = document.getElementById("input");
    const submit = document.getElementById("sub");

    submit.onclick = () => {
        if(input.checked) {
            document.getElementById("subresult").textContent = `You are subscribed !`;
        }
        else {
            document.getElementById("subresult").textContent = `You are't subscribed !`;
        }
    }
</script> */
}

// 11. TERNARY OPERATOR:
// define:   a shortcut to if{} and else
// Ex:
// let age = 19;
// let message = age >= 18 ?  "You're an adult" : "You're a minor";

// 12. SWITCHES
// Ex:
// let day = 1;
// switch(day) {
//   case 1:
//    console.log("It is Monday");
//    break;
//   case 2:
//     //
//   default:
//      //
// }

// Ex: fallthrough (or)
// function identifyFruit(color) {
//   switch(color) {
//     case "red":
//     case"pink":
//        return apple;
//     case "yellow":
//         return "banana";
//   }
// }

// 13. STRING METHODS

// 13.-2 padEnd()/padStart()
// syntax: str.padEnd(targetLength, padString)
// targetLength: The length of the resulting string once the current string has been padded.
// padString (optional): The string to pad the current string with. If this string is too long to stay within the target length
// , it will be truncated. The default value is a space (" ").
// => đệm paddingString vào str cho đên độ dài length thì dừng. " " lâ padString default nếu không xét padString
// Ex:
// let str = "Hello";
// let paddedStr = str.padEnd(10);
// console.log(paddedStr); // "Hello     "
// Ex2:
// let str = "Hello";
// let paddedStr = str.padEnd(10, ".");
// console.log(paddedStr); // "Hello....."

// 13.-1. replaceAll()/replace()
// let str = "The rain in Spain stays mainly in the plain";
// let newStr = str.replace(/ain/g, "XYZ");
// console.log(newStr); // "The rXYZ in SpXYZ stXYZs mXYZly in the plXYZ"

// 13.0 trim(): remove space

// 13.1. charAt()
// Syntax: string.charAt(index)
// Description: Returns the character at the specified index.
// Ex:
// let str = "Hello";
// console.log(str.charAt(1)); //"e"

// 13.2. charCodeAt()
// Syntax: string.charCodeAt(index)
// Description: Returns the Unicode of the character at the specified index.
// Ex:
// let str = "Hello";
// console.log(str.charCodeAt(1)); // 101

// 13.3. concat()
// Syntax: string.concat(string2, string3, ..., stringN)
// Description: Joins two or more strings and returns a new string.
// Ex:
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2)); // "Hello World"

// 13.4. includes()
// Syntax: string.includes(searchString, position)
// Description: Checks if the string contains the specified substring
// Ex:
// let str = "Hello World";
// console.log(str.includes("World")); // true
// console.log(str.includes("world")); // false

// 13.5. endsWith()
// Syntax: string.endsWith(searchString, length)
// Description: Checks if the string ends with the specified substring
// Ex:
// let str = "Hello World";
// console.log(str.endsWith("World")); // true
// console.log(str.endsWith("Hello")); // false

// 13.6. indexOf()
// Syntax: string.indexOf(searchValue, fromIndex)
// Description: Returns the index of the first occurrence of the specified value, or -1 if not found.
// Ex:
// let str = "Hello World";
// console.log(str.indexOf("World")); // 6
// console.log(str.indexOf("world")); // -1

// 13.7. lastIndexOf()
// Syntax: string.lastIndexOf(searchValue, fromIndex)
// Description: Returns the index of the last occurrence of the specified value, or -1 if not found.
// Ex:
// let str = "Hello World World";
// console.log(str.lastIndexOf("World")); // 12

// 13.8. match() : regexp = regular expression (biểu thức chính quy)
// Syntax: string.match(regexp)
// Description: Searches for a match(trùng khớp) between the string and a regular expression, and returns the matches.
// Ex:
// let str = "The rain in Spain stays mainly in the plain";
// console.log(str.match(/ain/g)); // ["ain", "ain", "ain", "ain"]

// *Explain detail :
// /ain/: This is a regular expression literal. The part between the slashes (ain) is the pattern we are looking for.
//  In this case, we are looking for the exact substring "ain".
// g: This is a flag. The g stands for "global", meaning the regular expression should search for all occurrences of
// the pattern in the string, not just the first one.

// 13.9. repeat()
// Syntax: string.repeat(count)
// Description: Returns a new string with a specified number of copies of the original string
// Ex:
// let str = "Hello";
// console.log(str.repeat(3)); // "HelloHelloHello"

// 13.10. replace()
// Syntax: string.replace(searchValue, newValue)
// Description: Searches for a specified value and returns a new string where the specified values are replaced.
// Ex:
// let str = "Hello World";
// console.log(str.replace("World", "Universe")); // "Hello Universe"

// 13.11. slice()
// Syntax: string.slice(start, end)
// Description: Extracts(cắt/chiết xuất) a part of a string and returns a new string.
// Ex:
// let str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"

// 13.12. split()
// Syntax: string.split(separator, limit)
// Description: Splits(tách) a string into an array of substrings.
// Ex:
// let str = "Hello World";
// console.log(str.split(" ")); // ["Hello", "World"]

// 13.13. startsWith()
// Syntax: string.startsWith(searchString, position)
// Description: Checks if the string starts with the specified substring
// Ex:
// let str = "Hello World";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("World")); // false

// 13.14. substr()
// Syntax: string.substr(start, length)
// Description: Extracts a part of a string, starting at a specified position and returning a specified number of characters.
// Ex:
// let str = "Hello World";
// console.log(str.substr(6, 5)); // "World"

// 13.15. substring()
// Syntax: string.substring(start, end)
// Description: Extracts(chiết xuất) the characters from a string, between two specified indices(chỉ số).
// Ex:
// let str = "Hello World";
// console.log(str.substring(0, 5)); // "Hello"

// 13.16. toLowerCase()
// Syntax: string.toLowerCase()
// Description: Converts the string to lowercase letters
// Ex:
// let str = "Hello World";
// console.log(str.toLowerCase()); // "hello world"

// 13.17. toUpperCase()
// Syntax: string.toUpperCase()
// Description: Converts the string to uppercase letters.
// Ex:
// let str = "Hello World";
// console.log(str.toUpperCase()); // "HELLO WORLD"

// 13.18. trim()
// Syntax: string.trim()
// Description: Removes whitespace from both ends of a string.
// Ex:
// let str = "  Hello World  ";
// console.log(str.trim()); // "Hello World"

// 14.STRING SLICING
// 14.1. slice()
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// - Syntax:
// string.slice(startIndex, endIndex)
// startIndex: The index at which to begin extraction. If negative, it indicates an offset from the end of the string.
// endIndex (optional): The index before which to end extraction. If omitted, extraction continues to the end of the string.
// If negative, it indicates an offset from the end of the string.
// Ex:
// let str = "The quick brown fox jumps over the lazy dog";
// console.log(str.slice(4, 9));    // "quick"
// console.log(str.slice(-8));      // "lazy dog"
// console.log(str.slice(10));      // "brown fox jumps over the lazy dog"
// console.log(str.slice(10, -4));  // "brown fox jumps over the lazy"

// 14.2. substring() (substring does not accept negative indexes. If a negative or NaN is given as an argument, it is treated as 0.)
// The substring() method returns a part of the string between the start and end indexes, or to the end of the string.
// - Syntax:
// string.substring(startIndex, endIndex)
// startIndex: The index at which to begin extraction.
// endIndex (optional): The index before which to end extraction. If omitted, extraction continues to the end of the string.
// Ex:
// let str = "The quick brown fox jumps over the lazy dog";
// console.log(str.substring(4, 9));  // "quick"
// console.log(str.substring(10));    // "brown fox jumps over the lazy dog"
// console.log(str.substring(10, 19)); // "brown fox"

// 14.3. substr()
// The substr() method returns a part of the string, starting at the specified index and extending for a given number of characters.
// - Syntax: string.substr(startIndex, length)
// startIndex: The index at which to begin extraction. If negative, it indicates an offset from the end of the string.
// length (optional): The number of characters to extract
// Ex:
// let str = "The quick brown fox jumps over the lazy dog";
// console.log(str.substr(4, 5));  // "quick"
// console.log(str.substr(10));    // "brown fox jumps over the lazy dog"
// console.log(str.substr(-8));    // "lazy dog"
// console.log(str.substr(10, 5)); // "brown"

// 15. METHOD CHAINING
// * define: Method chaining in JavaScript is a technique where multiple methods are called on the same object consecutively. Each method call performs an operation
//  on the object and returns the object itself, allowing the next method to be called directly.

// Ex: let username = " chUonG   ";
// username = username.trim().charAt(0).toUpperCase() + username.trim().toLowerCase(); Chuong

// Ex:
// let str = "   Learning JavaScript is fun and rewarding.(bổ ích)   ";

// let result = str.trim()
//                 .toUpperCase()
//                 .replace("FUN", "EXCITING")
//                 .split(" ") // tach chuoi theo " "
//                 .join("_"); // noi chuoi

// console.log(result); // "LEARNING_JAVASCRIPT_IS_EXCITING_AND_REWARDING."

// 16. LOGICAL OPERATORS : && , || , !, ==, != ,===, ==!
// - How the operator works and ?
// => and operator return false firt, else return final value
// - false && true // false
// - 0 && 1 //0
// - " " && null //" "
// - 5 && NaN && 6 // NaN

// if not false value -> return final value
// - 5 && 8 // 8
// - ["Red", "Blue"] && { name: "John"} && "Hello" // "Hello"
// - true && 1 && "Hello" && ["Red", "Green"] // ["Red", "Green"]
// Ex:
// let obj = { key: "value"}
// if( obj && typeof obj === "object") {
//   console.log("isObject")
// }
// else {
//   console.log("isNotObject")
// }

// - How the operator works or ?
// => or return true value first
// Ex:
// let userName = "Chuong M"
// let displayName = userName || null //Chuong M

// Ex: !! input == Boolean(input)
// function isObject(input) {
//   return !!input && typeof input === "object"
// }

// Ex:
// function showMessage(message) {
//   message && console.log(message);
// }

// showMessage("");
// showMessage("Hello world");

// * Nullish coalescing operator
// var = left-value ?? right-value : return left-value if right-value != null or undefined / default return right-value if left is nul or undefined
// Nullish coalescing is an operator in JavaScript (??) that returns the right-hand operand
// when the left-hand operand is null or undefined. If the left-hand operand is any other
// value (including 0, false, or an empty string), it returns the left-hand operand instead.
// let result = a ?? b;
// a: The value to check.
// b: The fallback value if a is null or undefined.(default return)
// Ex:
// let nameUser = "null"
// let defaultValue = "guest"

// let nameDisplay = nameUser ?? defaultValue
// console.log(nameDisplay) //guest
// Ex:
// let nameUser = "Chuong"
// let defaultValue = "guest"

// let nameDisplay = nameUser ?? defaultValue
// console.log(nameDisplay) //chuong

// Ex: if use or -> value array = 0 ( false => or bo qua value nay)
// function getElement(array, index, defaultValue) {
//  return array[index] ?? defaultValue;
// }

// const numbers = [2, 4, 6];

// console.log(getElement(numbers, 0, "Empty")); //2
// console.log(getElement(numbers, 1, "Empty")); //4
// console.log(getElement(numbers, 2, "Empty")); //6

// Ex: create validateAge
// function validateAge(age) {
//   if (age === null || age === undefined)
//     return "Age is null or undefined";
//   return !isNaN(age) && typeof age == "number" && age >= 0;
// }

// use Nullish coalescing operator
// function validateAge(age) {
//   const errorMessage = "Error: Age is null or undefined";
//   const validAge = age ?? errorMessage;
//   if (validAge === errorMessage) return errorMessage;
//   return !isNaN(age) && typeof age === 'number' && age >= 0;
// }
// console.log(validateAge(20))
// console.log(validateAge(null))
// console.log(validateAge(-20))

// c2
// function validAge(age) {
//   return  (age!==null || age!==undefined) ? (!isNaN(age) && typeof age === 'number' && age>=0) :
//   "Error"
// }

// Ex:
// function formatName(firstName, lastName) {
//   firstName = firstName ?? "";
//   lastName = lastName ?? "";
//   return `${firstName}  ${lastName}`
// }

// console.log(formatName("Minh","Chuong")); // Minh Chuong
// console.log(formatName(null,"Chuong")); //Chuong
// console.log(formatName("Minh")); //Minh
// console.log(formatName()); //

// 17. STRICT EQUALITY
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if value & datatype are equal)
// != inequality operator
// !== strict inequality operator

// Ex:
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt("Enter your username"); // Assignment
//   password = window.prompt("Enter your password"); // Assignment

//   if (username === "myUsername" && password === "myPassword") {
//     loggedIn = true;
//     console.log("You are logged in!");
//   } else {
//     console.log("Invalid credentials! Please try again");
//   }
// }

// 18. LOOPS
// /for (initialization; condition; increment) {
//   // Code to be executed in each iteration
// }
// Ex:
// for (let i = 0; i < 5; i++) {
//   console.log("Iteration number " + i);
// }

// 1.for...in Loop (object)
// for (key in object) {
//   // Code to execute repeatedly
// }

// Ex:
// const person = {fname: "John", lname: "Doe", age: 25};

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// 2.for...of Loop (array,string,..)
// for (variable of iterable) {
//   // Code to execute repeatedly
// }

// Ex:
// const array = ["apple", "banana", "cherry"];

// for (let fruit of array) {
//     console.log(fruit);
// }

// 3.break and continue Statements
// Ex:
// for (let i=0; i<10; i++) {
//   if(i == 3) {
//     continue;
//   }
//   if(i == 7) {
//     break;
//   }
//   console.log(i);
// }

// 4. whlie/do
// while (condition) {
//   // Code to be executed as long as the condition is true
// }

// do {
//   // Code to execute repeatedly
// } while (condition);

// Ex:
// function reverseString(s) {
//   let newS = ""
//   for (let i=s.length-1;i>=0;i--) {
//     newS += s[i]
//   }
//   return newS;
// }

// console.log(reverseString("gnouhc"))

// Ex:
// function findMax(a) {
//   let maxNum=0;
//   for (let x=0; x<a.length;x++) {
//     if(a[x]>maxNum) maxNum = a[x];
//   }
//   return maxNum;
// }
// console.log(findMax([1,3,2,4]))

// Ex
// function sumOddNumbers(a) {
//   let sumOddNumbers = 0
//   for (let i=0; i<a.length;i++) {
//     if(a[i]%2==1) sumOddNumbers += a[i];
//   }
//   return sumOddNumbers;
// }

// console.log(sumOddNumbers([1,3,2,4]))

// Ex:
// function isAscending(a) {
//   if (a.length <= 1) return false;
//   for (let i=0;i<a.length-1;i++) {
//     if (a[i+1]<=a[i]) return false;
//   }
//   return true;
// }

// console.log(isAscending([1,2,3,4]));
// console.log(isAscending([1,3,2,4]));
// console.log(isAscending([1,3,3,5]));
// console.log(isAscending([]));
// console.log(isAscending([3]));

// Ex: check Prime
// function isPrime(n) {
//   for (let i=2; i<=Math.sqrt(n);i++) {
//     if (n%i==0) return false;
//   }
//   return n>1;
// }

// Ex:
// function arrayToHTMLList(a) {
//   let result = "";
//   for (let i=0;i<a.length;i++) {
//     result += `<li> ${a[i]} </li>`;
//   }
//   return `<ul> ${result} </ul>`;
// }
// console.log(arrayToHTMLList(["JS","C++","PHP"]))

// Ex: Euclid
// function gcd(a,b) {
//   if (!b) return a;
//   return gcd(b,a%b);
// }

// console.log(gcd(9,27))

// Ex: print multiplication table
// function printMultiolicationTable() {
//   for (let n=1; n<=10; n++) {
//     console.log(`Multiplication ${n} Table: `)
//     for (let i=1;i<=10;i++) {
//       console.log(`${i} x ${n} = ${i*n}`)
//     }
//     console.log("_________________________________________")
//   }
// }
// printMultiolicationTable()

// 19. TRUTHY & FALSY
// true : Truthy / false: Falsy
// - Cac gia try falsy trong js:
//  + false: Day la gia tri Boolean false ro Range
//  + 0: so khong, bao gom -0 (so khong am) va 0n (so 0 kieu bigint)
//  + " ": empty string
//  + null: represent a value "Khong co gi" or "trong rong"
//  + undefined: var is not define or function not return value

// // Ex: create a truthy function
// function isTruthy(value) {
//   return !!value;
//   // return Boolean(value)
// }

// console.log(isTruthy(false)) // false

// 20. GAME GUESS
// Ex:
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attemps = 0;
// let guess;
// let running = true;

// while(running) {

//   guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
//   if(isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   }
//   else if ( guess < minNum || guess > maxNum) {
//     window.alert("Please a valid number");
//   }
//   else {
//     attemps++;
//     if( guess < answer ) {
//       window.alert("TOO LOW");
//     }
//     else if ( guess > answer ) {
//       window.alert("TOO HIGHT");
//     }
//     else {
//       window.alert("CORRECT!");
//     }
//   }
// }

// 21. FUNCTION
// 21.0: Interpolate Function (Ham noi suy):
// Ex:
// function createLink(url, displayName) {
//   return `<a href="${url}">${displayName}</a>`;
// }
// 21.1. Function Declaration(hàm khai báo) :A function declaration defines a named function
//  that can be invoked anywhere in the code after its declaration due to hoisting.
//  => được gọi lại bất kì đâu trong code vì được hoisting(đưa hàm lên đầu) sau khai báo
// Ex:
// function functionName(paramaters = "default arguments") {
//   // body fun
//   return result;
// }

// function great(Name) {
//   return `Hello ${Name}!`;
// }
// console.log (great("Chuong"));

// 21.2. Function Expression(hàm biểu thức):A function expression defines a function inside an expression.
//  These functions can be named or anonymous and are not hoisted.
// Ex:
// const functionName = function(parameters) {
//   // Function body
//   return result;
// };

// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Bob")); // Output: Hello, Bob!

// 21.3. Arrow Function
// Arrow functions provide a concise(ngắn gọn) syntax for writing functions.
// They do not have their own this context, making them suitable for non-method functions.
// Ex:
// const functionName = (parameters) => {
//   // Function body
//   return result;
// };

// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Charlie")); // Output: Hello, Charlie!

// 21.4. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined. It is often used to create
// a local scope to avoid polluting the global scope.
// Ex:
// (function() {
//   // Function body
//   console.log("This is an IIFE");
// })();

// (function(name) {
//   console.log(`Hello, ${name}!`);
// })("Dana");

// 21.5. Constructor Function
// Constructor functions are used to create objects. They are invoked(gọi) using
//  the new keyword and are typically named with a capital letter.
// Ex:
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Eve", 30);
// console.log(person1.name); // Output: Eve
// console.log(person1.age);  // Output: 30

// 21.6. Generator Function
// Generator functions are used to create iterators and are
//  defined using the function* syntax. They can pause execution with yield and resume later.
// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = generatorFunction();
// console.log(generator.next().value); // Output: 1
// console.log(generator.next().value); // Output: 2
// console.log(generator.next().value); // Output: 3

// 21.7. Async Function
// Async functions allow writing asynchronous code using async and await keywords, making it easier to work with promises.
// Ex:
// async function fetchData() {
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   return data;
// }

// fetchData().then(data => console.log(data));
// *Explain:
// async Keyword
// The async keyword is used to declare an asynchronous function.
// It allows the use of await within the function.
// An async function always returns a promise.
// await Keyword
// The await keyword is used to pause the execution of the async function until the promise is resolved.
// fetch is a built-in function that starts the process of fetching a resource (e.g., a network request to an API endpoint).
// It returns a promise that resolves to the Response object representing the response to the request.
// await pauses the execution of fetchData until the promise returned by fetch resolves.
// It can only be used inside an async function.
// The response object has a method .json() that also returns a promise.
// This promise resolves to the result of parsing the response body text as JSON.
// await pauses the execution until the promise resolves, and the parsed JSON data is assigned to the data variable.
// The function returns the parsed JSON data.
// Since fetchData is an async function, it returns a promise that resolves to the data

// This calls the fetchData function, which returns a promise. (fetchData())
// The .then() method is used to handle the resolved value of the promise returned by fetchData.
// The function passed to .then() takes the resolved value (data) and logs it to the console.

// 22. VARIABLES SCOPE
// let x = 3; // global

// function fun() {
//   let y = 1; // scope
// }

// * Summary
// - Zone type : global/ function/ block/ module scope
//  + global scope: var/let/const/function khong khai bao nam trong bat ki pham vi nao khac
//  + function scope: ... khai bao ben trong ham function() {}
//  + block scope: ... khai bao nam trong block {}
//  + module scope: ... khai bao ben trong module (file)
// Ex:
// export function hello() {
//
// }

// import { hello() } from File.js

// - let, const : co pham vi khoi (chi truy cap dc ben trong khoi : block scope)
// - var, function: co pham vi ham (function scope)

// - Mỗi hàm sẽ tạo phạm vi mới
// - biến trong phạm vi nhỏ sẽ truy cập được biến ở phạm vi lớn hơn

// 23. TEMPERATURE CONVERSION PROGRAM
// * EMOJi: window + ;
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: hsl(0, 0%, 95%);
//         }

//         h1 {
//             color: hsl(223, 100%, 64%);
//         }

//         form {
//             background-color: #fff;
//             text-align: center;
//             max-width: 350px;
//             margin: auto;
//             border-radius: 10px;
//             box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.383);
//         }

//         #textBox {
//             width: 50%;
//             text-align: center;
//             font-size: 2em;
//             border: 2px solid rgba(0, 0, 0, 0.335);
//             border-radius: 4px;
//             margin-bottom: 15px;
//         }

//         label {
//             font-size: 1.5em;
//             font-weight: bold;
//         }

//         button {
//             margin-top: 15px;
//             background-color: #622525;
//             color: #fff;
//             font-size: 1.5rem;
//             padding: 10px 15px;
//             border-radius: 5px;
//             cursor: pointer;
//         }

//         button:hover {
//             background-color: red;
//         }

//         #result {
//             font-size: 1.75em;
//             font-weight: bold;
//         }
//     </style>
// </head>

// <body>
//     <form action="" onsubmit="convert(event)">
//         <h1>Temperature Conversion</h1>
//         <input type="number" id="textBox" value="0"> <br>

//         <input type="radio" name="unit" id="toFahrenheit">
//         <label for="toFahrenheit">Celsius ➡️ Fahrenheit</label><br>

//         <input type="radio" name="unit" id="toCelsius">
//         <label for="toCelsius">Fahrenheit ➡️ Celsius</label><br>

//         <button type="submit">Submit</button>
//         <p id="result">Select a unit</p>
//     </form>

//     <script>
//         const textBox = document.querySelector("#textBox");
//         const toFahrenheit = document.querySelector("#toFahrenheit");
//         const toCelsius = document.querySelector("#toCelsius");
//         const result = document.querySelector("#result");

//         function convert(event) {
//             event.preventDefault(); // Prevents the form from submitting and reloading the page

//             let temp = Number(textBox.value);

//             if (toFahrenheit.checked) {
//                 temp = temp * 9 / 5 + 32;
//                 result.textContent = temp.toFixed(1) + "°F";
//             } else if (toCelsius.checked) {
//                 temp = (temp - 32) * 5 / 9;
//                 result.textContent = temp.toFixed(1) + "°C";
//             } else {
//                 result.textContent = "Select a unit";
//             }
//         }
//     </script>
// </body>

// </html>

// 24. ARRAY
//- 24.I Basic Methods
// 24.1 push(...items): Adds one or more elements to the end of an array.
// 24.2 pop(): Removes the last element from an array and returns it.
// 24.3 shift(): Removes the first element from an array and returns it.
// 24.4 unshift(...items): Adds one or more elements to the beginning of an array.

// Ex:
// let arr = [1, 2, 3];

// push
// arr.push(4); // [1, 2, 3, 4]

// // pop
// arr.pop(); // [1, 2]

// // shift
// arr.shift(); // [2, 3]

// // unshift
// arr.unshift(1); // [1, 1, 2, 3]

//- 24.II Iteration(lặp lại) Methods
// - Callback(element, index, array)
// 24.5 forEach(callback): Executes a provided function once for each array element.
// 24.6 map(callback): Creates a new array with the results of calling a provided function on every element.
// => mảng mói được tạo từ đk funtion áp dụng trên mỗi phần tử
// 24.7 filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
// => mảng mới đc tạo sau khi vượt qua đk function trên mỗi phần tử
// 24.8 find(callback): Returns the first element that satisfies the provided testing function.
// => trả về phân tử đầu tiên thỏa mãn đk function
// 24.9 some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.
// => check có it nhất một phần tử vượt qua đk cua funtion không ?
// 24.10 every(callback): Tests whether all elements in the array pass the test implemented by the provided function.
// => check all phần tử vượt qua đk cua funtion không ?
// 24.11 reduce(callback, [initialValue]): Applies a function against an accumulator and each element to reduce it to a single value.
// 24.12 reduceRight(callback, [initialValue]): Same as reduce, but starts from the end of the array.
// 24.13 flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 24.14 flatMap(callback): First maps each element using a mapping function, then flattens the result into a new array
// Ex:
// let nums = [1, 2, 3, 4, 5];

// // forEach
// nums.forEach(num => console.log(num)); // 1 2 3 4 5

// // map
// let doubled = nums.map(num => num * 2); // [2, 4, 6, 8, 10]

// // filter
// let evens = nums.filter(num => num % 2 === 0); // [2, 4]

// // find
// let firstEven = nums.find(num => num % 2 === 0); // 2

// // some
// let hasNegative = nums.some(num => num < 0); // false

// // every
// let allPositive = nums.every(num => num > 0); // true

// reduce*
// syntax: reduce (callback,initial_value)
// - callback(accumulator, currentValue, currentIndex, array)
// accumulator: The accumulated value returned from the previous iteration(lặp lại). On the first iteration,
// it is the initialValue if provided; otherwise, it's the first element of the array(default).
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the currentValue in the array.
// array (optional): The array on which reduce was called.
// Ex1: not init
// let sum = nums.reduce(function (accumulator, currentValue, currentIndex, array) {
//   console.table(`Index: ${currentIndex}, currentValue: ${currentValue}, Accumulator: ${accumulator}, Array: ${array}`);
//   return accumulator + currentValue;
// });
// console.log(sum);

// Index: 1, currentValue: 2, Accumulator: 1, Array: 1,2,3,4,5
// Index: 2, currentValue: 3, Accumulator: 3, Array: 1,2,3,4,5
// Index: 3, currentValue: 4, Accumulator: 6, Array: 1,2,3,4,5
// Index: 4, currentValue: 5, Accumulator: 10, Array: 1,2,3,4,5
// 15

// biến khởi tạo quyết định kiểu dữ liệu nhận được
// Ex2: has init
// let sum = nums.reduce(function (accumulator, currentValue, currentIndex, array) {
//   console.table(`Index: ${currentIndex}, currentValue: ${currentValue}, Accumulator: ${accumulator}, Array: ${array}`);
//   return accumulator + currentValue;
// },0);
// console.log(sum);

// Index: 0, currentValue: 1, Accumulator: 0, Array: 1,2,3,4,5
// Index: 1, currentValue: 2, Accumulator: 1, Array: 1,2,3,4,5
// Index: 2, currentValue: 3, Accumulator: 3, Array: 1,2,3,4,5
// Index: 3, currentValue: 4, Accumulator: 6, Array: 1,2,3,4,5
// Index: 4, currentValue: 5, Accumulator: 10, Array: 1,2,3,4,5
// 15

// Ex3: merge array
// var depthArray = [1, 2, [3,4], 5, 6];

// var flatArray = depthArray.reduce(function(flatOut,depthItem) {
//   return flatOut.concat(depthItem);
// },[]);
// console.log(flatArray);
// // [ 1, 2, 3, 4, 5, 6 ]

// Ex4:

// var course = [
//   {
//     "name": "FE",
//     "course": [
//       {
//         id: 1,

//         title: "HTML, CSS"
//       },
//       {
//         id: 2,

//         title: "Js"
//       }
//     ]
//   },

//   {
//     "name": "BE",
//     "course": [
//       {
//         id: 1,

//         title: "NodeJS, SQL"
//       },
//       {
//         id: 2,

//         title: "PY"
//       }
//     ]
//   }
// ]

// var Courses = course.reduce(function(courses,topics) {
//   return courses.concat(topics.course);
// },[])

// console.log(Courses);

// [
//   { id: 1, title: 'HTML, CSS' },
//   { id: 2, title: 'Js' },
//   { id: 1, title: 'NodeJS, SQL' },
//   { id: 2, title: 'PY' }
// ]

// Ex5: Render Course of Ex4 to html code
// var course = [
//   {
//     "name": "FE",
//     "course": [
//       {
//         id: 1,

//         title: "HTML, CSS"
//       },
//       {
//         id: 2,

//         title: "Js"
//       }
//     ]
//   },

//   {
//     "name": "BE",
//     "course": [
//       {
//         id: 1,

//         title: "NodeJS, SQL"
//       },
//       {
//         id: 2,

//         title: "PY"
//       }
//     ]
//   }
// ]

// var Courses = course.reduce(function(courses,topics) {
//   return courses.concat(topics.course);
// },[])

// var htmls = Courses.map(function(course) {
//   return `
//   <div>
//     <h2>${course.title}</h2>
//     <p> ID: ${course.id}</p>
//     </div>
// `;
// });

// console.log(htmls.join(''));

// let sum = nums.reduce((total, num) => total + num, 0); // 15

// // flat
// let nested = [1, [2, [3, 4]]];
// let flatArray = nested.flat(2); // [1, 2, 3, 4]

// // flatMap
// let doubledAndFlat = nums.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// - 24.III Transformation(convert) Methods:
// 24.15 slice(begin, end): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// 24.16 splice(start, deleteCount, ...items): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// 24.17 concat(...arrays): Merges two or more arrays and returns a new array.
// 24.18 copyWithin(target, start, end): Copies a sequence(liên tiếp) of array elements within the array.
// 24.19 fill(value, start, end): Fills all the elements of an array from a start index to an end index with a static value.
// // Ex:
// let arr = [1, 2, 3, 4, 5];

// // slice
// let part = arr.slice(1, 4); // [2, 3, 4]

// // splice
// arr.splice(2, 1, 'a', 'b'); // [1, 2, 'a', 'b', 4, 5]

// // concat
// let moreNumbers = arr.concat([6, 7]); // [1, 2, 'a', 'b', 4, 5, 6, 7]

// // copyWithin
// let copy = arr.copyWithin(0, 2, 4); // ['a', 'b', 'a', 'b', 4, 5]

// // fill
// let filled = [1, 2, 3, 4].fill(0, 1, 3); // [1, 0, 0, 4]

// - 24.IV Search Methods
// 24.20 indexOf(value, fromIndex): Returns the first index at which a given element can be found or -1 if not found.
// 24.21 lastIndexOf(value, fromIndex): Returns the last index at which a given element can be found or -1 if not found.
// 24.22 includes(value, fromIndex): Determines whether an array contains a certain value among its entries.
// Ex:
// let arr = ['apple', 'banana', 'cherry'];

// // indexOf
// let index = arr.indexOf('banana'); // 1

// // lastIndexOf
// let lastIndex = arr.lastIndexOf('banana'); // 1

// // includes
// let hasCherry = arr.includes('cherry'); // true

// - 24.V Array Properties and Methods
// 24.23 length: Returns the number of elements in an array.
// 24.24 toString(): Returns a string representing the array.
// 24.25 toLocaleString(): Returns a string representing the elements of the array.
// 24.26 join(separator): Joins all elements of an array into a string.
// 24.27 sort(compareFunction): Sorts the elements of an array in place and returns the array.
// 24.28 reverse(): Reverses the elements of an array in place.
// 24.29 at(index): Returns the element at the given index, allowing negative indices for reverse indexing.

// Ex:
// let arr = [1, 2, 3];

// // length
// let length = arr.length; // 3

// // toString
// let str = arr.toString(); // '1,2,3'

// // toLocaleString
// let localeStr = arr.toLocaleString(); // '1,2,3'

// // join
// let joined = arr.join('-'); // '1-2-3'

// // sort
// let sorted = arr.sort((a, b) => b - a); // [3, 2, 1]

// // reverse
// let reversed = arr.reverse(); // [1, 2, 3]

// // at
// let element = arr.at(-1); // 3 (last element)

// - 24.VI Typed Arrays Methods
// 24.30 set(array, offset): Copies the values from one array to the typed array.
// 24.31 subarray(begin, end): Returns a new typed array view from the original array

// 25. OBJECT
// 25.0 Const in Object
// Ex:
// const Person = {
//   name: 'John',
// };

// person.name = "Bob"

// console.log(Person)

// Object -> luu vao Heap {...thuoc tinh, phuong thuc}
// const Person = #xx010 (luu dia chi)
// khi thuc hien thao tac sua:Person tham chieu den dia chi ben Heap -> edit thuoc tinh
// => Khong duoc thay doi Person nhung duoc phep thay doi thuoc tinh ben trong Person

// 25.1. What is an Object in JavaScript?
// const person = {
//   firstName: "Chuong",
//   lastName: "Minh",
//   age: 19,
//   isEmployed: true,
//   hobbies: ["reading", "travelling", "coding"],
//   address: {
//     street: "28A-P3, 32",
//     ward: "Linh Dong",
//     district: "Thu Duc",
//     city: "Ho Chi Minh"
//   },
//   greet: function() {
//     console.log(`Hello, my name is ${this.lastName} ${this.firstName}`)
//   }
// };

// 25.2. Creating Objects
// a. Object Literals
// const car = {}
// car.color = "Blue";
// car.price = 10000;

// b. Using the new Object() Syntax
// console.log(car)
// const car = new Object();
// car.make = "Toyota";
// car.model = "Camry";
// car.year = 2020;

// c. Constructor Functions
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.greet = function() {
//       console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
//   };
// }

// const person1 = new Person("John", "Smith", 25);
// const person2 = new Person("Minh", "Chuong", 19);

// person1.greet(); // Outputs: Hello, I'm John Smith.
// person2.greet(); // Outputs: Hello, I'm Minh Chuong

// d. ES6 Classes
// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   speak() {
//     console.log(`${this.name} make a noise.`);
//   }
// }

// const dog = new Animal("No","Dog");
// dog.speak(); //No make a noise.

// 25.3. Accessing and Modifying Properties
// a. Dot Notation (kí hiệu dấu chấm)
// Ex: console.log(person.firstName); // Outputs: Jane
// b. Bracket Notation
// Ex: console.log(person["lastName"]); // Outputs: Doe
// c. Using Variables with Bracket Notation:
// Ex: const property = "hobbies";
// console.log(person[property]);

// 25.4. Adding and Deleting Properties
// a. Adding Properties
// Ex: person.email = "jane.doe@example.com";
// console.log(person.email); // Outputs: jane.doe@example.com

// b. Deleting Properties
// Ex: delete person.age;
// console.log(person.age); // Outputs: undefined

// 25.5. Methods in Objects
// Ex: const calculator = {
//   add: function(a, b) {
//       return a + b;
//   },
//   subtract(a, b) {
//       return a - b; // ES6 shorthand for defining methods
//   }
// };

// console.log(calculator.add(5, 3));      // Outputs: 8
// console.log(calculator.subtract(5, 3)); // Outputs: 2

// Ex:
// const studentManeger = {
//   // thuoc tinh
//   name: 'Quan ly sinh vien',
//   them: 'light',
//   data: [], // data sinh vien
//   // phuong thuc
//   add: function() {
//     // logic them sinh vien
//   },
//   edit: function() {
//     // logic sua sinh vien
//   },
//   delete: function() {
//     // logic xoa sinh vien
//   }
// }

// 25.6. The this Keyword
// Ex:
// const user = {
//   name: "Alice",
//   greet: function() {
//       console.log(`Hello, my name is ${this.name}.`);
//   }
// };

// user.greet(); // Outputs: Hello, my name is Alice.

// 25.7. Prototypes and Inheritance
// a. Prototype Chain
// Every JavaScript object has an internal link to another object called its prototype.
// This chain continues until it reaches an object with null as its prototype.

// b. Adding Methods to Prototypes
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// const person3 = new Person("Bob", "Brown");
// console.log(person3.getFullName()); // Outputs: Bob Brown

// c. Inheritance with ES6 Classes
// class Vehicle {
//   constructor(brand) {
//       this.brand = brand;
//   }

//   honk() {
//       console.log(`${this.brand} goes honk!`);
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//       super(brand);
//       this.model = model;
//   }

//   displayInfo() {
//       console.log(`This car is a ${this.brand} ${this.model}.`);
//   }
// }

// const myCar = new Car("Toyota", "Corolla");
// myCar.honk();        // Outputs: Toyota goes honk!
// myCar.displayInfo(); // Outputs: This car is a Toyota Corolla.

// 25.8. Useful Built-in Object Methods
// a. Object.keys()
// Ex:
// const keys = Object.keys(person);
// console.log(keys); // Outputs: ["firstName", "lastName", "isEmployed", "hobbies", "address", "greet", "email"]

// b. Object.values()
// Ex:
// const values = Object.values(person);
// console.log(values); // Outputs: ["Jane", "Doe", false, ["reading", "traveling", "coding"], {…}, ƒ, "jane.doe@example.com"]

// c. Object.entries()
// Ex:
// const entries = Object.entries(person);
// console.log(entries);
// /* Outputs:
// [
//   ["firstName", "Jane"],
//   ["lastName", "Doe"],
//   ["isEmployed", false],
//   ["hobbies", ["reading", "traveling", "coding"]],
//   ["address", { street: "123 Main St", city: "Anytown", country: "USA" }],
//   ["greet", ƒ],
//   ["email", "jane.doe@example.com"]
// ]
// */

// d. Object.assign()
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
// console.log(target); // Outputs: { a: 1, b: 4, c: 5 }

// e. Object.freeze()
// const obj = { prop: 42 };
// Object.freeze(obj);

// obj.prop = 100; // This will fail silently in non-strict mode or throw an error in strict mode
// console.log(obj.prop); // Outputs: 42

// 25.9. Object Destructuring(Phân hủy cấu trúc):
// const userProfile = {
//     username: "user123",
//     email: "user@example.com",
//     location: "Earth",
//     info: {
//         name: "Chuong",
//         age: 18,
//     },
// };

// // Basic Destructuring
// const {username,info:{name,age}} = userProfile
// const { username, email } = userProfile;
// console.log(username); // Outputs: user123
// console.log(email);    // Outputs: user@example.com

// // Destructuring with Renaming
// const { location: userLocation } = userProfile;
// console.log(userLocation); // Outputs: Earth

// // Providing Default Values
// const { age = 25 } = userProfile;
// console.log(age); // Outputs: 25 (since age is not defined in userProfile)

// Example :
// // Define a class using ES6 syntax
// class Book {
//   constructor(title, author, year) {
//       this.title = title;
//       this.author = author;
//       this.year = year;
//   }

//   getSummary() {
//       return `${this.title} was written by ${this.author} in ${this.year}.`;
//   }
// }

// // Create an instance of Book
// const book1 = new Book("1984", "George Orwell", 1949);

// // Accessing properties
// console.log(book1.title); // Outputs: 1984

// // Modifying properties
// book1.year = 1950;
// console.log(book1.year); // Outputs: 1950

// // Using a method
// console.log(book1.getSummary()); // Outputs: 1984 was written by George Orwell in 1950.

// // Adding a new property
// book1.genre = "Dystopian";
// console.log(book1.genre); // Outputs: Dystopian

// // Deleting a property
// delete book1.genre;
// console.log(book1.genre); // Outputs: undefined

// // Iterating over object properties
// for (let key in book1) {
//   if (book1.hasOwnProperty(key)) {
//       console.log(`${key}: ${book1[key]}`);
//   }
// }
/* Outputs:
title: 1984
author: George Orwell
year: 1950
getSummary: function() { ... }
*/

// 25.10 Enhanced Object literals 
// 25.10.1. Shorthand Property Names
// Ex:
// const name = "Alice";
// const age = 25;

// const person = {
//   name: name,
//   age: age
// };

// Enhanced Object literals  
// const name = "Alice";
// const age = 25;

// const person = { name, age };


// 25.10.2. Method Definitions
// const Person = {
//   name: "Chuong",
//   great: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// // with enhanced Object literals 
// const person = {
//   name: "Chuong",
//   great() {
//     console.log("Hello, " + this.name);
//   }
// };

// 25.10.3. Computed Property Names
// const propName = "age";
// const person = {};
// person[propName] = 25;

// With Enhanced Object Literals:
// const propName = "age";
// const person = {
//   [propName]: 25
// };


// 25.10.4. super in Methods
// The super keyword can be used to call methods on the parent object.
// const parent = {
//   greet() {
//     console.log("Hello from parent");
//   }
// };

// const child = {
//   greet() {
//     super.greet();
//     console.log("Hello from child");
//   }
// };

// Object.setPrototypeOf(child, parent);
// child.greet();
// Output:
// Hello from parent
// Hello from child

// All example :
// const propName = "lastName";

// const person = {
//   firstName: "Alice",
//   [propName]: "Johnson",  // Computed property name
//   age: 25,

//   // Method definition
//   greet() {
//     console.log(`Hello, my name is ${this.firstName} ${this[propName]}.`);
//   }
// };

// person.greet();  // Output: Hello, my name is Alice Johnson.


// 25.11 check value in object
// if( key in object) {
//
// }

// 25.12 edit properties of object const

// const person = {
//     name: "NoName",
// };

// person.name = "M Chuong";
// console.log(person);





// 26. HTML DOM & DOM API
// - DOM : Element , Attribute, Text

// 26.1 Get element methods:
// - Get element by: ID, class, tag (If has not id -> element = null), CSS selector (.class1 .class2 / #id1 + #id2/...), HTML collection
// Ex:
// var element = document.getElementById('id');
// var element = document.getElementsByTagName('h1'); // get all h1 tag
// var element = document.getElementsByClassName('class'); // get all tag has classname
// var element = document.querySelector('.class/#id/tagName'); // .class1 .class2:nth-child(2) -> selec element 2st
// var element = document.querySelectorAll('.class/#id/tagName'); // .class1 .class2:nth-child(2) -> selec element 2st

// Ex1:
{
    /* <div class="box-1">
<ul>
    <li>Js</li>
    <li>PHP</li>
</ul>
<p>Test Paragraph</p>
</div>
var boxNode = document.querySelector('.box-1'); // div 
console.log(boxNode.querySelectorAll('li')); // li
console.log(boxNode.querySelector('p')); // p */
}

// Ex2: selec by html collection (forms,p,a,..)
// console.log(document.forms[0]) || forms['id-form'] (id-form: form-1, form-2)

// * The document.write() method in JavaScript is used to write directly to the HTML document.

// 25.2 Attribute node & Text node:
// - AtributeNode: class, id, .. => Attribute nodes represent the attributes of HTML elements
// Ex:
{
    /* <p id="myParagraph" class="myClass">Hello World!</p> */
}

// var element = document.getElementById("myParagraph");

// // Accessing attribute
// var classAttr = element.getAttributeNode("class");
// console.log(classAttr.value); // Output: myClass

// // Modifying attribute
// classAttr.value = "newClass";
// console.log(element.getAttribute("class")); // Output: newClass

// - TextNode : content of tag
// Ex:
{
    /* <p id="myParagraph">Hello World!</p>

  var element = document.getElementById("myParagraph");
  
  // Accessing text node
  var textNode = element.firstChild;
  console.log(textNode.nodeValue); // Output: Hello World!
  
  // Modifying text node
  textNode.nodeValue = "Hello Universe!";
  console.log(element.innerHTML); // Output: Hello Universe!
*/
}

// 25.3 DOM attribute:
// var headingElement = document.querySelector('h1');

// // setter (thuộc tính phải hợp lệ với element)
// headingElement.title = 'Heading';
// headingElement.className = 'classH1';
// headingElement.id = 'idH1';
// // append another atributes (không nhất thiêt là thuộc tính hợp lệ của element)
// headingElement.setAttribute('class','classH2');

// // getter
// console.log(headingElement.getAttribute('class'));// classH2
// console.log(headingElement.getAttribute('title'));// Heading

// 25.4 DOM text : InnerText vs textContent Property
// get content of textnode
// var headingElement = document.querySelector('h1');
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// set content
// headingElement.innerText/textContent = " New content";

// * Difference between innerText and textContent:
// - innerText: returns what is actually seen when rendered to web (space <=> br)
// - textContent: returns what is actually in the textNode  (space, code css,..)

// 25.5: DOM text: InnerHTML vs OuterHTML Property
// - innerHTML : add textNode to Element or generate code html
// Ex:
// var boxElement = document.querySelector('.box');
// // add code html to div box
// boxElement.innerHTML = '<h1 class="heading"> New Heading </h1>';
// // get content from tag h1
// console.log(document.querySelector('h1').innerText); // New Heading
// // get html code as string
// console.log(boxElement.innerHTML); //<h1 class="heading"> New Heading </h1>

// - outerHTML :
// Ex:
// var boxElement = document.querySelector('.box');
// console.log(boxElement.outerHTML); //<div class="box"> </div>
// // set outerHTML
// boxElement.outerHTML = '<span> Test </span>'; // overide div (box)

// 25.6 Node Properties
// var boxE = document.querySelector('.box');
// // All atributes of element : outerHTML, innerHTML,...
// console.log([boxE]);
// * All attributes of element node:
// element.nodeType: Returns the type of the node, which is 1 for element nodes. (2: atributes node , 3: text node)
// element.nodeName: Returns the name of the element (i.e., the tag name).
// element.tagName: Similar to nodeName, returns the tag name of the element.
// element.id: Returns or sets the value of the id attribute.
// element.className: Returns or sets the value of the class attribute.
// element.classList: Returns a DOMTokenList of the class attributes.
// element.attributes: Returns a NamedNodeMap of an element's attributes.
// element.children: Returns a live HTMLCollection of the child elements of the element.
// element.childNodes: Returns a live NodeList of the child nodes of the element.
// element.firstChild: Returns the first child node of the element.
// element.lastChild: Returns the last child node of the element.
// element.previousSibling: Returns the previous sibling of the element.
// element.nextSibling: Returns the next sibling(element kề) of the element.
// element.parentNode: Returns the parent node of the element.
// element.parentElement: Returns the parent element of the element.
// element.innerHTML: Gets or sets the HTML content inside the element.
// element.outerHTML: Gets or sets the HTML content of the element including the element itself.
// element.textContent: Gets or sets the text content inside the element.
// element.style: Provides access to the inline styles of the element.
// element.dataset: Provides access to custom data attributes (data-*).
// element.getAttribute(name): Returns the value of a specified attribute.
// element.setAttribute(name, value): Sets the value of a specified attribute.
// element.removeAttribute(name): Removes a specified attribute.
// element.hasAttribute(name): Returns true if the specified attribute exists.
// element.querySelector(selector): Returns the first descendant element that matches the specified selector.
// element.querySelectorAll(selector): Returns a NodeList of all descendant elements that match the specified selector.
// element.appendChild(newChild): Adds a new child node to the end of the list of children of a specified parent node.
// element.removeChild(child): Removes a child node from the DOM.
// element.replaceChild(newChild, oldChild): Replaces a child node with a new node.
// element.cloneNode(deep): Returns a duplicate of the node on which this method was called.
// element.insertAdjacentHTML(position, text): Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
// element.addEventListener(type, listener, options): Attaches an event handler to the element.
// element.removeEventListener(type, listener, options): Removes an event handler from the element.

// 25.7 DOM CSS : element.style
{
    /* <div class="box box-2">
</div> */
}
// Ex: /
// var box = document.querySelector('.box');
// console.log(box);
//  box.style.width = '100px';
// Object.assign(box.style, {
//   width: '200px',
//   height: '100px',
//   backgroundColor: 'green',
// });
// console.log(box.computedStyleMap.width);

// * Classlist property: add, remove, toggle, contains
// console.log(box.classList);// all atributes of classlist
// Ex:
// var box = document.querySelector('.box');
// // - check count of class :
// console.log(box.classList.length); // 2
// console.log(box.classList.value); // box box-2
// console.log(box.classList[1]); // box-2
// // - add class:
// box.classList.add('class2','class3');
// console.log(box.classList.value); //box box-2 class2 class3
// // - check if class is in tag or not
// console.log(box.classList.contains('class4')); //false
// // - remove class
// box.classList.remove('class2','class3');
// console.log(box.classList.value); //box box-2
// // - toggle: if there is class -> remove else add
// setInterval(() => {
//   box.classList.toggle('red');
// }, 1000);
// // => themm class red sau 1s , go class red sau 1s,...

// 25.8 DOM events
// * <button id="myButton">Click Me!</button>
// document.getElementById('myButton').addEventListener('click', function(event) {
//   console.log('Event Type:', event.type); // 'click'
//   console.log('Target Element:', event.target); // <button id="myButton">Click Me!</button>
//   console.log('Current Target:', event.currentTarget); // <button id="myButton">Click Me!</button>
//   console.log('Timestamp:', event.timeStamp); // Time when the event was triggered(được kích hoạt)
//   console.log('Event Phase:', event.eventPhase); // 2 (At target phase)
//   console.log('Bubbles:', event.bubbles); // true (click events bubble)
//   console.log('Cancelable:', event.cancelable); // true (click events are cancelable) (sự kiện nhấp chuột có thể hủy bỏ)
//   console.log('Is Trusted:', event.isTrusted); // true (the event was triggered by the user)
//   console.log('Client X:', event.clientX); // X coordinate of the mouse click in the viewport
//   console.log('Client Y:', event.clientY); // Y coordinate of the mouse click in the viewport
//   console.log('Alt Key Pressed:', event.altKey); // true or false
//   console.log('Control Key Pressed:', event.ctrlKey); // true or false
//   console.log('Shift Key Pressed:', event.shiftKey); // true or false
//   console.log('Meta Key Pressed:', event.metaKey); // true or false (Command key on Mac)
// });

// _________________________________F8_______________________________________________________________________________________________
// 1. FUNCTION BUILT-IN:(có sẵn)
/*var nameofvariable=value;
- function co san:alert,prompt,confirm
 * alert('hien thong bao');
 * alert(age):tao thong bao  -Ex: var age=18;
 * confirm("co nut cancel"): co nut xac nhan hoac cancel
 * prompt("Day la mot hop thoai"):tao hop thoai

 * setTimeout (tham so1,thamso2);
  Ex: setTimeout(function() {
    alert('thong bao hien ra sau 1000ms')
}, 1000)    :cho code run after time 
     - tham so 1: là 1 function-> <function () {code}>
     - tham so 2: time -> n (ms) (n thuoc int) 1000ms=1s

 * setInterval :tương tự setTimeout-> câu lệnh lặp lại sau time
  Ex:setInterval(function() {
    console.log("min chuong" );
},3000)      : chay code sau a time ( 3000ms) va lap lai code sau time. 
*/

//2. OPERATOR PART 1:
/* 

*Tiền tố :++/-- variable:biến tăng rồi gán lại cho: a && ++/--a;
Ex: var a=4; console.log(++a) -> output=5; (a=++a && a=--a)
*Hậu tố : variable ++/--  :biến tăng rồi gán lại cho:a ;
 *a++/a-- : lưu giá trị cũ của a;  (a!=a-- && a!=a++)
Ex: var a=4 ;console.log(a++) -> output=4; 
-> coi : a++/-- hay --/++a là 1 biến . 
*/

// STRING:var name ='xau';
/*
 var name="Min";
  name += " Chuong";
 console.log(name);
=> Min Chuong
 *Boolean :return true/false của một biểu thức
 Ex: var name= biểu thức ss,...
+ var a=2,b=3;
var c= a>b;
console.log(c);
=> false

 * six value alway return false:0,false,"",'',undefined,null,NaN;
 else return true!
  Ex: var kt=undefined;
 if (kt)  
    console.log(" YES");
 else console.log("NO"); output:NO

 * toan tu : '!' :dk true -> false hoặc false -> true
  Ex :  var a=9;
        if (!(a<0)) console.log('DK dung'); output: DK dung
*/
/*
** DATA TYPE IN JS
1.Primitive Data: kiểu data nguyên thủy
-Number : var a =2 -> 2
-String : var a ='Minh \' Chuong' -> Min Chuong
-Boolean : var isSuccess =true -> true
-Undefined: var a; console.log(a)->undefined (ko gán value cho biến)
-Null : var isNull= null -> null
-Symbol : var name= Symbol('xau');console.log(name) ->Symbol(xau)
2.Complex Data: kiểu data phức tạp
-Function:cú pháp: <var ten = function() {code};> gọi hàm: ten();
  Ex: var fun=function () {alert('helo')};fun(); -> helo;
-Object :
  *myObject : lưu data tương tác in js
  -cú pháp:<var myObject={
    key : value (string,,function,..) , (key='key')
    key : value,
    tenham:function() {} : mot cap key - value
};>
 Ex: var myObject = {
    'age' : 19,
    name:'Minh Chuong',
    fun:function() {},
}; 
 -> output: {age: 19, name: 'Minh Chuong', fun: ƒ}
age: 19
fun: ƒ ()
name: "Minh Chuong"
[[Prototype]]: Object (0)
----------------------------------------------
  *myArray: as myObject các key tự động đánh số
  -cú pháp < var myArray =[value];>
   Ex: var myArray=
  [
    'Min ch','18'int
  ]; 
 -> output: ['Min', 'Chuong']
0: "Min"
1: "Chuong"
length: 2
[[Prototype]]: Array(0)
------------------------------------------------
*OPERATOR PART 2:
 === : ss data type  + value
 !==:  //
 Ex:  var a=1; var b='1';
     console.log(a==b) -> true
     console.log(a===b) -> false
     console.log(a!==b) -> true
     console.log(a!=b) -> false

*Value false:false,NaN,0,'',"",null.
-&& : 1 cái sai -> return sai
-|| : 1 cái đúng -> return đúng 
Ex: 
  var result ='A' && NaN && 'B';
if (result) 
console.log('True');else console.log('False'); 
output: False

  var result =null || NaN || 0 || ''||""|| 'A' ;
if (result) 
console.log('True');else console.log('False'); 
output: True (có kí tự A != 6 gia trị return False)

*/

/*
CHUỖI IN JS
- do dai chuoi : ten.length
- Template string ES6:
 Ex : var firstname="Minh";
      var lastname="Chuong";
console.log(`"toi la " ${firstname} + ${lastname}`);
- console.log(`content`); in ra content ->in ra tất các kí tự
a
  */

/* LÀM VIỆC VỚI CHUỖI :
var mystring= " Hoc JS tai F8";
1.Length: 
 console.log(mystring.length);
2.Find index:
 console.log(mystring.indexOf('JS',vitri bắt đầu tìm));
 console.log(mystring.lastIndexOf('JS'));
 console.log(mystring.search('JS')); ko hỗ trợ vị trí như indexOf  
3.Cut string: 
 console.log(mystring.slice(index start,index final));
4.Replace:
 console.log(mystring.replace('JS','JavaScript'));
5.Split:
 console.log(mystring.split(điểm chung của xâu để tách);
 Ex: var a='Javascript';
 console.log(a.split(''));
 -> ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
6.Touppercase: viết hoa
 console.log(mystring.toUpperCase());
7.Tolowercase :
 console.log(mystring.toLowerCase())
8.Get a character by index:lấy kí tự từ index
 console.log(mystring[index])
 or console.log(mystring.charAt(index))
9.Trim : tự động xóa kí tự trống ở 2 đầu chuỗi
 console.log(mystring.trim());
*/

/* WORK WITH NUMBER 
 var a=3.934427;
-kiểm tra datatype : console.log(isNaN(biến cần kt));
-làm tròn:console.log(a.ToFixed(số thập phân sau,))
-chuyển data number -> string :console.log(a.toString());
*/

/* Array
- cú pháp: var name = [
    item1,item2,..
]; 
-gọi array : console.log(name);
-lấy phần tử theo index:console.log(name[index]);
-kt data :console.log(Array.isArray(language)) ->True
         console.log(Array.isArray({})) -> False
         --> fan biệt data
  *WORK WITH ARRAY:
    var language = ['javascript','PHP','Ruby'];
1.To string :chuyen data sang chuoi
 console.log(language.toString()) 
 ->javascript,PHP,Ruby.
1.1 Join:console.log(language.join(' - '))  (as split)
 ->javascript - PHP - Ruby.
2.Pop/shift: xoá phần từ cuối/đầu return phần tử đó
  console.log(language.pop()) 
3.Push/unshift :them phan tu vào cuối/đầu mảng 
  console.log(language.push('Dark',....))
  ->['javascript', 'PHP', 'Ruby', 'Dark']
4.splicing:xóa phần tử 
 language.splice(index,số element muốn xóa,element mới)
 Ex:console.log(language.splice(1,1,'Blue','Red')) 
 ->['javascript','Blue','Red','Ruby']
 5.concat:hợp nhất array.
 language.concat(language2)
 6.slicing:cắt element of array và return element đó
 language.slice(index star,end)
 Ex:console.log(language.slice(1,2)) 
 ->['PHP']

 * Function:
 c1: Expression:phải ĐN -> mới sd đc hàm
  < var name = function() {code};> 
 c2: Declaration:có thể gọi trc khi đc định nghĩa
  < function name() {code};>
  -> goi ham: name();
 -Truyền tham số : function name(tham số) {code};
  -> write (array,xau,number,..);
 Ex: function write(message) {console.log(message)};
    write('hello'); (bien chi sd in function:private(bao mat))

 -Arguments: console.log(arguments);->in tất cả tham số của hàm
 Ex: function name() {console.log(arguments)};
     name(1,2,3,4,5) ; 
     output: 1,2,3,4,5.
 Ex: function name2() {console.log(arguments)};
     name2('Minh','Chuong') ;
     output: Arguments(2) ['Minh', 'Chuong', callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: "Minh"
1: "Chuong"
callee: ƒ name2()
length: 2
Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
 Ex: function name1(thamso) {
  console.log(typeof thamso); 
} name1(['array','mang']);
  output:object (typeof array : object)
-for of: lặp sd arguments lưu và thực thi code tất cả tham số
cú pháp:< for (var biến of arguments) {code};
Ex: function aray() {
  for(var a of arguments)  
   // arguments : duyệt tất cả tham số
  // lấy aray[1] gán cho a -> console.log(a)...
   {
    console.log(a);
  }
} aray(1,2,3); truyền tham số 
 output: 1 2 3
 Ex2:function nameoffunction() {
  var mystring='';
  for(var a of arguments) {
     mystring+= `${a} -`;
  }
   console.log(mystring);
} 
nameoffunction('Minh','Chuong')
output:Minh -Chuong -

Ex3:sum
function sum() {
  var s=0;
  for (var a of arguments) {
    s+=a;
  } console.log(s);
} sum(1,2,3);
 -> 6
*Return trong hàm:
Ex:function sum(a,b) {
  return a+b;
} console.log(sum(2,3)); -> 5
Ex: function string(a,b) {
  return a.toString() + b.toString();
} console.log(string(2,3))
Ex: function array(a,b) {
  return [a,b];
}  console.log(array(2,3));

*OBJECT : đối tượng
 < var name ={ key: value,...};>
 Ex:
 var myinfo = {
   name: 'chuong',
   age: 18,
   address: 'VietNam',
}
//them key mới:
myinfo.gmail='chuongminh3225@gmail.com';
// key have words  error in js -> put key in array string:
myinfo['my-gmail']='chuonghero230@gmail.com';
console.log(myinfo);
->address: "VietNam"
age: 18
gmail: "chuongminh3225@gmail.com"
my-gmail: "chuonghero230@gmail.com"

// in ra key value nhưng ko gọi trực tiếp key in object:
Ex: 
var myinfo = {
  name: 'chuong',
  age: 18,
  address: 'VietNam',
}
var savekey='address'; key dc lưu dưới dạng chuỗi
 console.log(myinfo[savekey]); -> return value of savekey = address
-> Viet Nam.

Ex2: add key with a variable :
var addkey='class';
var myinfo = {
  name: 'chuong',
  age: 18,
  address: 'VietNam',
  [addkey]:'key moi', 
}
console.log(myinfo);

->name: 'chuong',
  age: 18,
  address: 'VietNam',
  class:'key moi', 

// function in a object:
Ex:
var myinfo= {
   age :18,
   name:'Chuong',
   address: 'Viet Nam',
   fun: function() 
    {
    return this.age;
   }}
console.log(myinfo.fun()); 
-> 18 (fun is a function type  --> fun() )

* properties: thuộc tính -> các biến đc gán với đối tượng
(chứa data of object)
 Ex:age :18,
   name:'Chuong',
   address: 'Viet Nam',
* methods: Phương thức(function) -> các hàm dc define 
in a object, thực hiện 
hành động hoặc tính toán data của object
*Object constructor: xây dựng đối tượng (create function)

// create a Object Constructor (bản thiết kế)
var User = function(firstname,lastname,avatar) {
   this.firstname=firstname;
   this.lastname=lastname;
   this.avatar=avatar;

   (-> this.firstname: khi đối tượng được tạo với bản thiết kế này 
   sẽ có thuộc tính là firstname = tham số first name đc truyền 
   vào khi khởi tạo đối tượng )

  //properties
   this.fullname = function() {
     return `${this.firstname} ${this.lastname}`
   } 
   (-> this.fullname: thuộc tính fullname có 1 method return fullname)
   //method
}
 # OC : object constructer
//tao object : <var Name-object = new name-OC(value);>
var  author = new User ('Pham','Minh','Avatar');
var user =new User ('Minh','Minh','Avatar');

// goi properties:Name-Object.properties;
// goi method: Name-Object.method();
console.log(author.fullname());
-> Pham Minh
console.log(author);
->User {firstname: 'Pham', lastname: 'Minh', avatar: 'Avatar', fullname: ƒ}

// add properties of object: thêm properties cho từng object cụ thể
author.title='tieu de'; <nameObject.properties = value;>
 
*Object prototype - Basic: 
thêm properties bên ngoài hàm tạo 
-> sd cho tất cả object đc khởi tạo
< nameObject.prototype.properties/method = 'value';> 
Ex:
function User(age,name) {
   this.age=age;
   this.name=name;
}
var mc = new User ('18','chuong');
//add a properties:
User.prototype.address='VN';
console.log(mc.address); -> VN
// add a method : 
User.prototype.fun= function() {
  return this.age;
}
console.log(mc.fun()); -> 18

* Date : 
var date = new Date() ;

var year = date.getFullYear();
var month = date.getMonth()+1; (0->11)
var day = date.getDate();

console.log(`${day} / ${month} /${year}`);
->30 / 10 /2123

* cu phap : switch (variable)
// tu value right -> chay het tat ca cau lenh duoi neu ko break
 {
  case value : code ;
  dafault : code;
} -> variable=== value : run code
Ex:
var date =5;
switch (date) {
  case 2 :case 3 : case 4 :
    console.log('Hom nay la thu 2 3 4 ');
    default :
    console.log('ko bit');
}
-> ko bit

* three operator :toan tu 3 ngoi
Ex: var a=2 ; var b=3;
var c = a > b ? 'dung' : 'sai';
console.log(c);
->sai
Ex2:
var course = {
  coin: 250 ,
  name: 'JS',
}

var result = (course.coin)>0 ? ` ${course.coin} coin `:' Mien Phi';
console.log(result);
-> 250 coin

` ${variable} -  text ` -> in ra ki tu dac biet
Ex:var a =3;
console.log(`${a} !@#$%^&`) ->3 !@#$%^&

* For: as C++;
Ex:
var array =[
  'js','c','java'
];
for ( var i=0;i<array.length;i++) {
  console.log(array[i]);
}

* For/in loop:
< for ( var key in nameObject/nameArray/namestring/..) {code};>
 key(object) : index (array/string) 
 -> duyet toi value : name[key];
Ex:
var array = [
  'javascript','PHP','C++','Dart'
]
for (var key in array) {console.log(array[key])};
 ->javascript,PHP,C++,Dart.

var string = 'Chuong';
for (var key in string) {console.log(string[key])};
-> c h u
 o n g
var object = {
  age:18,
  name:'chuong',
}

for (var key in object) {console.log(object[key])}; 
-> 18 chuong
----------------------------
*For of :
// Object :  for (var value of Object.keys(name)) 
{
  console.log(name[key]) -> value of key
}
// array :  for (var value of name) {console.log(value)}
-> in ra value of index 
// string :  for (var value of name) {console.log(value)}
-> in ra ki tu

*do/while:
// if(isSuccess) : nếu isSuccess retrun true -> run code
// if(!isSuccess) : nếu isSuccess retrun false -> run code
// if (false) {code} -> ko run code
// if (true) {code} -> run code

*vd for :
Ex: var array = [
  [1,2],
  [3,4],
  [5,6]
]

for (var i = 0; i < array.length;i++) {
  for (var j = 0 ;j<array[i].length;j++) {
    console.log(array[i][j]) ;
  }
} -> 1 to 6
---------------
*Array method 
Ex: 
var list = [

 {
id:1,
name:'Chuong',
age: 18

 },
 {
   
  id:2,
  name:'Minh',
  age: 18
 }
   

];

< nameofArray>.method()>
+ forEach(): return tất cả data trong array
Ex:  list.forEach(function(object,index)
{
  console.log (index,object);
}); 
->0 {id: 1, name: 'Chuong', age: 18}
  1 {id: 2, name: 'Minh', age: 18}

+ every(): return true ( tat ca dung)
Ex: var result = list.every(function(object,index)
{
  return list.age === 18 ;
});
console.log(result); -> True

+ some() : 1 cai dung return true
Ex: var result2 = list.some(function(object,index){
  return list.id === 1;
}); console.log(result); -> true

+ find(): return data of object
Ex: var result = list.find(function(object,index){
  return list.name === 'Chuong';
}); console.log(result); -> return data co name: ' Chuong'->break;

+ filter() : tim ta ca object co properties = value 
Ex : var result = list.filter(function(object,index){
  return list.name ==='chuong';
}); console.log(result); -> return all data co name = 'chuong'

+map(): thay đổi element of Array


*/

// var course = [
//     {
//       id: 1,
//       name : 'javascript',
//       coin: 210
//     },
//     {
//       id:2,
//       name: 'html',
//       coin:100
//     },
//     {
//       id:3,
//       name:'angular',
//       coin:0
//     }
//   ]

//   var changecourse = function(course,index)
//   {
//     return {
//       STT: course.id,
//       Name: 'NNLT javascript',
//       Price: '210 VND',
//       Origincourse:course,
//       Newindex: index +2,
//     }
//   }

//   var newarray = course.map(changecourse);

//   console.log(newarray);
