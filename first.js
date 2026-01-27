//variables and data types
/*
console.log("basitkhan")
let a=90;
b=10;
console.log(a,b)
a=2;
b=1;
console.log(a,b)
const c=10;
console.log( "typeof c" ,typeof c);
let d=null;
console.log( "typeof d" ,typeof d);
 let e=true;
 console.log( "typeof e" ,typeof e);
 let f=BigInt(123627647627642647262);
 console.log("typeof f",typeof f);
 let g="basit khan";
console.log("typeof g",typeof g)
let h=Symbol("12");
console.log("typeof g",typeof h)
// control flow statements
let j=4;
let k=2;
/* here topic if else
if (j>k) {
    console.log("j is greater than k")
    
}
else{

    console.log("k is less than j");
    
}*/
/* here topic is ifelseif
let marks=80;
if(marks>=90) {
    console.log('A');
    
    
}else if(marks>=70){
    console.log('B');
    
}
else if(marks>=45){
    console.log('C');
    
}else{

    console.log('fail');
    
}
here topics start of switch
let fruit="Apple";
switch (fruit) {
    case "Apple":console.log("Apple:Rs 90");
    break;
    case "Banna":console.log("Banna:Rs 30");
    break;
    case "Mango":console.log("Mango:Rs 40");
  break;
    default:console.log("invalid search");
    
        
}
  
  // loops 
  //we use for loop when we know how many time need to execute code 
  for(let i=1;i<11;i++){
    console.log(i)
    
  }
   
   //run the  code when coditions is ture and keep running untill condition become false.
   here i will see it deeply
   let num=25;
   let count=0;
   while (num%5==0) {
    count++
    num=num/5;
   } 

console.log(count);
//do while loop just run one time even false
let g=5;
let h=10;
do{
    console.log(g);
    g++;
    

}while (g>h) 
    

 for(let i=1;i<11;i++){
    if(i==4)
    {
        continue;//here work of continue is to jump on that value and go head

    }
    if(i==7){
        break;//here mean to break on that value which give and don't go forward
        
    }
    console.log(i)
    
  }
 //function topic:this topic is function decleration
 function basit() {
    let a=23;
    let b=23;  // simple functions
    console.log(a+b);
    
 }
 basit()
 
function basit(a,b) {
    
      // here function decleare with parameter
    console.log(a+b);
    
 }
 basit("abdul","basit")
 function khan(a,b){
    return a-b;// if we want that i return somthing and then display so first we store in it in 
               // a variable so then we display it.
 }
let  bro= khan(5,4);
console.log(bro)
function banana(c,d) {
     // we not write return here so give me undefined 
}
let sum= banana(4,5)
console.log(sum);

// Function Expression :is those when we write with variable 
const minus=function(a,b) {
    return a-b;
    
}
let subtraction=minus(8,4);
console.log(subtraction);

// arrow function
let div=(a,b)=>a/b
let division=div(8,4)
console.log(division);
//templete letrial
let intro=(basit,khan,chola)=>{

    console.log(`my name is ${basit}and this my scond ${khan} my age ${chola}`);
    
}
intro("basit","barani",10)
// Array topic
//create 
let array=["basit","khan","bloa"]
//read
console.log(array[0]);// here access through index
//update
array[0]="bolama";
console.log(array);
delete array[2]
console.log(array);
//methods
console.log(array.length);

let str=array.join("$")

console.log(array);
console.log(str);

//push :mean adding at start 
let arra=["basit","khan","bloa"]
//arra.push(array=["basit","khan","brona ","badmash"])
//console.log(arra,array)
//pop :mean delteing at end
 //let jona=array.pop()
 //console.log(arra+"end value delete"+jona);
 // unshift :mean that you add somthing in start so add 
arra.unshift("jangezkhhan")
 console.log(arra);
 let delt=arra.shift();
 console.log(arra+"  delete first element in array  is "+delt)
 //excercise search about array methods*/
 //higher oder function:these work on arrays

 
 

 
 