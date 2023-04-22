//Map, Filter & Reduce in JavaScript | JavaScript :-
  

//001.Map() method:-

//1.Addition all the values of an array:-
let arr = [ 24 , 48 , 56 ];

let arr_One = arr.map((value,index) => {
console.log(value,index);
 return value + 1
}
)
console.log(arr_One); // [25, 49, 57]


//2.Multiply all the values of an array:-

let solve_Multiply = [ 2 , 4 , 6 , 8 ];

let arr_Two = solve_Multiply.map((value)=>{

    console.log(value);
    return value * 10
})

console.log(arr_Two); // [20, 40, 60, 80]


//3.subtraction of all the values

let solve_Subtraction = [ 1 , 2 , 3 , 4 , 5];

let arr_Three = solve_Subtraction.map((value)=>{
console.log(value);
 return value - 1

})
console.log(arr_Three); //  [0, 1, 2, 3, 4]







//002.Filter() Method :-

//4. Lets findout the numbers that are lesser than 10 :-
let numbers = [ 99 , 70 , 40 , 20 , 30  , 5 , 4 , 50];

let arr_Four = numbers.filter((value)=>{

console.log(value);
return value < 10;
 

})

console.log(arr_Four); //  [5, 4] There are only two numbers found that are lesser than 10;






//003.Reduce() Method :- 

//1.Addition by using reduce method :- 
let newArr = [ 1 , 2 , 3 , 4 , 5 , 5 , 4 , 3 , 2 , 1 ]; //Ofcourse we can repeat the values in an array.
//Here we can also add a function hence function can be used as a variable in javascript;

const reduce_Func = (value_1,value_2) => {

    return value_1 + value_2

}

let arr_Five = newArr.reduce (reduce_Func)

console.log(arr_Five); //And it returns a single value which is 30 addition of an elements.


//2.Multiply by using reduce method :-

let newArr2 = [ 10 , 20 , 30 , 40 , 50 , 60 ];

let arr_Six = newArr2.reduce((value_1,value_2)=>{
return value_1 * value_2

})

console.log(arr_Six); // And it returns a single value which is 720000000 Multiplication of an elements. 


//3. Subtraction by using reduce method :-

let newArr3 = [ 101 , 405 , 303 , 505 , 339 , 447 ];

const reduce_Function = (value_1,value_2) =>
{

    return value_1 - value_2
}

let arr_Seven = newArr3.reduce(reduce_Function);

console.log(arr_Seven); //  And it returns a single value which is -1898 Subtraction of an elements. 


