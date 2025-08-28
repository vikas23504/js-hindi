// document.getElementById('night').onclick = function(){
//     alert("pictured clicked")
// }

// document.getElementById('night').addEventListener('click',function(e){
//     alert('hey')
// })
document.getElementById('images').addEventListener('click',function(e){
   console.log(" cliked inside the ul");
   
})

document.getElementById('ground').addEventListener('click',function(e){
    console.log('pic clicked');
    e.stopPropagation();
    
},true)
document.getElementById('google').addEventListener('click',function(e){
    console.log("google clicked");
    e.preventDefault();
    
})


