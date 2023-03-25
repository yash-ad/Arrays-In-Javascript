//Array is a collection of data.
//[square bracket] is called literal.
//It has become a common practice to declare arrays using const and always declare with const
//In the square bracket we called elements likewise it could be string , number or boolean etc.


//Array in javascript can be of mixed data types.
const myArray = ["Y","A","S","H","R","A","J",true,false,31,1998,function myName(){console.log("Yashraj Dandnaik");}]; 
console.log(myArray);


//You can access elements of an array using indices.0,1,2 etc.
console.log(myArray[6]); 

//Array properties:- You can find the length of an element using length property.
console.log(myArray.length); 

/*Arrays are Not Constants
The keyword const is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.*/
//Example is below:-
const newArray = myArray;

newArray[10] = "God";
console.log(myArray);
console.log(newArray);


const fruits = ["Apple","Mango","Banana","Strawberry","Pineapple"];
console.log(fruits);
console.log(fruits[3]);

