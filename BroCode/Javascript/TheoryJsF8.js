// FUNCTION BUILT-IN:(có sẵn)
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


//OPERATOR PART 1:
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

 * six value luôn return false:0,false,"",'',undefined,null,NaN;
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
->30 / 10 /2023

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

var course = [
  {
    id: 1,
    name : 'javascript',
    coin: 200
  },
  {
    id:2,
    name: 'html',
    coin:100
  },
  {
    id:3,
    name:'angular',
    coin:0
  }
]

var changecourse = function(course,index) 
{
  return {
    STT: course.id,
    Name: 'NNLT javascript',
    Price: '200 VND',
    Origincourse:course,
    Newindex: index +2,
  }
}

var newarray = course.map(changecourse);

console.log(newarray);
