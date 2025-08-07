let temp = 410
if (temp < 50) {
    console.log("exucated");
} else {
    console.log("temp is greater than 50");
}


let light = "yello"
if(light=="red"){
    console.log("stop");
}else if(light=="yellow"){
    console.log("slow");
    
}else if(light=="green"){
    console.log("go");
    
}else{
    console.log("you have enter wrong light colour ");
    
}

// multiple condition check krne k liye
//  && (AND)
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

// || (OR)
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("Go to work.");
}

// ! (NOT)
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first.");
} else {
  console.log("Welcome back!");
}

// nested if else
    let number = 5;

if (number > 0) {
  if (number % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else {
  console.log("Non-positive number");
}
