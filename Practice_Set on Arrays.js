//Practice set on Arrays :-

//1.create an array of numbers take input from the user to add numbers to this array:- (Input from the user means using prompt and add numbers to this array using push method hence to add the element of the end of an array:=

const numbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];

let user_Input = prompt("Enter a number :");// 55 // 31

user_Input = Number.parseInt(user_Input) // why do we used parseInt because user_Input its a string and parseInt is used for converting string to an integer or a number.
//Using push() method
 numbers.push(user_Input); //Add the element to the end of an array

 console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 55] , [1, 2, 3, 4, 5, 6, 7, 8, 31] 


//Using unshift() method
numbers.unshift(user_Input) //Add the element to the beginning of an array
console.log(numbers); // [55, 1, 2, 3, 4, 5, 6, 7, 8]




//2.Keep adding numbers to the array from question 1 using while or do while loop with an array until 0 is added to the array:-

const theNumbers = [11 , 12 , 13 , 14 , 15 , 16 ];
let userInput;
do {a = prompt("Enter your number here : ");

    a = Number.parseInt(a);

 theNumbers.push(a);
}

while(userInput != 0);

console.log(theNumbers); // [11, 12, 13, 14, 15, 16, 11, 22, 44, 0] the last number ended with 0 with closing loop.








