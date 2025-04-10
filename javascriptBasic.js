// 1 Deloitte
console.log(1 + false);
console.log(1 + true);
console.log(1 + null);
console.log(1 - false)
//1,2,1,1
const arr1 = [1, 2, 3];
const str = "1,2,3";
console.log(arr1 == str); true
console.log(arr1 === str); false

console.log("5" == 5) // true
console.log("5" === 5) // false


let x = 10;
{
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 10

var y = 20;
{
    var y = 30;
    console.log(y); // 30
}
console.log(y); // 30

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof 0); // number
console.log(typeof ""); // string
console.log(typeof []); // object


//-----------------------------------------------
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(NaN != NaN); // true

//--------------------------------------------


//----------
console.log(z); // undefined
var z = "hello"
console.log(z); // hello

console.log(10 + 2 * 3) // 16  high precedence *  
console.log(10 - 2 * 3) // 4      high precedence *    
console.log(10 / 2 * 3) // 15  high precedenc  / 
console.log(10 / 2 - 3) // 2

console.log(10 % 3) // 1

console.log([1, 2, 3] + [1, 3, 4])
// [1,2,3,1,3,4]  array to string
//  additon operater with two array javascript will convert to String


console.log([1, 2, 3] - [1, 3, 4])
// NaN  array to string then string to number
console.log("a" - "b") // NaN
console.log("a" + "b") // ab
console.log("a" * "b") // NaN
console.log("a" / "b") // NaN
console.log("a" - 1) // NaN




console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined) // NaN
console.log(+[]); // 0
console.log(+NaN)       // NaN
console.log(+0)         // 0
console.log(+1); // 1
console.log(+"hello");  // NaN
console.log(!"hello"); // false
console.log(!""); // true
console.log(!0); // true
//------------


//------------------------
//  when we try to add two arrays then javascript will convert arry to string using tyepcohersion
console.log([] + []) // ""
console.log([] + [1]) // "1"
console.log([1] + []) // "1"
console.log([1] + [2]) // "12"
console.log([1] + [2, 3]) // "123"
console.log([1, 2] + "abc") // "1,2abc"

//----------------------------


//------------------
function getAge(...args) {
    console.log(arguments); // [40]
    // arguments is an array-like object
    // that contains the arguments passed to the function
    console.log(args);[40]
    console.log(typeof arguments); // object
    console.log(typeof args); // object
    console.log(arguments.length); // 1
    console.log(args.length); // 1

}
getAge(40);
//--------------


//------------
// TCS

// in javascript when ever had duplicate property in object then last property will be taken
const obj = {
    a: 'one',
    b: 'two',
    a: 'three'
}
console.log(obj) // { a: 'three', b: 'two' }
// when we have duplicate property in object then last property will be taken

var L = 1, T = L = typeof T;
console.log(L); // 1
console.log(T); // number
console.log(typeof L); // number
console.log(typeof T); // string


//------------------------
console.log('1' - - '1'); // Coerces strings to numbers and evaluates as 1 - (-1) = 2
//---------------------------


console.log(1 + 2 + "3"); // 33


console.log(false || null || "hello") //  "hello"  OR operatore will return the first truthy value
console.log(false && null && "hello") // false  AND operatore will return the first falsy value 
//  OR operatore will return the first truthy value
//  && operatore will return the first falsy value
//or // 1st false is falsy so it will go to next null which is also falsy so it will go to next "hello" which is truthy



//---------------

const numbers = [1, 2, 3, 4, 5];
const [x1, ...y1] = numbers;
console.log(x1); // 1
console.log(y1); // [2,3,4,5]




const str1 = "abc" + + "def";
// Concatenates "abc" with NaN because +"def" tries to convert "def" to a number, resulting in NaN
console.log(str1); // "abcNaN"



let newList = [1].push(2);
// push returns the new length (2), 
// not the array, so newList is a number, 
// causing errors in subsequent operations.
// push method will return the new length 
// of the array after adding the element
// console.log(newList.push(3))



//------------------
// 1. The delete operator removes a property from an object.
let nums = [1, 2, 3, 4, 5];
delete nums[2]; // Deletes the element at index 2
console.log(nums); // [1, 2, <1 empty item>, 4, 5]

//  to delete corret way is using splice meth
nums.splice(2, 1); // Removes the element at index 2
console.log(nums); // [1, 2, 4, 5]

//----------------


//-------
console.log(0 || 1)    // 1  // 0 is falsy so it will go to next 1 which is truthy
console.log(1 || 0)    // 1  
console.log(0 || 0)    // 0
console.log(1 || 2)    // 1 first truthy will be returned
console.log(1 && 0)    // 0  first falsy will be returned
console.log(0 && 1)    // 0
console.log(1 && 2)   //2 2 is last truthy value
console.log(1 && 0 && 2) // 0 first falsy will be returned

//-----



//--------
// postfix operatore


let numss = 0; // Initialize `numss` to 0
console.log(numss++); // 0
// Logs the current value of `numss` (0),
//  then increments it by 1 (postfix increment).

console.log(numss); // 1
// Logs the updated value of `numss`,
//  which is now 1 after the previous increment.

console.log(++numss); // 2
// Increments `numss` by 1 
// first (prefix increment), 
// making it 2, then logs the updated value.

console.log(numss); // 2
// Logs the current value of `numss`,
//  which remains 2 after the previous increment.

console.log(numss--); // 2
// Logs the current value of `numss` (2),
// then decrements it by 1 (postfix decrement).



//------


console.log(5 < 8 > 2)
console.log(5 < 8 && 8 > 2) // true
console.log(5 < 8 && 8 > 2) // true
console.log(1 > 19 < 2) // true


//console.log(data()) // undefined
var data = function () {

    console.log("hello");
}


console.log(data()) // hello



const arr = [1, 2, 3];
// Initializes an array with three elements: [1, 2, 3].

arr[5] = 9;
// Sets the value at index 5 to 9, leaving indices 3 and 4 as empty slots.

console.log(arr);
// Logs the array: [1, 2, 3, <2 empty items>, 9].

console.log(arr.length);
// Logs the length of the array: 6, as the highest index is 5 (0-based indexing).



const obj2 = { a: 1 };
obj2.a = 20;
console.log(obj2)



const obj5 = [10, 20, 30];
obj5[1] = 20;
console.log(obj5) // TypeError: Assignment to constant variable
const obj4 = { c: 1 };
obj4.c = 2;
console.log(obj4) // { c: 2 }

const obj3 = { c: 1 };
//obj3 = { d: 2 };

//console.log(obj3)
//
//  // TypeError: Assignment to constant variable




let xyz = {
    a: undefined,
    b: null,
}
console.log(JSON.stringify(xyz)) // {"b":null}
console.log(JSON.parse(JSON.stringify(xyz))) // { b: null }
console.log(xyz) // { a: undefined, b: null }



const str5 = "hello";
str5.data = "world";
console.log(str5) // hello
console.log(str5.data) // undefined


const s1 = "hello";
const s2 = new String("hello");
console.log(s1 == s2); // true
console.log(typeof s1); // string
console.log(typeof s2); // object
console.log(s1 === s2); // false





console.log(Boolean({}))
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean([])) // true
console.log(Boolean([]))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(1)) // true
console.log(Boolean("hello")) // true
console.log(Boolean("0")) // true
console.log(Boolean("false")) // true
console.log(Boolean(" ")) // true   
console.log(new Boolean(false)) // Boolean { false }
console.log(Boolean(new Boolean(false))) // true




//----------------

console.log(1 == "1") // true
console.log([] == []) // false
console.log([] == ![]) // true
// console.log([] === []) // false
console.log({} == {}) // false  
console.log({} == !{}) // true
console.log({} == true) // false
console.log({} == []) // false
console.log({} == 0) // false

// Notes


//     || with 2 truthy value
//  then javascript will return the first truthy value
// exp: (5 || 10) // 5
//     // 5 is truthy so it will return 5

//     && with 2 truthy value
//  then javascript will return the last truthy value

// console.log(5 && 10) // 10
//     // 10 is last truthy value so it will return 10
//     // 5 is truthy so it will return 10
//     ||  with 2 falsy value
//     then javascript will return the first falsy value

// console.log(0 || 0) // 0
//     // 0 is falsy so it will return 0
//     // 0 is falsy so it will return 0
//     && with 2 falsy value
//     then javascript will return the first falsy value
// console.log(0 && 0) // 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0
// // 0 is falsy so it will return 0       






typeof null // object
typeof undefined // undefined
typeof NaN // number
typeof 0 // number
typeof "" // string
typeof [] // object
typeof {} // object
typeof function () { } // function



//-------
setTimeout(() => {

    console.log('check1')
}, 0)

Promise.resolve().then(() => {
    console.log('check2')
})
// Promise.reject().then(() => {
//     console.log('check3')
// })



process.nextTick(() => {
    console.log('check5')
})
setImmediate(() => {
    console.log('check6');
});
// setInterval(() => {
//     //  console.log('check4')
// })





//-------

// const [p, h = 20] = 4;
// console.log(p * h); // 1000


// javascript [] or {}  consider truthy value


const arr6 = [1, 2];
for (var i = 0; i < arr6.length; i++) {
    setTimeout(() => {

        console.log(i)
    }, [1000])
}



// UNIORY OPERATORE IN JAVASCRIPT CONVERT TO NUMBER 




