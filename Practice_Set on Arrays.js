//Practice set on Arrays :-

//1.create an array of numbers take input from the user to add numbers to this array:- (Input from the user means using prompt and add numbers to this array using push method hence to add the element of the end of an array:=

const numbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];

let user_Input = prompt("Enter a number :");

user_Input = Number.parseInt(user_Input) // why do we used parseInt because user_Input its a string and parseInt is used for converting string to an integer or a number.

numbers.push(user_Input);

console.log(numbers);
