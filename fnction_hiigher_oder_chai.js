//Function 
function myname() {
    console.log("B");
    console.log("a");
    console.log("s");
      console.log("i");
      console.log("t");
}
//myname()
/*function addtwonumbers(number1,number2) {
    console.log(number1+number2);
         
}*/
function addtwonumbers(number1,number2) {
     let bro=number1+number2;
    
     
        return bro;
        
        
         
}
let result=addtwonumbers(3,5);
//console.log("result",result);
function loginuser(username ) {//here in paranthesis you give deafult value if user not enter 
    if(!username){//here ! this show that its convert true to false and false to true
        //  console.log("please enter your name");
        return
    }
    return `welcome to ${username} just logg them`
}
//onsole.log(loginuser());
function totalprice(...basit) {//... for this dot we say rest operator and spread operatorc  n
    return basit;
    
}
  //console.log(totalprice(4,400,5000,));
  //how we pass object in function
  let bana={
     userName:"basit",
     price:450

  }
  function  badshah(anytype) {
        //console.log(`my nameis ${anytype.userName}and  price is ${anytype.price}`);
        
    
  }
//badshah(bana)
badshah({
   userName:"basit",
   price :33


})
// now see it for array passing in function
let ARRAy=[1,2,3,4,5]
function secondvalue(put) {
    return put
    
}
//console.log(secondvalue(ARRAy));
//console.log(secondvalue([
    1,2,3,4
//]));
//Topics of SCOPS 
let a=300;
if(true){
let a=34;
const b=23;
//console.log("inner a",a);


}
//console.log(a);
//console.log(b);

//nested scop 
function one() {
    const userName="basit khan"
    function two(){

         const website="youtube"
             //console.log(userName)
    }
    //console.log(website);
;
         
    two()
}

//one()
    if (true) {
        const username="khanigora"
       if(username==="khanigora"){
          let website="youtube"  
          
        //console.log(website);
        //console.log(username);
        
       }
       //console.log(website);
       
    }
//console.log(username);
//console.log(username);
 //************** intersting ***********************************  Quetion and big concept
// console.log(addone(3));
 

  function addone(num) {
    
    
    // its good like this type of you describe and its work
  return num+1;

    
  }

 //function addone(num) {
    //let incerase=num+1
    //console.log(incerase);
    // its my own practice
  // return incerase;

    
 // }
//addone(3)
//addona(4)
//const addona=function addtwo(num) {
  // its not good like this type of you describe and not work 
   //return  num+2
   

    
 // }
 //Arrow function we discus here and here we also learn this keyword and current values 1 ko refer kartha ha

const addtwo=(num1,num2)=>{

    r//eturn num1+num2;// this simple arrow function
}
  //console.log(addtwo(4,4));
   
//const addtww=(num1,num2) =>   num1 +  num2 emplict function
//const addtww=(num1,num2) =>   (num1 +  num2)
const addtww=(num1,num2) =>({userName: "basit"})


//console.log(addtww(2,3));
// Imediately invoked Function Expressions (IIFE)
(function code() {
  // name IIFE
  console.log(`khan`);
  
  })();
//syntax ()()first paranthesis show function definition and second show execution
( (name) =>{
  //console.log(`grona two ${name}`);
  
  //simple IIFE
})("basit")
// ({}) js execution context :its mean when you bring code here so how you run:: and call stack  
//1: Global execution context.2: function execution context. 3:Eval execution context
//({})--> Memory creation phase --->Execution Phase
let val1=10;
let val2=5
function addnum(num1,num2) {
  let total=num1+num2;
  return total
  
}
let result1=addnum(val1,val2);
//console.log(result1)
let result2=addnum(2,4);
//console.log(result2)
//CONTROLE FLOW
//if 
//>,<,<=,>=,!=,==,=== equal value and equal type	x === 5

const basit=false;
if("5" ==="5"){
  //console.log("basitkhan");
  
}
else{c//onsole.log("no results");
}
const salray =9000;
if (salray<4000){
  //console.log("you are on good job");
  
}
else{
 // console.log("you should hardworking to reach this salary");
  
}
//nested condition
const balance=900;
if(balance <600){
  //console.log(" balance less than 600");
  

} else if(balance<550){
   //console.log(" balance less than 550");
  

}else if(balance<500){
   //console.log(" balance less than 500");
  

}else if(balance<400){
 //  console.log(" balance less than 400");
  

}
else{
  //console.log("balance is less than 1000");
  
}
//switch statment
//const month=4;
/*switch (month) {
  case 1:
    console.log("january");
    
    break;
    case 2:
    console.log("feb");
    
    break;
    case 3:
    console.log("march");
    
    break;
    case 4:
    console.log("april");
    
    break;

  default:
    console.log("default");
    
    break;
}*/
//logical operator &&,||,
const banaa="basit";
const brona="chola";
if (banaa=="basit" || brona=="khan")  {
 // console.log("i think you are so good in progarmming");
  
  
}else{
 // console.log("do practice");
  
}
//NULISH colescing operator (??):null undefined
let val3;
//val3=5??10
 //val3=null ?? 10;
 //val3=undefined ?? 23;
 //console.log(val3);
 //TERNIARY OPERATOR
 //condition ? true :false
 const iceteaprice=100;
 //iceteaprice ==80 ? console.log("less than 80") : console.log("more than 80")
 //ITERAtion 
 //FOR
 
 for (let index = 0; index <=10; index++) {
  const element = index;
  //console.log(element);
  
  
 }
 for (let index =2;index<=10; index++) {
  const element =index;
  
  
  for (let j=2;j<=10; j++) {
    const element =j;
//console.log(element+"x"+element+"="+element*element);
    
    
  }
  
 }
 let basitd=[1,2,3,4,5,6]
 for (let index = 0; index<basitd.length; index++) {
  const element=basitd[index]

  //console.log(element);
  
 }
 //break and continue
 for (let index = 1; index <=10; index++) {
 // const element = index;
 if(index==5){
  //console.log("basit five is break");

  //break;
  continue;
  
 }
  //console.log(` ${index}`);
  
  
 }
 //WHILE LOOP
 let whil=0;
 while(whil<=10){
 // console.log(`hi ${whil}`);
  whil++;

 }
 let myarray=[1,2,3,4,5,6]
 let i=0;
 while (i<myarray.length) {
    //console.log(`hi ${myarray}`);
  myarray++;
 }
 let score=11;
 do {
  // its give result even it condition is wrong it give at once output
       //console.log(`score ${score}`);
       score++;
       
 } while (score<=10);
//In JavaScript, the primary distinction is that
//a for...in loop is for iterating over object property names (keys),
//while a for...of loop is for iterating over the values of iterable objects like arrays and strings. 
// FOR of its all array specific
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
  //console.log(num);
  
  
}
const greeting ="hello world"

for (const greet of greeting) {
 
  
  //console.log(` ${greet}`);
  
}
//MAP
let bro =[1,2,3,4,5]
let res=arr.map((e)=>e*2)
//console.log(res);



const map=new Map()
map.set('pak',"pakistan")
map.set('chin',"china")
map.set('du',"dubai")
map.set('af',"afghanistan")
map.set('pak',"pakistan")
//console.log(map);
for (const [key,value] of map) {
 // console.log( key, ':-',value);
  
  
}
let myobject={
  b:"basit",
  a:"abdul",
  d:"done"
}
for (const key in myobject) {
 
    //  console.log(`${key}  and values ${myobject[key]}`);
                   
  
}
const progarmming1=["CR","cd","fg","po"]
for (const key in progarmming1) {
  //console.log(progarmming1[key]);
  
  
  
  
}
//FOR EACH
const coding=["basit","khan","jora","city"]
coding.forEach((element,key) => {
      //4  console.log(element,key);
        
});
const array=[1,2,3,4,5,6,7,8]
const values=array.filter((num)=> num==5)
console.log(values)
let abdul=[{bookwn:"abdul",bookn:"mathemtics",publish:"1930",edition:"2000"},
  {bookwn:"basit",bookn:"english",publish:"1940",edition:"2005"},
  {bookwn:"khan",bookn:"sceinece",publish:"1980",edition:"2010"},
  {bookwn:"best",bookn:"urdu",publish:"1989",edition:"2014"},

]
//let items=abdul.filter((item)=>item.edition==2000)
let items=abdul.filter((item)=>{
  return item.edition==2005 && item.bookn==="english";
})


//console.log(items)

let mynumbers=[1,2,3,4,5,6];
//const number=mynumbers.map((num)=>num +10)
const newnums=mynumbers
                      .map((num)=>num*10)
                      .map((num)=>num +1)
                      .filter((num)=>num>=40)
//console.log(newnums);
//reduce
const myn=[1,2,3]
const mytotal=myn.reduce(function(acc,currval){
  console.log(` acc: ${acc} and curvalue ${currval}`);
  
  return acc+currval
},0)
//console.log(mytotal);



