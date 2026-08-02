// for (let i = 0; i < 10; i++) {
//     console.log("count", i);
    
// }

// let scope = 10
// while (scope > 0) {
//    console.log(scope);    
//    scope--
// }

// let scope = 10
// do {
//   console.log(scope);
//   scope--
// } while (scope > 0) 

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);  
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);  
// }


// let fruits = [ 'mango', 'banana', 'orange', 'grape', 'apple' ]
// let lastIndex = fruits.length - 1
// console.log(lastIndex);
// console.log(fruits.length);

// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);    
// }

// for (const fruit of fruits) {
//     console.log(fruit);               // forof loop used only for array    
// }

// let fruits = [ 'mango', 'banana', 'orange']

// fruits.push('grape')
// fruits.pop("orange")
// fruits.shift("mango")
// fruits.unshift("onion")
// console.log(fruits);



// let fruits = [ 'mango', 'banana', 'orange', 'grape', 'apple' ]

// fruits.splice(2, 1)    // (index, number of elements)   to remove
// fruits.splice(2, 0, "abc")   // to add elements
// fruits.splice(2, 1 , "abhilash")  // to replace elements

// console.log(fruits.slice(1, 3));   // both are index
// console.log(fruits);

//  let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.map((n) => n * 2));
// console.log( numbers.filter((n) =>  n > 3) );
// console.log( numbers.reduce((sum, n) => sum + n, 0));




let user = {
    name: "abhilash",
    age: 26
}

// console.log(user.name);
// console.log(user['name']);
// user.place = 'varkala'
// user.age = 18
// delete user.name
// console.log(user);


// let keys = Object.keys(user)
// let values = Object.values(user)
// let entries = Object.entries(user)
// console.log(keys)
// console.log(values);
// console.log(entries);

for (let key in user) {
    console.log(user[key]);    
}







