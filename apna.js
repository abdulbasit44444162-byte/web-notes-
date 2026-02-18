/*function bro() {
    console.log("basit");

    
}
setTimeout(bro,4000)//setTimeout we use here that in how many time after we execute this code or task 2sec=2000
//now we can write the code another way
console.log("one");
console.log("two");//here we can say asyncroneous programming
setTimeout(()=>{

console.log("basit");

},4000)
console.log("three");
console.log("four");
//CALLBACKs:A callback is a function as an argument to another function:its means when we pass function inside another function

function sum(a, b) {
    console.log(a + b);
}

function calc(a, b, sumCallback) {
    // You must call the function passed into the parameter 
    sumCallback(a, b); 
   
}

// Pass the 'sum' function as the third argument
calc(2, 4, (a,b)=>{
    console.log(a+b);
    

});
function getdata(dataid,getnextdata){//THIS SOLVE BELOW IN THE PROMISE CHAINING WAY
setTimeout(()=>{
    console.log("basit",dataid);
    if (getnextdata) {
        getnextdata();
    }
    
},2000)
// so this callled callback hell .not  good and this type of programming difficult to understand.so to slove this matter come(promise)
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        })
    })
})
//PROMISE TOPICS START 
  let prom=()=> { return new Promise((resolve,reject)=>{

    console.log("i am a promise");
   // resolve("i think you are good boy")
   resolve("sucess");
});
};
let promis=prom();
promis.then((res)=>{

    console.log("promise fullfilled",res);
    
});
promis.catch((err)=>{


    console.log("netwokr error",err);
    
})
//PROMISE CHAINING
function asuncfun(){
return new Promise((reslove,rejected)=>{
    setTimeout(()=>{
        console.log(" data1");
        reslove("welldone..........>");
        

    },3000);

});

}
function asuncfun2(){
return new Promise((reslove,rejected)=>{
    setTimeout(()=>{
        console.log(" data2");
        reslove("welldone..........>");
        

    },4000);

});

}
console.log("fecting data 1 .............>");

let p1=asuncfun();
p1.then((res)=>{
    console.log(res);
    console.log("fecting data 2 .............>");

let p2=asuncfun2();
p2.then((res)=>{
    
    
})

})
function getdata(dataid){
    return new Promise((resolve,reject)=>{

setTimeout(()=>{
    console.log("basit",dataid);
      resolve("sucess")
    
},3000);

 });


}
getdata(1).then((res)=>{
           console.log(res);
                             //this is actually we say chaining
  return getdata(2);

})
.then((res)=>{

    console.log(res);
    return getdata(3)
}).then((res)=>{
    console.log(res);
    
})
//NOW WE STUDY ABOUT ASYNC AND AWAIT 
async function basit() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

              console.log("hello world");
              resolve("good job")
        },2000)


    })
    
    
    
}
async function brokhan() {
    
 await   basit();
 
}
brokhan();


function basit() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

              console.log("hello world");
              resolve("good job")
        },2000)


    })
    }
    async function khani() {
        console.log("data1");
        
        await basit(1);
         console.log("data1");
        await basit(2);
         console.log("data1");
         await basit(3);

    }
    khani()//here we call fucntion and in another function we async it and then function call. but here is another way best to prevent
    //IIFE:it means immediately invoked function Expression*/
    function basit() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

              console.log("hello world");
              resolve("good job")
        },2000)


    })    // here code atumaticaly run without calling it
    }
   ( async function () {
        console.log("data1");
        
        await basit(1);
         console.log("data1");
        await basit(2);
         console.log("data1");
         await basit(3);

    })();
   // apna college
    