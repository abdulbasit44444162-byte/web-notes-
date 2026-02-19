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
// --- Initial Variables ---
let stringValue = "123.45";
let numberValue = 42;
let booleanValue = true;
let emptyString = "";
let nonNumericString = "pizza";
let nullValue = null;
let undefinedValue;

console.log("--- Initial Values and Types ---");
console.log(`stringValue: ${stringValue} (Type: ${typeof stringValue})`); // Output: stringValue: 123.45 (Type: string)
console.log(`numberValue: ${numberValue} (Type: ${typeof numberValue})`); // Output: numberValue: 42 (Type: number)
console.log(`booleanValue: ${booleanValue} (Type: ${typeof booleanValue})`); // Output: booleanValue: true (Type: boolean)
console.log(`emptyString: ${emptyString} (Type: ${typeof emptyString})`); // Output: emptyString:  (Type: string)
console.log(`nonNumericString: ${nonNumericString} (Type: ${typeof nonNumericString})`); // Output: nonNumericString: pizza (Type: string)
console.log(`nullValue: ${nullValue} (Type: ${typeof nullValue})`); // Output: nullValue: null (Type: object) - Note: typeof null is object
console.log(`undefinedValue: ${undefinedValue} (Type: ${typeof undefinedValue})`); // Output: undefinedValue: undefined (Type: undefined)


// --- Explicit Conversion (Manual) ---

console.log("\n--- Explicit Conversion Examples ---");

// To Number
let numFromString = Number(stringValue);
console.log(`Number from stringValue: ${numFromString} (Type: ${typeof numFromString})`); // Output: 123.45 (Type: number)

let numFromBoolean = Number(booleanValue);
console.log(`Number from booleanValue: ${numFromBoolean} (Type: ${typeof numFromBoolean})`); // Output: 1 (Type: number)

let numFromEmptyString = Number(emptyString);
console.log(`Number from emptyString: ${numFromEmptyString} (Type: ${typeof numFromEmptyString})`); // Output: 0 (Type: number)

let numFromNonNumericString = Number(nonNumericString);
console.log(`Number from nonNumericString: ${numFromNonNumericString} (Type: ${typeof numFromNonNumericString})`); // Output: NaN (Type: number)

let integerFromString = parseInt(stringValue);
console.log(`parseInt from stringValue: ${integerFromString} (Type: ${typeof integerFromString})`); // Output: 123 (Type: number)

// To String
let strFromNumber = String(numberValue);
console.log(`String from numberValue: "${strFromNumber}" (Type: ${typeof strFromNumber})`); // Output: "42" (Type: string)

let strFromBoolean = booleanValue.toString();
console.log(`String from booleanValue: "${strFromBoolean}" (Type: ${typeof strFromBoolean})`); // Output: "true" (Type: string)

// To Boolean
let boolFromNumber = Boolean(numberValue);
console.log(`Boolean from numberValue: ${boolFromNumber} (Type: ${typeof boolFromNumber})`); // Output: true (Type: boolean)

let boolFromEmptyString = !!emptyString; // Using double not operator (implicit in an expression)
console.log(`Boolean from emptyString: ${boolFromEmptyString} (Type: ${typeof boolFromEmptyString})`); // Output: false (Type: boolean)

let boolFromNull = Boolean(nullValue);
console.log(`Boolean from nullValue: ${boolFromNull} (Type: ${typeof boolFromNull})`); // Output: false (Type: boolean)


// --- Implicit Conversion (Coercion by JavaScript) ---

console.log("\n--- Implicit Conversion Examples (Coercion) ---");

let result1 = "5" + 2; // Number 2 is implicitly converted to a string for concatenation
console.log(`"5" + 2 = ${result1} (Type: ${typeof result1})`); // Output: "52" (Type: string)

let result2 = "5" - 2; // String "5" is implicitly converted to a number for subtraction
console.log(`"5" - 2 = ${result2} (Type: ${typeof result2})`); // Output: 3 (Type: number)

let result3 = true + 1; // Boolean true is implicitly converted to the number 1 for addition
console.log(`true + 1 = ${result3} (Type: ${typeof result3})`); // Output: 2 (Type: number)

if ("hello") { // Non-empty string is implicitly converted to true in a boolean context
    console.log(`Condition "hello" is truthy`);
}

let numImplicit = +"123"; // Unary plus operator implicitly converts string to number
console.log(`Unary +"123" = ${numImplicit} (Type: ${typeof numImplicit})`); // Output: 123 (Type: number)


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

 
 

 

 
