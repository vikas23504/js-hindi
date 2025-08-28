// setTimeout(function(){console.log("vikas");
// },2000)
// setInterval(function(){console.log("vikas");
// },2000)

const changeText = function(){
    document.querySelector('h1').innerHTML="vikas is best"
}
 const stopTime = setTimeout(changeText,3000)
  
document.querySelector('#stop').addEventListener('click',function(){
   
    clearTimeout(stopTime);
     console.log("stop");
    
 })
//  console.log(stop);
 

