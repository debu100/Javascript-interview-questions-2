//*1
let a = [];
let b = [];
//? memeory location is not same---array is non primitive data type
console.log(a == b); //false
console.log(a === b); //false

//*2
let aa = [];
let bb = aa;
//? Deep copy---both's memoery location is same
console.log(aa == bb); //true
console.log(aa === bb); //true

//*3
let aaa = [20];
let bbb = [20];
console.log(aaa[0] == bbb[0]); //true
console.log(aaa[0] === bbb[0]); //true

//*4
let aaaa = [1, 2, 3, 4];
let aaaaa = {
  nam: "Anil",
};

console.log(...aaaa); //1 2 3 4

//*5
console.log(typeof NaN); //number

//*6
let data = 10 - -10;
console.log(data); //20

//*7
const set = new Set([1, 1, 2, 3, 4]);
console.log(set); //Set{1,2,3,4}--the 2nd 1 is removed

//*8--Interesting
let daata = {
  nam: "Anil",
};
console.log(delete daata.nam); //{}<--not the output, the output is true---as delete functionality is occuring perfectly---//? directly with console.log

//*9--Interesting
let daataa = {
  nam: "Anil",
};
console.log(delete daataa); //false---as delete functionality is not occuring perfectly---can't delete a variable like this--//? directly with console.log

//*10
const dataa = ["a", "b", "c"];
const [y] = dataa;
const [x, p] = dataa;
console.log(y); //"a"
console.log(x, p); //"a","b"

//*11--Interesting
const dataaa = ["a", "b", "c"];
// const [y1] = dataaa;
//? we need the 2nd value using only one destructed variable---how to get it?
//? Just place a , infornt of varibale name
const [, , y1] = dataaa;
const [, , , y3] = dataaa;
const [, y2] = dataaa;
console.log(y1); //c
console.log(y2); //b
console.log(y3); //undefined

//*12
const obj = {
  nam1: "Anil",
  age: 45,
};
//? Object destructuring
const { nam1 } = obj;
const { age } = obj;
console.log(nam1, age);

//*13
const obj1 = {
  nam1: "Anil",
  age: 45,
};
const obj2 = {
  location: "Pena",
  pincode: 45999999999999,
};
//? Merge 2 objects---using spread opeartor and destructring concept
const mergedObj = { obj1, obj2 };
const mergedObj1 = { ...obj1, ...obj2 };
console.log(mergedObj);
console.log(mergedObj1);

//*14
const againObj = {
  nam1: "Anil",
  age: 45,
};
const againObj1 = {
  city: "Noting",
};

const newObj = { againObj, ...againObj1 };
console.log(newObj); //{againObj: {…}, city: 'Noting'}

//*15
let againObj2 = {
  nam1: "Anil",
  age: 45,
};
const againObj3 = {
  city: "Noting",
  age: 55,
};
againObj2 = { ...againObj2, ...againObj3 };
console.log(againObj2); //{nam1: "Anil",,age: 55,city: "Noting"}//?order will be same of the same key name but value will be of the last one

//*16---Interesting
const res = false || {} || null;
console.log(res); //true returns {}---empty obj is a truthy value--//?basically returns the "first" truthy value itself

//*17---Interesting
const res1 = null || false || "";
console.log(res1); //false returns empty string ---all are falsy values//?basically returns the "last" fasly value itself

//*18---Interesting
const res2 = [] || 0 || true;
console.log(res2); //[]//?basically returns the "first" truthy value itself

//*19
console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}
//? pending,resolve,rejected,fulfilled

//*20
console.log("💓" === "💓"); //?true---emojis have unicode they are compared, here both unicodes are same

//*21
// JSON.parse(); //? what will this method do?---error--parses json to a javascript value

//*22
let nama = "Anil";
function getName() {
  console.log(nama); //int.js:145 Uncaught ReferenceError: Cannot access 'nama' before initialization
  let nama = "Babu";
}
// getName();

//*23
let nama1 = "Anil";
function getName() {
  console.log(nama1); //Anil
}
getName();

//*24---Interesting
console.log(`${((x) => x)(`I Love`)} You`); //I Love You

//*25---Interesting
//? output should be 6---third one
function sumValues(x, y, z) {
  return x + y + z;
}

// console.log(sumValues([...1, 2, 3])); //TypeError: 1 is not iterable
console.log(sumValues([...[1, 2, 3]])); //1,2,3undefinedundefined---useless
console.log(sumValues(...[1, 2, 3])); //6
console.log(sumValues([1, 2, 3])); //1,2,3undefinedundefined--useless

//*26---Interesting
const nammma = "Let's get married";
console.log(!typeof nammma === "object"); //?false
//? The above concept is order of execution---the ! opeartor is executed first then the === is checked--it goes from left to right---!typeof nammma is checked first---gives false and false==="object" gives false
console.log(!typeof nammma === "string"); //?false
//? The above concept is order of execution---the ! opeartor is executed first then the === is checked--it goes from left to right---!typeof nammma is checked first---gives false and false==="string" gives false

//*27---Interesting
console.log(typeof function a() {}); //? data type of function is a function

//*28---Interesting
const bol = "a";
const num = 21;
console.log(isNaN(bol)); //?true---is bol not a number?? which is true
console.log(isNaN(num)); //?false---is num not a number?? which is false

//*29
const per = {
  nam: "Anil",
};
Object.seal(per);
//? Now modify this obj---we can't add new properties in sealed objects---we can just modify the existing property values
per.nam = "job";
per.age = 27; //?ignored
console.log(per);

//*30
const c = "data";
console.log(typeof c); //string
//? convert the value to a flase boolean value
console.log(!typeof c); //false
console.log(typeof !c); //boolean

//*31
const c1 = "dtaa";
//? change type from sring to true
console.log(!c1); //?true--value
console.log(!!c1); //?false--value
console.log(typeof !!c1); //?data type--boolean

//*32
let pata = [1, 2, 3];
delete pata[1]; //?---that index no has empty value(blank)
console.log(pata); //(3)[(1, empty, 3)];
console.log(pata.length); //?3---length remains 3

//*33
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];
console.log([...a1, ...a2]); //?(6) [1, 2, 3, 3, 4, 5]---in case of array all the values come in the new array---no values are overwritten

//*34
// let q = 10;
// setTimeout(() => {
//   console.log(q); //100
// }, 0);
// //? settimeout is skipped and value of q is replaced by 100 then executed
// q = 100;

//*35
const a3 = "aa";
const a4 = `aa`;
console.log(a3 === a4); //true--both are string

//*36---Interesting
let a5 = 1;
let a6 = 2;
console.log(--a6 === a5); //?true
//? --c is pre decrement operator

//*37---Interesting
let w = 1;
let w1 = 1;
let w2 = 2;
console.log((w === w1) === --w2); //true===1=flase//?false---as here true===1 we are using === which checks both type and value so here they are not same

//*38---Interesting
console.log(true == 1); //?true--only value is checked and value of true is 1
console.log(true === 1); //?false--both value and type are chekced

//* 39
// console.log(3***3);//?error

//* 41
console.log([[[[]]]]); //[Array(1)]--nested array---all 4

//* 42
//? How to find OS NAME using js?
console.log(navigator.platform);

//* 43
console.log([..."what is this"]); //(12) ['w', 'h', 'a', 't', ' ', 'i', 's', ' ', 't', 'h', 'i', 's']

//* 44
console.log(["str hh yy"]); //['str hh yy']---length 1

//* 45
console.log([] == []); //false--memory location diff
// console.log([] === []); //false--memory location diff

//* 46

//? Find the highest occurnece character in a string

// const strUser = prompt("Enter a string");
// const strChar = prompt("Enter a charater");
// const strLength = strUser.length;
// let strCharCount = 0;
// for (let i = 0; i < strLength; i++) {
//   if (strUser[i] === strChar) {
//     strCharCount++;
//   }
// }
// console.log(`Charcter ${strChar} --- Occurence ${strCharCount} times`);
// console.log("It will be case sensitive");

//* 47

//? Given- "This is Javascript Code"
//? Expected Output- "sihT si tpircsavsJ edoC"

const givenStr = "This is Javascript Code";
// console.log(givenStr.split("").reverse().join(""));
const arrOfgivenStr = givenStr.split(" ");
const resOfArrOfgivenStr = arrOfgivenStr.map((el) => {
  return el.split("").reverse().join("");
});
console.log(resOfArrOfgivenStr.join(" ")); //? sihT si tpircsavaJ edoC

//* 48
//? Find square root of a number
function findSqRoot(num) {
  console.log(Math.sqrt(num));
}
findSqRoot(9);
findSqRoot(25);
findSqRoot(16);
findSqRoot(49);
findSqRoot("Hello");
findSqRoot(-6); //NaN---as sqrt is availabel for the positive numbers

//* 49
//? Find area of a triangle(right angled triangle)
function getArea(b, h) {
  console.log(`Area of triangle is ---${(1 / 2) * b * h}`);
}
getArea(2, 3);
getArea(20, 30);
getArea(29, 9);
getArea(21, 3);
getArea(23, 39);
//? Find area of a triangle(regular triangle)
function getArea1(a, b, c) {
  const s = (a + b + c) / 2;
  const areaOfRegTri = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(areaOfRegTri);
}
getArea1(1, 2, 3); //0
getArea1(1, 2, 5); //NaN
getArea1(5, 2, 1); //NaN
getArea1(10, 5, 10); //24.206145913796355

//* 51
//? Swap two numbers
let num1 = 10;
let num2 = 20;
console.log(num1, num2);
[num1, num2] = [num2, num1]; // with destructuring
console.log(num1, num2);

//* 52
//? Convert Km to mile
function convertToMile(km) {
  const mile = km * 0.6213711922;
  console.log(mile);
}
convertToMile(100);
convertToMile(1527);

//* 53
//? Convert celcius to farenhite
function convertToFar(cel) {
  const far = cel * (9 / 5) + 32;
  console.log(far);
}
convertToFar(100);
convertToFar(212);

//* 54
//? Generate a random number
const rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);
//? genearte b/w 15-25
const rand1 = Math.floor(Math.random() * (25 - 15)) + 15;
console.log(rand1);

const rand2 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
console.log(rand2);

//* 55
//? Check a number is even or odd
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`Number ${num} is even`);
  } else {
    console.log(`Number ${num} is odd`);
  }
}
isEvenOrOdd(2);
isEvenOrOdd(20);
isEvenOrOdd(201);
isEvenOrOdd(2019);
isEvenOrOdd(20191);
isEvenOrOdd(201910);

//* 56
//? Check a number is positive negative or zero
function isPoOrNegOrZero(num) {
  if (Math.sign(num) === 1) {
    console.log(`Number ${num} is positive`);
  } else if (Math.sign(num) === -1) {
    console.log(`Number ${num} is negative`);
  } else if (Math.sign(num) === 0) {
    console.log(`Number ${num} is zero`);
  } else {
    console.log(`An invalid number`);
  }
}
//? Math.sign(num) gives -1 or 0 or 1----ve or 0 or +ve
isPoOrNegOrZero(0);
isPoOrNegOrZero(-0);
isPoOrNegOrZero(-8);
isPoOrNegOrZero(20);
isPoOrNegOrZero(200);
isPoOrNegOrZero(78);
isPoOrNegOrZero(-79);
isPoOrNegOrZero(98);
isPoOrNegOrZero(-23);
isPoOrNegOrZero(25);
isPoOrNegOrZero("a");

//* 57
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(-5.02));
console.log(Math.ceil(5.02));
console.log(Math.ceil(5.97));
console.log(Math.round(5.97));
console.log(Math.round(5.17));
console.log(Math.round(4.97));
console.log(Math.round(-9.258));
console.log(Math.round(-9.854));

//* 58
//? From a given array find the first missing odd number
const input = [5, 7, 9, 17];
for (let i = 0; i < input.length; i++) {
  let current = input[i];
  let next = current + 2;
  if (input[i + 1] === next) {
    continue;
  } else {
    console.log(next); //! only gives 11 and not 13 ,15 and gives 19---it will only give the first misssing odd or even number
    // break;
  }
}

const input1 = [5, 7, 9, 11, 15, 17];
const output = input1.reduce((p, c) => {
  if (p + 2 === c) {
    return c;
  } else {
    return p + 2; //11 or 15
  }
});
console.log(output);

//* 59
//? Check a number is prime or not
function isPrime(num) {
  if (num === 1) {
    console.log("1 is neither prime nor composite");
  } else if (num < 1) {
    console.log("negative numbers are not prme");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        var res = "number is not prime";
        // console.log("number is not prime");---can't print here directly
        break; //?---mandatory to give--otherwise wrong result will come
      } else {
        var res = "number is prime";
        // console.log("number is  prime");---can't print here directly
      }
    }
  }
  console.log(res);
}
isPrime(10);
isPrime(1);
isPrime(3);
isPrime(30);
isPrime(7);
isPrime(70);
isPrime(67);
isPrime(-67);

//*60
//? find largest of 3 numbers
const n1 = 10;
const n2 = 100;
const n3 = 1000;
const arr = [1, 2, 3];
console.log(Math.max(n1, n2, n3));
console.log(Math.min(n1, n2, n3));
console.log(Math.max(...arr));
console.log(Math.max(arr)); //NaN
console.log(Math.min(...arr));

//*61
//? Find factorial of any number
function getFac(num) {
  if (num === 0) {
    console.log("idiot");
  }
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  console.log(fac);
}

getFac(0);
getFac(1);
getFac(8);
getFac(5);

//*62
//? print multiplication table of any number
function printMulTable(num) {
  for (let i = 1; i <= num; i++) {
    //i++ can be replaced with i+=2 for incrementing with a gap of 2
    let res3 = num * i;
    console.log(`${num} * ${i} = ${res3}`);
  }
}

printMulTable(2);
printMulTable(20);
printMulTable(5);

//*63
//? Print the common properties of multiple objects in a new obj
const h1 = { a: 10, b: 20, c: 30, d: 40, e: 50 };
const h2 = { a: 20, d: 40, f: 90, e: 50, k: 80 };

//? const output={d:40,e:50}

function createObj(h1, h2) {
  let emptyObj = {};
  for (let key in h1) {
    if (h1[key] === h2[key]) {
      // console.log(h1[key], h2[key]);
      emptyObj[key] = h1[key];
      // emptyObj[key] = h2[key];//* both same
    }
  }
  return emptyObj;
}
const newlyObj = createObj(h1, h2);
console.log(newlyObj);

//*64
//? Find the 2nd largest number in an array
const arrOfNums = [1, 2, 23, 45, 3, 35, 6, 7, 89]; //expected output is 45
const arrRes = arrOfNums.sort((a, b) => {
  return a - b;
});
console.log(arrRes); // [1, 2, 3, 6, 7, 23, 35, 45, 89]
console.log(arrRes[arrRes.length - 2]);

//*65
//? Rotate an array by 3 places
const arrRotate = [1, 2, 3, 4, 5, 6, 7];
// we need like const output=[5, 6, 7,1, 2, 3, 4]
// const pop = arrRotate.pop();
// arrRotate.unshift(pop);
// // console.log(arrRotate.unshift(pop));
// console.log(arrRotate);
// arrRotate.unshift(arrRotate.pop());
// console.log(arrRotate);
// arrRotate.unshift(arrRotate.pop());
// console.log(arrRotate);
//? we are repeating code in the above
function arrRotation(arr, numberOfShifts) {
  for (let i = 0; i < numberOfShifts; i++) {
    arr.unshift(arr.pop());
    console.log(`step ${i + 1}, ${arr}`);
    console.log(`step ${i + 1},`, arr);
  }
  return arr;
}

const resOfRotation = arrRotation(arrRotate, 3);
console.log(resOfRotation);

//* 66
//? Find max and min num of array without max and min func

const findMaxAndMinArr = [1, 2, 3, 4, 5, 767, 8, 8, 9, 5, 4, 33, 3];
const maxAndMinRes = findMaxAndMinArr.reduce((p, c) => {
  if (p > c) {
    return p;
  } else {
    return c;
  }
}, 0);
console.log(maxAndMinRes);

//* 67
//? Swap First & Last Character of a String In JavaScript
//? The replace() method does not change the original string.
//? The replace() method returns a new string with the value(s) replaced.
let jsStr = "This is a javascript string";
jsStr = "ho";
//! jsStr = "h"; //? edge case, it's giving hhh which is not correct---so take a =n if else statement and give a condition that if a str.length < 2 , then it will simply return the str---same for empty str
// let firstChar = jsStr.charAt(0);
// let lastChar = jsStr.charAt(jsStr.length - 1);
// // let jsStrNew = jsStr.replace(firstChar, lastChar);
// // jsStrNew = jsStr.replace(lastChar, firstChar);
// // console.log(jsStrNew);
// [firstChar, lastChar] = [lastChar, firstChar];
// console.log(firstChar, lastChar);
// jsStr[0] = firstChar;
// console.log(jsStr[0]);
// //! jsStr.charAt(0)=firstChar;
// console.log(jsStr.charAt(0));
// jsStr[jsStr.length - 1] = lastChar;
// console.log(jsStr);
// let arrFromStr = jsStr.split("");
// let firstOfArr = arrFromStr[0];
// let lastOfArr = arrFromStr[arrFromStr.length - 1];
// [firstOfArr, lastOfArr] = [lastOfArr, firstOfArr];
// arrFromStr[0] = lastOfArr;
// arrFromStr[arrFromStr.length - 1] = firstOfArr;
// console.log(firstOfArr, lastOfArr);

//? This is a javascript string--swap first and last character
const jsStrLength = jsStr.length;
console.log(
  jsStr.charAt(jsStrLength - 1).toUpperCase() +
    jsStr.substring(1, jsStrLength - 1) +
    jsStr.charAt(0).toLowerCase()
);

//* 68
//? Find missing numbers in an array

const missingArr = [1, 2, 3, 6]; //[4, 5]
const missingArr1 = [1, 3, 5, 11, 13]; //[2, 4, 6, 7, 8, 9, 10, 12]
const missingArr2 = [1, 3, 5, 13, 15]; //[2, 4, 6, 7, 8, 9, 10, 11, 12, 14]
const missingArr3 = [0, 2, 4, 6, 14, 18]; //[1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17]
const missingArr4 = [1, 2, 3, 6, 7, 15]; //[4, 5, 8, 9, 10, 11, 12, 13, 14]
const missingArr5 = [1]; //[]
const missingArr6 = []; //[]
//? output= 4,5

function missing(arr) {
  let missArr = [];
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  for (let i = minVal; i < maxVal; i++) {
    if (arr.indexOf(i) === -1) {
      missArr.push(i);
    }
  }
  return missArr;
}

console.log(missing(missingArr));
console.log(missing(missingArr1));
console.log(missing(missingArr2));
console.log(missing(missingArr3));
console.log(missing(missingArr4));
console.log(missing(missingArr5));
console.log(missing(missingArr6));

//* The below logic works for arr with only even or odd numbers---and only retyrns the first missing odd or even number
// for (let i = 0; i < missingArr.length; i++) {
//   let current = missingArr[i];
//   let next = current + 1;
//   if (missingArr[i + 1] === next) {
//     continue;
//   } else {
//     console.log(next);
//   }
// }

//***** 2nd largest value of array ****/
const arr1 = [10, 5, 34, -50, -2, -9, 12, 321];
const sorting = arr1.sort((a, b) => {
  return a - b;
});

console.log(sorting);
console.log(sorting[sorting.length - 2]); //?2nd largest value of the array

//**** find largest word in a text ****//
function findLargestWord(txt) {
  const spilts = txt.split(" "); //" " as we need every word
  const sorts = spilts.sort((a, b) => {
    return b.length - a.length;
  })[0];
  console.log(sorts);
}

findLargestWord("this is aaaaaaa pure rubbish and garbage as well");

//? remove duplicates from a sorted array

const numsArr = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4];
const duplicateOfArr = new Set(numsArr);
console.log(Array.from(duplicateOfArr)); //* new array with duplicate values removed

//? find the duplicate values inside the array

const duplicateNums = numsArr.filter(
  (el, index, arr) => arr.indexOf(el) !== index
);

console.log(duplicateNums); //[0, 1, 1, 2, 2, 3, 4, 4]---arrays containing duplicate values

console.log(numsArr);

//? removing duplicates from an array without creating a new array
function removeDup(nums) {
  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  nums.length = i + 1;
  return nums;
}

console.log(removeDup(numsArr));
console.log(numsArr);

//* 69
const inputArr = [2, 7, 11, 4, -2];
//? cons op=[20,15,11,18,24]---the elements in the array will be the sum of all the elements but not of the same index

const sum = inputArr.reduce((p, c) => {
  return p + c;
}, 0);

const newArr = inputArr.map((el) => {
  return sum - el;
});
console.log(newArr); //? [20, 15, 11, 18, 24]

//* 70
//? Array Transformation

const givenArr = [0, 1, 0, 3, 12];
// const output = [1, 3, 12, 0, 0];
const emptyArr = [];
const givenArrRes = givenArr.map((el, index) => {
  if (el === 0) {
    emptyArr.push(el);
    givenArr.splice(index, 1); //? the 0 is being deleted that is what 1 implies

    // if (givenArr[0] === 0) {
    //   givenArr.shift(givenArr[0]);
    // }

    // if (givenArr[givenArr.length - 1] === 0) {
    //   givenArr.shift(givenArr[givenArr.length - 1]);
    // }
    // givenArr.splice(index, el);
    // givenArr.splice(el, index);
    // givenArr.splice(index - 1, 1);
  }
  return emptyArr;
});

emptyArr.map((el) => {
  givenArr.push(el);
});
console.log(givenArr); //(5) [1, 3, 12, 0, 0]

//*71
//? Reverse a String without Affecting Special Characters

const ipStr = "ab,c,d%f*t$";
// const opStr = "tf,d,c%b*a$";
// console.log(ipStr.split("").reverse().join("")); //$t*f%d,c,ba

//* 72
//? Availability of Books in Store

function books(num) {
  if (num === 0) {
    return "Out of Stock";
  } else if (num < 25) {
    return "Low Stock";
  } else {
    return "In Stock";
  }
}

console.log(books(0));
console.log(books(20));
console.log(books(200));

//*73

const testArray = [1, 2, 3];
// testArray = [4, 5, 6];
console.log(testArray); //! error---Assignment to constant variable.--can change the values of ele of the array but can't cahnge the entire array

//*74

const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName()); //? Helen Ryan

//*75

const object1 = {
  a: 10,
  b: 20,
  c: function () {
    console.log(this.a, this.b);
    console.log(this.a + this.b); //10+20
  },
};
const func = object1.c;
console.log(func);
func(); //! NaN---this is a normal function call hence this will point to the window object in this case---window.a= undefined window.b= undefined undefind+undefined=NaN

object1.c(); //30

//*76
let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter); //55
console.log(i); //11--accesible also outside for loop

//*77
const arrayy = [10, 20, 30, 40];
const resultt = arrayy.map((num) => num / 2).filter((num) => num >= 15);
console.log(resultt); //[15,20]
//[5,10,15,20]

//* 78

const obj23 = {
  name2: "Conner",
  age: 27,
  greet: () => {
    console.log(this);
    console.log(`Hey, my name is ${this.name2}`);
  },
};
obj23.greet(); //Hey, my name is undefined

//* 79

const object11 = {
  prop1: "value1",
  prop2: "ll",
  prop3: "value3",
};
const newObj11 = { ...object11 };
console.log(newObj11);
newObj11.prop3 = "newValue3";
console.log(newObj11.prop3); //newValue3
console.log(object11.prop3); //value3
console.log(object11 === newObj11);

//? but

const object12 = {
  prop1: "value1",
  prop2: {
    prop3: "value3",
  },
};
const newObj12 = { ...object12 };
newObj12.prop2.prop3 = "newValue3";
console.log(object12.prop2.prop3); //!--newValue3--- although we are using shallow copy by spread operator we are still changing the value inside the nested object of the original object itself which is not the case in the above example where there is no nested obj
console.log(newObj12.prop2.prop3);
object12.prop1 = 23;
console.log(newObj12.prop1); //? no effect on the value
console.log(object12.prop1);

//* 80

class Bird {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`); //? Tim  makes a noise
  }
}
class Crow extends Bird {
  speak() {
    super.speak();
    console.log(`${this.name} sings.`); //?Tim sings.
  }
}
const crow = new Crow("Tim");
crow.speak(); //?Tim sings.

//* 81

const arr9 = [1, 2, 3, 4, 5];
const sum9 = arr9.reduce((total, num) => total + num);
console.log(sum9 / arr9.length); //15/5-3

//* 82

const testArray1 = [1, 2, 3, 4, 5];
const re1s = testArray1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  }
  return acc; //6
}, 0);
console.log(re1s);
// ? 1st---acc-0,c-1---re-0
// ? 2nd---acc-0,c-2---re-2
// ? 1st---acc-2,c-3---re-2
// ? 1st---acc-2,c-4---re-6
// ? 1st---acc-6,c-5---re-6
// ? final ans is 6

//* 83
// ? possible performane isssue????
const arr22 = [];
for (let i = 0; i < 1000000; i++) {
  arr22.push(Math.floor(Math.random() * 1000));
}

// console.log(arr22);

//* 84

const arr50 = [1, 2, 3];
const object50 = { x: 1, y: 2, z: 3 };
console.log(...arr50); /// 1 2 3
console.log({ ...object50 });
// console.log(...object50); //! Spread syntax requires ...iterable[Symbol.iterator] to be a function we must give {} syntax while spreading an object
// console.log([...arr50, ...object50]); //! error--object50 is not iterable ca't spread ab object with an array syntax

//* 85

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// Promise.all([promise1, promise2]).then(
//   ([result1, result2]) => console.log(result1 + result2) //3
// );

// const promise11 = Promise.resolve(One);
// const promise22 = Promise.resolve(Two);
// Promise.all([promise11, promise22]).then(
//   ([result1, result2]) => console.log(result1 + result2) //! One is not defined
// );

//* 86
//? JavaScript Find Armstrong Number in an Interval Program

function findArmString(num) {
  let resArr = [];
  // const numOfStr = Number(num);
  for (const i of num) {
    // console.log(Number(i));
    var value = i * i * i;
    // console.log(value);
    // value += value;
    console.log(value);
    resArr.push(value);
    console.log(resArr);
  }
  const op = resArr.reduce((p, c) => {
    const sum = p + c;
    return sum;
  }, 0);
  return op;
}

console.log(findArmString("153"));

let givenNum = 153;
let lastDigit = givenNum % 10; //3
lastDigit = lastDigit * lastDigit * lastDigit;
givenNum = givenNum / 10;
const newNum = Math.floor(givenNum); //15
console.log(givenNum);
let middleDigit = newNum % 10; //5
middleDigit = middleDigit * middleDigit * middleDigit;
givenNum = givenNum / 10;
const newNum1 = Math.floor(givenNum); //1
let firstDigit = newNum1;
firstDigit = firstDigit * firstDigit * firstDigit;
if (firstDigit + middleDigit + lastDigit === 153) {
  console.log("number is armstrong");
}

//* 87
//? JavaScript Program to Check if the Numbers Have Same Last Digit

function checkLastDigit(n1, n2, n3) {
  const n1Str = String(n1);
  const n2Str = String(n2);
  const n3Str = String(n3);
  const n1StrLd = n1Str.charAt(n1Str.length - 1);
  const n2StrLd = n2Str.charAt(n1Str.length - 1);
  const n3StrLd = n3Str.charAt(n1Str.length - 1);
  if (n1StrLd === n2StrLd && n1StrLd === n3StrLd && n2StrLd === n3StrLd) {
    return `yes`;
  } else {
    return `no`;
  }
}

console.log(checkLastDigit(12, 23, 43)); //no
console.log(checkLastDigit(13, 23, 43)); //yes
console.log(checkLastDigit(14, 24, 44)); //yes
console.log(checkLastDigit(12, 29, 43)); //no
console.log(checkLastDigit(12, 29, 43)); //no
console.log(checkLastDigit(19, 29, 49)); //yes
console.log(checkLastDigit(12, 26, 43)); //no
console.log(checkLastDigit(16, 26, 46)); //yes

//? can also be dome with the % operator---taking the last digit

//* 88
//? How do you find Palindromes by changing the first and last char of string?

function isPalindrome(str) {
  const length = str.length;
  const revStr =
    str.charAt(length - 1) + str.substring(1, length - 1) + str.charAt(0);
  if (str === revStr) {
    console.log("the provided string is palindrome");
  } else {
    console.log("the provided string is not palindrome");
  }
}

isPalindrome("mom");
isPalindrome("dad");
isPalindrome("car");
isPalindrome("yaay");
isPalindrome("deed");
isPalindrome("deeds");
isPalindrome("book");

//? How do you find Palindromes with array method ?

function isPalindrome1(str) {
  const arr = str.split("");
  const revStr = arr.reverse().join("");
  if (str === revStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

isPalindrome1("mom");
isPalindrome1("dad");
isPalindrome1("car");
isPalindrome1("yaay");
isPalindrome1("deed");
isPalindrome1("deeds");
isPalindrome1("book");

//* 89

//?JavaScript Program: Find If a String Starts and Ends with a specific character

function check(str) {
  const firstDigit = "a";
  const lastDigit = "g";
  if (firstDigit === str[0] && lastDigit === str.charAt(str.length - 1)) {
    console.log("yes");
  } else {
    console.log("false");
  }
}

check("anything");
check("anythinp");
check("anythingggggg");

//? can also use stratswith and endswith method on any string both returns boolean

//* 90
//? How to Check Whether a String Contains a Substring?

function findSubStr(str) {
  // const subStr = str.includes("sub");
  // console.log(subStr); //* returns a boolean value
  if (str.includes("sub")) {
    console.log("contains");
  } else {
    console.log("not contains");
  }
}

findSubStr("this is a string which contains a substring");
findSubStr("this is a string which contains a string");

//* 91
//? How to Convert the First Letter of a String into Uppercase?

function capitalize(str) {
  const firstChar = str.charAt(0).toUpperCase();
  const rest = str.slice(1); //? gives the str from 1st index to the last
  console.log(firstChar + rest);
}

capitalize("yoo---capitalize me!");
capitalize("koo---capitalize me!");
capitalize("ioo---cApitalize me!");
capitalize("eoo---capItalize me!");
capitalize("joo---capitalize me!");

//* 92
//? Counting Number of Vowels in a String with JavaScript

function countVowels(str) {
  const vowelsRegex = /[aeiou]/gi; //? gi should be out of /[]/ after closing /
  const strMatches = str.match(vowelsRegex);
  if (strMatches) {
    return strMatches.length; //? strMatches.length---for getting the count
  } else {
    return 0;
  }
}

console.log(countVowels("abc")); //1
console.log(countVowels("abcEEE")); //4
console.log(countVowels("abcO")); //2
console.log(countVowels("abcaa")); //3

//* 93

//? How to Find Factors of a Number in JavaScript

function findFactors(num) {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(`The given number ${num} has factrors ${i}`);
    }
  }
}

findFactors(4); //1,2,4
findFactors(6); //1,2,3,6
findFactors(7); //1,7
findFactors(9); //1,3,9
findFactors(10); //1,2,5,10

//* 94

//? Print the Fibonacci Sequence

// ? 0,1,1,2,3,5,8,13,21......

let fnum = 0;
let snum = 1;
console.log(fnum);
console.log(snum);
for (let i = 0; i < 10; i++) {
  let temp = fnum + snum; //0+1=1
  // console.log(temp);
  fnum = snum; //1
  snum = temp; //1
  console.log(temp);
}

//* 95

//? How to Replace a Character Inside a String

const giveStr = "Replace Me";
console.log(`Original String---${giveStr}`);
console.log(giveStr.replace("Me", "You"));

const strWithSpace = "I   am   a  string   with   a    lot of       space";
// const replaceSpace = strWithSpace.replace(/\s/gi, " a"); //no spaces
const replaceSpace = strWithSpace.replace(/\s/gi, ""); //no spaces
console.log(replaceSpace);

//* 96

//? Sort words in alphabetical order

const arrOfWords = ["x", "i", "o", "p", "a", "c", "b", "ab", "aab"];
const resOfarrOfWords = arrOfWords.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(resOfarrOfWords); //? arranged in ascending order

//? Sort words in reverse alphabetical order

const arrOfWords1 = ["x", "i", "o", "p", "a", "c", "b", "ab", "aab"];
const resOfarrOfWords1 = arrOfWords1.sort((a, b) => {
  return -a.localeCompare(b);
});
console.log(resOfarrOfWords1); //? arranged in ascending order

//* 97

//? Reverse a string with for loop---revere looping concept--start from last char and end at 0---and take an empty str for concatenating

const strToBeReversed = "Reverse me";
let opstr = "";
for (let i = strToBeReversed.length - 1; i >= 0; i--) {
  opstr = opstr + strToBeReversed[i];
}
console.log(opstr);

//* 98

//? sum of decimal numbers

const decN1 = 0.1;
const decN2 = 0.2;
console.log(decN1 + decN2); //?0.30000000000000004
const sumOfDec = decN1 + decN2;
console.log(sumOfDec.toFixed(2)); //? 0.30
console.log(sumOfDec.toFixed(3)); //? 0.300
console.log(typeof sumOfDec.toFixed(3)); //? string

//? solution----convert it to number using Number Function

console.log(Number(sumOfDec.toFixed(2)));
console.log(Number(sumOfDec.toFixed(3)));
console.log(Number(sumOfDec.toFixed(4)) + 20);

//* 99

//? print letter a-z. Loop through the letters and print each one on a new line

function printLetters(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

printLetters("abcdefghijklmnopqrstuvwxyz");

//* 100

//? check if a string is pangram(contains all the letters from a-z) or not---should be checked for case insensitive

function isPangram(str) {
  const removedSpceStr = str.replace(/\s/g, "");
  // const allLetters = /[abcdefghijklmnopqrstuvwxyz]/gi;
  // const newStr = removedSpceStr.match(allLetters);
  const set = new Set(removedSpceStr);
  console.log(set);
  console.log(set.size); //? 27 T and t taken as diif char
}

isPangram("The quick brown fox jumps over the lazy dog");
isPangram("The quick brown fox jumps over a lazy dog");

//? can use new Set() on string as well as strings are iterable

//* 101

//? check whetehr 2 strings are anagrams or not

function isAnagram(s1, s2) {
  const s1Res = s1.split("").sort().join("");
  const s2Res = s2.split("").sort().join("");
  s1Res === s2Res
    ? console.log("Both strings are anagrams")
    : console.log("Both strings are not anagrams");
}

isAnagram("silent", "listen");
isAnagram("bar", "car");
isAnagram("carrace", "racecar");
