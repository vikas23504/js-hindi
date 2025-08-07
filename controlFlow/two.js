// code syntx
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let day = 3 // select 1 to 7 no.
switch (day ) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;

    default:
        break;
}

//  truthy and falsy value
let Name =false
if (Name) {
    console.log("truthy");
    
}else{
    ("falsy");
}

// nullish coalscrig opreator
let val1 = 0 ?? 10
let val12 = undefined ?? 233
let val3 = null ?? 10 ?? 23

//  terniary operator
let icePrice = 400
icePrice>=100? console.log("less than price"):console.log("more than");
