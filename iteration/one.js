for (let i = 0; i <= 10; i++) {
    if (i==7) {
        console.log("aura");
        
    }
   console.log(i);
   
}

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i*j);
      
        
    }
    
}

for (let i = 0; i < 5; i++) {
    if(i==3){
        console.log("3 detected");
        break
    }
    console.log(`value of i is ${i}`);
    
    
}
for (let i = 0; i <= 5; i++) {
    if(i==3){
        console.log("3 detected");
        continue    
    }
    console.log(`value of i is ${i}`);
    
    
}