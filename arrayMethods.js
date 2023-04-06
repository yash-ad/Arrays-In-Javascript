//Array Methods

//toString():- Converts an array to a string of comma seperated values;
//typeOf string;

const nums = [1,2,3,4,5,6];

let resultOne = nums.toString();
console.log(resultOne); //1,2,3,4,5,6



//Join():- Joins all the array elements using a seperator;
//typeOf string;

let resultTwo = nums.join("-");
console.log(resultTwo);//1-2-3-4-5-6


//pop():- Removes the last element of an array;

let resultThree = nums.pop();
console.log(resultThree);//6
console.log(nums);//[1, 2, 3, 4, 5]

//Push():- Adds a new element at the end of the array and it modifies the original array , returns the new array

let resultFour = nums.push(9); //Added new element to the end of an array.
console.log(nums,resultFour); //the length and elements of an array


//Shift():-Removes the first element of an array and returns it.

let resultFive = nums.shift();
console.log(resultFive,nums); // 1 [2, 3, 4, 5, 9]

