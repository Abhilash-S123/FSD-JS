// const companyName = "abc"

// function showcompanyName() {
//     console.log('company name', companyName);  
//      function innerFunction() {
//         console.log('company name in inner function', companyName);        
//      }     
// }

// // showcompanyName();
// // innerFunction();  //  this does not work


// if (10 < 20) {
//     let city = "varkala"
//     // var city = "varkala"
//    console.log('city', city);
   
// }

// console.log('outside city', city);
let country = "India";

function outerFn() {
  let state = "kerala";
  function innerFn() {
    console.log(country);
    console.log(state);
  }
  innerFn()
}

outerFn()

