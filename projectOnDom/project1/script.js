 const boxes = document.querySelectorAll('.box')
//  console.log(boxes);
boxes.forEach(function(element){
//   console.log(element);
element.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor=`${element.id}`;
})
  
})
 
