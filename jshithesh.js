    
    //console.log(typeof("basit"))
    /*let score="33abs";
    console.log("here show score0",typeof(score))
let basit=Number(score)//here show string convert in to number through "Number"
  console.log("here show score1",typeof(basit))
  console.log("here show score1s",basit)
  
 
  console.log(2>3)
  // two type of memory
  //satack(prmitive) ,heap(non-permitive)
  let mybasit="basit";
  let second=mybasit
  second="khan"
console.log(mybasit);
console.log(second);
//here object
let user={


    email:"basi khan.com",
    age:"18",
    class:"bs ai"
}
console.log(typeof(user))

/*let usertwo=user;this topic relate to object
usertwo.email="basibro";
console.log(user.email)
console.log(usertwo.email)
//string topic
const name="khan"
const rep="bro"
console.log(name +rep);
console.log(`my name is ${name} and my rep count is ${rep}`)
//const khan =new String('basit')
//array topic is start here
let array=[1,2,3,4,5]
//array methods start here
 array.push(6,7,8)
array.pop()//pop means see last value and remove it
let arroy=[new Array(1,2,3,4)]
console.log(arroy);
array.unshift(0)
array.shift()//he remove start value

console.log(array.includes(4));//include mean that value is persent in array or not
console.log(array.indexOf(4))
let  newarray=array.join()
console.log(array)
console.log(newarray)
console.log(typeof(newarray))
//topic slice,splice;   

let erray=[0,1,2,3,4,5]
console.log("A",erray);
let new1=erray.slice(1,3)
console.log("B",new1);
let new2=erray.splice(1,3)
console.log("C",new2) 
const marval=["basit","khan"]
const dc=["bro","shazeb"]
marval.push(dc);
console.log(marval);
let all=marval.concat(dc);
console.log(all);//its concat two arrays in one place
let alldata=[...marval,...dc]//but here multiple array we concat 
console.log(alldata);
const anotherarray=[1,2,3,4,5,[4,5],87,[2,4,[2,4]]];
const realanother=anotherarray.flat(Infinity);
console.log(realanother);

const bannu=Array.isArray(["basit","banna"]);//here we check that its is array or not
const   pakistan=Array.from("basit");//here it split string in to pieces

console.log(bannu);
console.log(pakistan);

//TOPIC of OBJECT LITERALS
//in object we use jsut two things "key:values"
const mysm=Symbol("key1")//here we take symbole and put in object and print as symbol
const jsuser={name:"hitesh",
  "fullname":"abdul basit", //here we use this two ways console.log(jsuser["fullname"])
      age:36,
     [mysm]:"mykey1",//this correct syntax for symbol in objct as show symbol in it.for interview Q
      location:"pakistan",
      lastlogin:["basit","khan"]
}

console.log(jsuser["fullname"]);
console.log( jsuser[mysm]);

//jsuser.name="basit khan";
//Object.freeze(jsuser)// here freeze mean if you want that lock your value not change any one to it
//jsuser.name="brokhan";
//console.log(jsuser.name);
//console.log("hello basit khan from nodjs");
jsuser.greeting=function(){
  console.log("hello khan");
  
}
jsuser.greetingtwo=function(){
  console.log(`hello ,${this.name}`);// string interpulation .
  
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());*/
//HERE HOW TO LEARN ABOUT OBJECTS SINGELTON OR CONSTRUCTORC
// ;
//const tindeer=new Object()its same as like below but different is that this is singlton objct
const tindeer={};// this no singolten
tindeer.id="123"
tindeer.name="basit"
tindeer.isloggedIn=false;

//console.log(tindeer);
const regular={
  fullname:{
    userfullname:{
        userfisrtname:"basit king",// here we learn about nested object------------
        lastname:"khan"
    }
  }

}
//console.log(regular.fullname.userfullname.lastname);
//here how to combine objcts eachothers means emerges
const boj1={1:"a",2:"b"}
const boj2={3:"a",4:"b"}
//const obi3={boj1,boj2}
//const obi3=Object.assign({},boj1,boj2)
const obi3={...boj1, ...boj2}//qeuestion
//console.log(obi3);
//console.log(tindeer);
//when use database use this sayntax
const ueres=[
 {
  id:1,
  email:"ghmail.com"
 },
{
  id:1,
  email:"ghmail.com"
 },
 {
  id:1,
  email:"ghmail.com"
 }
]
//ueres[1].email;
//console.log(Object.keys(tindeer));
//console.log(Object.values(tindeer));
//console.log(Object.entries(tindeer));
// if i want that i tell to object this type of keys you have keep or values 
//console.log(tindeer.hasOwnProperty('isloggedIn'));
// TOPIC IS DESTRUCTURING (use for arise some specific elements)
const course={
  coursename:"js in hindi",
  price:"999",
  courseinstructor:"basit"
}
//course.courseinstructor;
const {courseinstructor,price}=course // here we do distructuring 
console.log(courseinstructor,price);
// here we learn about spread OPERATOR WE DONOTE IT(...)
const obj5={
    name: "basit",
    class:"BS CS",
    college:"SKA BALA"

}
const obj6={...obj5,name:"khan bro"}// here we use spread operator.(it means ka jab kisi two objects ma just ak key ko change karna ho aur baki same ho tho spread operator use kartha ha)
//console.log("here we use spread operator to change just name \nwey",obj6);



