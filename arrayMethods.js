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



//9.Sort() :- This method is used to sort an array alphabetically,however we can sort the elements in an ascending order or descending order with the help of Compare function

const numbers = [100,300,600,351,998];
let sortIt = numbers.sort();
console.log(numbers); //(5) [100, 300, 351, 600, 998]


//Lets use compare function to get the result as an ascending order or a descending order;
const compareNumbers =[100,300,600,351,998]


//Using compare function
let  compareFn = (a, b)=> {

    return b - a ;
}


numbers.sort(compareFn);
console.log(compareNumbers); // (5) [100, 300, 600, 351, 998]



//10.Reverse():-

const reverseLetters = ["E","S","R","E","V","E","R"];

let result = reverseLetters.reverse();

console.log(reverseLetters,result); //(7) ['R', 'E', 'V', 'E', 'R', 'S', 'E']



//11.Splice :- This method is used to add new items to an array however in splice we can use an arguments to add the elements , no of elements to remove and elements to be added.

//Four arguments of splice are 1.Position to add , 2.NO of elements to remove , 3 and 4th is elements to be added.

const numBers = [ 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10 ];

let deletedValues = numBers.splice(3,4,1001,1002,1003);

console.log(numBers); // (9) [1, 2, 3, 1001, 1002, 1003, 8, 9,10]
 // 1.Added position to  index 3. 
 // 2.No of elements to remove. 
 // 3 & 4 th Elements to be added.

//Lets findout the deleted values of splice:-

console.log(deletedValues); // (4) [4, 5, 6, 7]






















