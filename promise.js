const promiseOe = new Promise(function(resolve,reject){
    if (true) {
        resolve("work is complete ")
        console.log('true');
        
    }else{
        reject("work is not complete")
        console.log('false');
        
    }
    // resolve()
    
})

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task is complete");
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})

// 2

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : " vikas",class : " b.tech"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    
})

// 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : " vikas singh ",password : " 1234567889"})
        }else{
            reject('error')
        }

    },1000)
})

 const username = promiseThree.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("ho gya"))

//  5
const promiseFour = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : " javascript ",password : " 1234567889"})
        }else{
            reject(' js error')
        }

    },1000)
})

async function consumePromiseFour(params) {
    try {
const response = await promiseFour
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFour()


