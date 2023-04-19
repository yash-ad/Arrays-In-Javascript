//Map, Filter & Reduce in JavaScript | JavaScript :-


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