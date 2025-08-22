 const form = document.querySelector('form')
 const height =  document.querySelector('.height')
 
 const weight =  document.querySelector('.weight')

form.addEventListener('submit', function(event){
    event.preventDefault();
     const strheight= height.value;
     const strweight= weight.value;
     let heightInMeters = strheight / 100;
     let result = (strweight/(strheight*strheight)*1000).toFixed(3)
         const fresult = document.querySelector('.result')
         fresult.innerHTML=`${result}`
    //   console.log(fresult);
    // fresult.className="myresult"
    //  const resVal =  document.createTextNode(result)
    //  fresult.append(resVal)
    //  document.body.append(fresult)
    //  console.log(resVal);
     
      

     
     

})