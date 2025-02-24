


//cosnt 
{
const person = {
    first_name:'john',
    last_name:'roy',
    mail:'john@.io',
    password:'john_24'
}
 document.getElementById('const').innerHTML= person.first_name;
}
//const of array 

 const place =['Tamilnadu',' gujarat','kerala' ];
 place[2]='Mumbai';
 let g=place.push("Kolkata")

 document.getElementById('place').innerHTML= place;




//const in numeric
 const x = 234;
 y=x+1
 document.getElementById('num').innerHTML= y;

//event function

 function myFunction() {                          
    document.getElementById("demo").innerHTML = Date();          //onclick
 }

//var concept

var arr = ['cherry','apple']
        document.getElementById('arr').innerHTML= arr[1] ;

//let concept
{
let books = {
    Author:'james',
    book_name:'Art of happiness',
    Chapter:'12'
}
 document.getElementById('let').innerHTML= books.book_name;
}
 //object properties

 const person = {
    name:'shayan',
    age:'19',
    branch:'CSE',
    year:'3',
    Percentage:'81%'
 };
 let text ="";
 for (let i in person){
    text+= person
 };
//  document.getElementById('obj').innerHTML= text;
 document.getElementById('obj').innerHTML= person.name + "is" + person.age + "years old.";


function onchange() {
    var z= document.getElementById("option").value;
        document.getElementById("select").innerHTML= "You selected: " + z;  //onchange
 } 



 function BigImg(x) {                     //onmouseover and onmouseout
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
  alert('Welcome to the page ')

  function onkeydown() {
    document.getElementById('down').innerHTML= 'you have Done';
  }


  //array 
  {
  const books = ["Art of happiness", "Harry Potter", "The Alchemist"];
  const book=["bible","Man's Search for Meaning"]
  let size = books.length;
  let str = books.toString();
  let a = books.at(1);
  let join=books.join('*');
  let shift = books.shift();
  let concat = books.concat(book);
  let del = delete concat[1];
  let sort = books.sort();
  let rev = books.reverse();
  
// const to_reversed = book.toreversed();
const to_sort = books.toSorted();
  document.getElementById("book").innerHTML = size;
  document.getElementById("str").innerHTML = str;
  document.getElementById("at").innerHTML = a;
  document.getElementById("join").innerHTML = join;
  document.getElementById("shift").innerHTML = shift;
  document.getElementById("concat").innerHTML = concat;
  document.getElementById("del").innerHTML = del;
  document.getElementById("sort").innerHTML = sort;
  document.getElementById("rev").innerHTML = rev;

//   document.getElementById("reversed").innerHTML = to_reversed;
document.getElementById("sorted").innerHTML = to_sort;
  } 


// else if condition:
let compliment;
const marks = 50;
if (marks < 25) {
    compliment= "Good";
  } else if (marks < 40) {
    compliment = "better";
  } else {
    compliment = "best";
  }

  document.getElementById("mark").innerHTML = compliment;


  // if else condition:
const people_age =31;
let message;
  if (people_age >=18) {
    message= "you are eligible to vote ";
  } else {
    message= " you are not eligible to vote";
  }
  document.getElementById("vote").innerHTML = message;


  //switch statement
  let day = 3;
  let dayName;
  
  switch (day) {
      case 1:
          dayName = "Monday";
          break;
      case 2:
          dayName = "Tuesday";
          break;
      case 3:
          dayName = "Wednesday";
          break;
      case 4:
          dayName = "Thursday";
          break;
      case 5:
          dayName = "Friday";
          break;
      case 6:
          dayName = "Saturday";
          break;
      case 7:
          dayName = "Sunday";
          break;
      default:
          dayName = "Invalid day";
  }
  document.getElementById("day").innerHTML = dayName;

//while condition 

  {
    let text = "";      //output text
    let i = 4;
    while (i < 10) {
      text += "<br>The number is " + i;          //if the while condition satisfies the output will execute 
      i++;
    }
    document.getElementById("while").innerHTML = text;
  }

  //do while :
   {
    let result="";
    let i = 1;                         // i start the count value from 1 
    do{
        result +=" <br> count value " +  i;        //do condition executes atleast one value because it gives beforethe condition test 
        i++;                             //increment process
    }
    while(i<11);
    document.getElementById("do").innerHTML=result;   //executes till the condition satisfies
   }

   //break:
   const n=11;
   let i,result;
   for (i=0; i<n;i++){                            //it breaks the loop 
    if(i==4) {break;}
    result += "<br> number " +i+"<br>";
   }

 document.getElementById("br").innerHTML=result;
 

//Maps 
 const wanderlust = new Map([
  ["chennai",234],
  ["Kolkata", 456],
  ["Jaipur", 786]
]);

let cost = wanderlust.get("Jaipur");
document.getElementById("map").innerHTML = + cost + " place in jaipur " ;

//map methods
{

  const wanderlust = new Map([
    ["chennai",786],
    ["Kolkata", 345],
    ["Jaipur", 786],
    ["udaipur",165]
  ]);
  let get = wanderlust.get("chennai");      //get the value 
  let size = wanderlust.size;                     //return the size of the array
  wanderlust.delete("chennai");       //delete the value given 
  let has = wanderlust.has("udaipur");       //return the value what it has 

  let text = "";
  wanderlust.forEach(function(value,key){      //foreach : it will return both the value and key of the complete array 
    text+= key+'='+ value+"<br>"
  })

  


  let entry="";
  for (const x of wanderlust.entries()){      //entries will list the array
    entry +=x +"<br>";
  } 
 
  let text1 = "";
  for (const s of wanderlust.keys()) {       ///It will return the key values
    text1 += s + "<br>";
  }


let z = "";
for (const y of wanderlust.values()){       //It will return the values 
  z += y+"<br>";
}
 

  document.getElementById("get").innerHTML = get;
  document.getElementById("size").innerHTML = size;
  document.getElementById("delete").innerHTML = wanderlust.size;
  document.getElementById("has").innerHTML = has;
  document.getElementById("foreach").innerHTML = text;
  document.getElementById("entry").innerHTML = entry;
  document.getElementById("key").innerHTML = text1;
  document.getElementById("val").innerHTML = z;
}
 

//normal function :

// function sum (a,b) {
//   return a+b
// }

//arrow function:
let a = 5;
let b = 4;
const sum2=(a,b) => a+b;
document.getElementById("plus").innerHTML = a+b;

//normal function of single parameter:

// function age(number){
//   return number>0
// }
const number= 23;
const age=(number) => number>0;
document.getElementById("equal").innerHTML =number>0;

//this function 
{
const details ={
  project_name:"web development",
  work_on:"front-end",
  submiton:"within 2 days",
  Theme:"shopping-website"
}
// const details="hello"
document.getElementById("details").innerHTML+=this;
}

//classes

class Student{                                            ////class ClassName { constructor() { ... } }
  constructor(name,section,standard,Percentage){ 
    this.name= name;
    this.section= section;
    this.standard= standard;
    this.Percentage= Percentage;
  }                       
}
const student1 =new Student("roy",  "A", 4 ,62);
const student2=new Student("mouni",  "B", '4' ,32);
document.getElementById("student").innerHTML= student2.name+' '+student1.name;


//Javascript functions :
{ 
  const x = function (a, b) {return a * b};
  document.getElementById("multi").innerHTML = x(14, 25);
}
 

{
  const divide = function (a, b=15) {return a / b};
  document.getElementById("divide").innerHTML = divide(3) + "  answer ";
}




function mergeArrays() {
  const nums1 = [12, 14, 13, 35, 76];
  const nums2 = [2, 4, 6, 45, 56];
  const m = nums1.length;
  const n = nums2.length;
  const mergedArray = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      mergedArray[k] = nums1[i];
      i++;
    } else {
      mergedArray[k] = nums2[j];
      j++;
    }
    k++;
  }
  while (i < m) {
    mergedArray[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    mergedArray[k] = nums2[j];
    j++;
    k++;
  }

  return mergedArray;
}

const merged = mergeArrays(); 

document.getElementById("merge").innerHTML = merged.join(", "); 


//destructuring

const student={
  name:'soundarya',
  Branch:'CSE',
  Year:"final-year"
}
let {Branch:help}=student
let{name:last_name}=student
document.getElementById("destructure").innerHTML = help; 

//function parameters with constructors:

// function myObjects(args1,args2,args3){
//   this.place=args1,
//   this.food=args2,
//   this.model=args3
// }
// const obj= myObjects(chennai,Italian,traditional)
// document.getElementById("const").innerHTML =obj. place;



//function inovke as methods
const novels = {
  first_name:"Art",
  middle_name:"of",
  last_name:"happiness",
  full_name: function(){
    return this.first_name +' '+this.middle_name +' '+ this.last_name;
  }
}
document.getElementById("novels").innerHTML=novels.full_name();


//example:   //invoke as function

// function Functions(a, b) {
//   return a * b;
// }
// document.getElementById("demo").innerHTML = Functions(15, 2); 


//function call
function Function(arg1, arg2) {
  this.place = arg1;
  this.food  = arg2;
}

const myObj = new Function("chennai", "chinese");
document.getElementById("call").innerHTML=myObj.food;


//function Apply :
const person_={
  full_name :function(){
    return this.first_name+' '+this.last_name;
  }
}
const person_1={
  first_name:'jony',
  last_name:'roy'
}
const person_2={
  first_name:'Annie',
  last_name:'mon'
}

document.getElementById("apply").innerHTML=person_.full_name.apply(person_1);
// document.getElementById("bind").innerHTML=person_1.full_name.bind(person_2);
//bind 
{
  const client={
    first_name:'john',
    last_name:'doe',
    full_name :function(){
      return this.first_name+' '+this.last_name;
    }
  }
  const member={
    first_name:'Hege',
    last_name:'nilsen'
  } 
let full_name = client.full_name.bind(member);
document.getElementById("bind").innerHTML=full_name();
}


//classes 
class User{
  static numberofusers=0;    //total number of users
  constructor(Name, Age){
    this.name = Name,
    this.Age = Age
    User.numberofusers++;
  }
  login(){
    console.log('Hi',this.name)
    console.log('You are logged in successfully')
  }
  logout(){
    console.log('You are logged out successfully')
  }
  static displaytotalUsers(){
    console.log('Total number of Users',+ User.numberofusers)
  }
}
let person1=new User('joe',25)
let person2=new User('nivi',23)
person1.login()
person2.login()
User.displaytotalUsers()
//console.log('numberofusers',User.numberofusers)

//using inheritance for accessing multiple users :
class Paiduser extends User{
  constructor(Name,Age){
    // this.name=Name;
    super(Name,Age);             //super class is used to take access from the parent class for (name,age)
    this.age=Age
    this.storage=100;
    }
  message(){
    console.log('you have got 123 GB free storage')   //example 
  }
  //overriding
  login(){
    console.log('Thank you for your support')
  }
}
let PaidUser1 = new Paiduser('dhana',23)
PaidUser1.login()
let PaidUser2 = new Paiduser('swag', 24)
PaidUser2.login()                             //only the methods inside the base class it coant access parent class


//get and set
class Temperature{
  constructor(temp){
    this._temp = temp             //_temp is a private property  and can be accessed using get and set
  }
  get temp(){
    return `${this._temp} deg celcius`
  }
  set temp(temp){
    if(temp>100)
      temp=100
    this._temp = temp
  }
}

let temp1 = new Temperature(25)
temp1.temp =157
// let temp2 = new Temperature(45)
console.log(temp1._temp); 


//Asynchronous callback:

function greetconsole(name){
  console.log('hello', name)
}
function greetheading(name){
  const heading = document.querySelector('h1')
  heading.innerHTML='hello' + name
}

function greet(callback){
  callback('Ram')
}
greet(greetconsole)
// greet(greetheading)

greet(name =>{
  const heading = document.querySelector('h1')                //function defined here itself
  heading.innerHTML='hello' + name
})


//promise

// const ticketbook =new Promise((resolve,reject)=>{
//   let bookingsuccess = true
//   if(bookingsuccess)
//     resolve(245)
//   else
//     reject()
// })
// ticketbook.then(success)    // then will return when resolve act
// .catch(failure)               // catch will return when reject act

// function success(){
//   console.log('Thanks buddy! I will book the ticket')
// }
// function failure(){
//   console.log('Booking failed! Try again to book your tickets')
// }
// ticketbook.then((amt)=>console.log(`Thanks buddy! I have Booked the tickets at Rs. ${amt}`))
// .catch(()=>console.log('Booking Failed! Try again to book your tickets'))


function ticket(){
  return new Promise((resolve,reject)=>{
    let bookingsuccess = true
    if(bookingsuccess)
      resolve(345)
    else
      reject()
  })
}
ticket().then((amt)=>console.log(`Thanks buddy! I have Booked the tickets at Rs. ${amt}`))
.catch(()=>console.log('Booking Failed! Try again to book your tickets'))


let reachA =new Promise((resolve,reject)=>{
  const reached = true
  if(reached)
    setTimeout(resolve,3000,"vidya reached")
  else
     reject('vidhya not reached')
})
let reachB =new Promise((resolve,reject)=>{
  const reached = true
  if(reached)
    setTimeout(resolve,2000,"abhi reached")
  else
     reject('abhi not reached')
})
let reachC =new Promise((resolve,reject)=>{
  const reached = true
  if(reached)
    setTimeout(resolve,1000,"Shayan reached")
  else
     reject('Shayan not reached')
})

// Promise.all([reachA,reachB,reachC])       //  all is allowed to access the resolve when all are reached 
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))


//promise-pending ,resloved,rejected

// Promise.allSettled([reachA,reachB,reachC])      //allsetled   
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))


// Promise.any([reachA,reachB,reachC])         
// .then((message)=>console.log(message))                //any
// .catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])         
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//async/await:

async function fn(){
  return 'Hellloo'
}
console.log (fn())
// fn().then((msg)=>console.log(msg))             //without using .then in aysnc

async function asyncstatus() {
  try{
    console.log('hi..')
    res = await reachA     //vidya reached
    console.log(res)
    console.log('bye')               //if it is reject we will use try and catch 
  }
  catch(err){
   console.log(err) 
  }
}

asyncstatus()


//Dom manipulation
{
 let message =  document.getElementById('message').innerHTML="Welcome to our website"         //Accessing the id message from h1
}
 
