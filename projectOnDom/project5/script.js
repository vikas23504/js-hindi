const randomColor = function(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return`rgb(${r},${g},${b})`
}
let clrChanger;
document.querySelector('#start').addEventListener('click',function(){
    if(!clrChanger){
     clrChanger =setInterval(function(){
        document.body.style.backgroundColor = randomColor();
        console.log("color change");
        
    },1000)
    }

})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(clrChanger)
    clrChanger = null;
})