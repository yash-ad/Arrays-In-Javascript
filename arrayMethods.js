//Array Methods

//1.toString():- Converts an array to a string of comma seperated values;
//typeOf string;

const nums = [1,2,3,4,5,6];

let resultOne = nums.toString();
console.log(resultOne); //1,2,3,4,5,6



//2.Join():- Joins all the array elements using a seperator;
//typeOf string;

let resultTwo = nums.join("-");
console.log(resultTwo);//1-2-3-4-5-6


//3.pop():- Removes the last element of an array;

let resultThree = nums.pop();
console.log(resultThree);//6
console.log(nums);//[1, 2, 3, 4, 5]

//4.Push():- Adds a new element at the end of the array and it modifies the original array , returns the new array

let resultFour = nums.push(9); //Added new element to the end of an array.
console.log(nums,resultFour); //the length and elements of an array


//5.Shift():- Removes the first element of an array and returns it.

let resultFive = nums.shift();
console.log(resultFive,nums); // 1  [2, 3, 4, 5, 9]


//6.Unshift():- Adds element to the beginning of an array and returns new length

let resultSix = nums.unshift(100); //Added element
console.log(resultSix,nums);     // 6(Returns new length)  [100, 2, 3, 4, 5, 9] (Added element to the beginning of an array)







































