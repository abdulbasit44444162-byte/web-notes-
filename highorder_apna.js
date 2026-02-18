// here we use FOREACh loop which use in arrays and this also we say method
// arr.forEach(callbackFunction)
//CAllaback==here ,it is a function to execute for each element in the array
//"A callback is a fucntion which we passed as argument in another funtion"
let arr=[1,2,3,4,5,6]
arr.forEach(function myname(val){
  //console.log(val);
  })// now we pass it as arrow fnction
  arr.forEach((val)=>{ //,index,arr

   //console.log(val*val);
   

  })
// some more ARRAY METHods(its important)
//MAP:(creates a new array with the results of some operations.the value its callback returns are
//   used to form new array)
arr.map(function mybro(val){
       //console.log(val*2);
       
})
let newarray=arr.map(function mybro(val){
       return val;
       
})
//console.log(newarray);
//Filter(creates a new array of elements that give true for condition/filter)
let basitnew=arr.filter((val)=>{
    return !(val % 2===0);
})
//console.log(basitnew);
//console.log(arr)
//Reduce(performs some operations & reduce the array to a single value.it returns that single value)
let khanarr=arr.reduce((prev,curr)=>{
  return prev+curr ;
})
console.log(khanarr);6

