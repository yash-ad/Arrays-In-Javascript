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


//7.Delete():- Delete is an operator its not a method,Array elements can be deleted using the delete operator.

const bikeNames = ["Yamaha","Honda","Suzuki","TVS","Revolt"];

delete bikeNames[1]; //(5) ['Yamaha', empty, 'Suzuki', 'TVS', 'Revolt']
console.log(bikeNames);  //Becaus eof its not a method so the legth will remainn same instead of absence value(Empty)


//8.Concat():- Used to join arrays to the given array and returns a new array however does not change an existing array.

const alphabets = ["A","B","C","D"];
const moreAlphabets = ["E","F","G","H"];

let mergeThem = alphabets.concat(moreAlphabets);
console.log(mergeThem); //(8) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
console.log(alphabets); //Original array does not change     //(4) ['A', 'B', 'C', 'D']
console.log(moreAlphabets);//Original array does not change  //(4) ['E', 'F', 'G', 'H']



//9.Sort() :- This method is used to sort an array alphabetically;

const numbers = [100,300,600,351,998];


let sortIt = numbers.sort();
console.log(numbers);





























