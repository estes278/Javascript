// // This entire file is a scratch pad for doing exercises in Javascript. 
// // Feel free to un-comment any given section and execute the code to see the result of the exercise. 

// // Arrays
// // Adding numbers to arrays in various ways



// const numbers = [3,5]

// // Can 'push' numbers onto the end of an array

// numbers.push(6, 7);

// // Can 'unshift' numbers to the beginning of an array

// numbers.unshift(1, 2);

// // Can add to the middle using 'splice'
// // First parameter is the starting index
// // Second is how many items to delete
// // Third is an array of elements to add (or a single element)
// numbers.splice(3, 0, 4);

// console.log(numbers);

// // Finding an element that is a reference type

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
//     { id: 3, name: 'c'},
//     { id: 4, name: 'a'},
// ];

// // Find takes a "function" parameter, known as a callback function
// // or predicate function, that basically tells find to perform this function
// // on each element on the array. We declare our own logic on how to do the comparison
// // Returns the index of the first match
// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// We can also do this using an "Arrow Function" which is basically like a Lambda expression
// Removes the need for declaring the function and return statement
// const course = courses.find(course => course.name === 'a');

// console.log(course);



// // Removing Elements

// const numbers = [1,2,3,4];
// console.log(numbers);

// // Last element removed and returned
// const last = numbers.pop();
// console.log('\n' + numbers);
// console.log(last);

// // First number removed and returned
// const first = numbers.shift();
// console.log('\n' + numbers);
// console.log(first);

// // Remove element in middle starting at index (first param)
// // second argument is number of elements we want to remove
// // Removes 3 (after above operations are done), which leaves only 2 left in the array
// numbers.splice(1,1);
// console.log('\n' + numbers);



// // Emptying an Array

// let numbers = [1,2,3,4];

// // Solution 1
// // Won't work if we have multiple references to this array
// numbers = [];

// // Solution 2 (easiest and simplest)
// numbers.length = 0;

// // Solution 3
// numbers.splice(0, numbers.length);

// // Solution 4 (not efficient)
// while(numbers.length > 0)
//     numbers.pop();



// // Slicing and Combining Arrays

// const first = [1,2,3,4];
// const second = [5,6,7,8];

// // Returns a new array that is the combination of first and second
// const third = first.concat(second);

// // Starts at index of first param and ends at second param (excludes the index at second param)
// const slice1 = third.slice(2,5);
// console.log(slice1);

// // Can also use one parameter and take everything after that index
// const slice2 = third.slice(2);
// console.log(slice2);

// // If done using reference types, only the references are copied, not the objects themselves!

// // Can also be done using spread operator

// const combinedSpread = [...first, ...second];
// // Could also do something like this
// // const combinedSpread = [...first, 'b', 'c', ...second];
// // Allows us to easily insert elements between

// console.log(combinedSpread);



// // Various ways to iterate an array
// // including forEach and fancy callback functions

// const numbers = [4,5,6];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach(smile => console.log(smile));

// numbers.forEach((number, index) => console.log(index,number));



// const numbers = [7,8,9];
// // The join method takes a string and then separates the elements of the array with it
// const joined = numbers.join(' - '); 
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);



// // Sorting Arrays

// const numbers = [7,5,9,4,2];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     { id: 1, name:'Node.js' },
//     { id :2, name:'HTML' },    
// ];

// // Sort objects by passing in a callback function 
// // and manually handling the comparisons

// courses.sort(function(a,b) {

//     // Ensure fair comparisons by converting to lower
//     const aName = a.name.toLowerCase();
//     const bName = b.name.toLowerCase();

//     if(aName < bName) return -1;
//     if(aName > bName) return 1;
//     return 0;
// } )

// console.log(courses);


// // Testing Arrays

// const numbers = [1, -1, 2, 3];

// // This function performs the given callback on every element in the array
// // BUT it is short circuited and if it receives a false result it stops
// let allPositive = numbers.every(value => value >= 0);

// console.log(allPositive);

// // This is like the reverse of every - as long as one value
// // matches, it will return true
// let somePositive = numbers.some(value => value >= 0);

// console.log(somePositive);

// // Filter will take each value that matches the callback function,
// // add it to an array, and then return the array
// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);

// // The map function will take each element of an array and map it
// // to the given callback, and then return the map
// let items = filtered.map(number => '<li>' + number + '</li>');
// console.log(items);

// // We can also map them to an object with shorthand notation
// // but we must use parentheses so that JS isn't expecting a codeblock
// let moreItems = filtered.map(number => ({ value: number}));

// console.log(moreItems);

// // We can chain these functions for cleaner code and less use of variables/memory

// const chainedStuff = numbers
//     .filter(value => value >= 0)
//     .map(number => ({ value: number}));

// console.log(chainedStuff);

// // Reduce method will sum all elements of an array
// // Takes two params - a callback function with two values (sum, currentValue), 
// // and an initial value for sum. If no second param is given, the sum will
// // be initialized to the first element of the array
// let sum = numbers.reduce((sum,currentVal) => sum + currentVal);
// console.log(sum);



// // Exercises

// // Takes in a min and max and generates an array
// // which covers the range
// const numbers = arrayFromRange(-10,-4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     let result = [];
//     for(let x = min; x <= max; x++)
//         result.push(x);
//     return result;
// }



// // Implement our own "find" function that takes an
// // array and a value and returns true if that value
// // is contained in the array

// const numbers = [1,2,3,4];

// console.log(includes(numbers, 2));
// console.log(includes(numbers, 5));

// function includes(array, target)
// {
//     for(currentValue of array)
//         if(currentValue === target)
//             return true;
//     return false;
// }



// // The except function will take in two arrays
// // and return an array which is the first array excluding the values in the second array
// // My solution does not make use of the "includes" function because otherwise what is the point?
// // We can easily achieve this using built in functions but what is the point of the exercise then?

// const numbers = [1,2,3,4];

// const output = except(numbers, [1,2]);

// console.log(output);

// function except(array, excluded)
// {
//     result = [...array];
//     let index = -1;
//     for(let value of array)
//     {        
//         for(let target of excluded)
//         {
//             if (value === target)
//             {
//                 index = result.indexOf(value);
//                 result.splice(index,1);
//             }
//         }
//     }
//     return result;

// }



// // The move function will take in an array, an index, and a shift value
// // The result will return a new array that takes the value at index and shifts it by the given shift value
// // Negative numbers shift left, positive numbers shift right
// // Logs an error if the shift value would put us out of bounds

// const numbers = [1,2,3,4];

// const output = move(numbers, 2, -2);

// if(output === -1)
//     console.error("Invalid shift puts us out of bounds!");
// else console.log(output);

// function move(array, index, shift)
// {
//     result = [...array];
//     // First make sure we have a valid index
//     if(index < 0 || index >= array.length)
//         return -1;
//     // Next, make sure we will still have a valid index after the shift
//     if(index + shift >= array.length || index + shift < 0)
//         return -1;
//     // Remove the value at the specified index and store it in temp
//     // Note that an array is returned, but we only need one element
//     // so we assign [0] instead of assigning an array
//     temp = result.splice(index,1)[0];
//     // Now add the value back at the specified shift index
//     result.splice(index + shift, 0, temp);
//     return result;

// }



// // The countOccurences function will count the number of occurences
// // of the given value in the given array and return it

// const numbers = [1,2,3,1,4,1];

// const count = countOccurences(numbers, 0);

// console.log(count);

// function countOccurences(array, value)
// {
//     let count = 0;
//     for(let current of array)
//         if(current === value)
//             count++;
//     return count;
// }



// // The max function returns the maximum value in an array



// const numbers = [-1,7,8,9];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array)
// {
//     let result = array[0];
//     for(let current of array)
//         if(current > result)
//             result = current;
//     return result;
// }


// const movies = [
//     { title: 'Interstellar', year: 2018, rating: 4.5 },
//     { title: 'The Dark Knight', year: 2018, rating: 5 },
//     { title: 'Heat', year: 2018, rating: 3.5 },
//     { title: 'The Last Samurai', year: 2018, rating: 4.7 },
//     { title: 'The Crow', year: 2018, rating: 4.2 },
//     { title: 'The Lord of the Rings', year: 2018, rating: 4.9 },
//     { title: 'Star Wars', year: 2018, rating: 4.4 },
// ];

// // All moves from 2018 with rating > 4
// // Sort by rating in descending order

// const result = getResult(movies);

// console.log(result);

// // We're only looking for movies from 2018 with a rating above 4
// // We also want them in descending order by rating, but that 
// // will be handled in a separate function
// function getResult(array)
// {
//     // Could have used the filter function here but 
//     // I enjoy writing my own implementation
//     let result = [];
//     for(let current of array)
//     {  
//         if( current.year == 2018 && current.rating > 4)
//             result.push(current);
//     }
    
//     return sortByRating(result);
// }

// // We could have also used the built in sort method
// // and then reversed it, but this was way more fun
// function sortByRating(array)
// {
//     // Only perform the sort if the array has at least two elements
//     if(array.length < 2)
//         return array;

//     // Bubble Sort Algorithm

//     // Make a shallow copy of our input
//     let result = [...array];
//     // Start at 0
//     let currentIndex = 0;
//     // Go up to maxIndex, which will decrease by 1 each iteration
//     // because the smallest value will always end up at the end
//     let maxIndex = array.length - 1;
//     // Use do-while to make sure we get at least one pass
//     do {
//         while(currentIndex < (maxIndex))
//         {
//             // If the current value is less than the next value, swap them
//             // so that the lowest value will end up at the end of the array
            
//             if(result[currentIndex].rating < result[currentIndex + 1].rating)
//             {
//                 let temp = result[currentIndex];
//                 result[currentIndex] = result[currentIndex + 1];
//                 result[currentIndex + 1] = temp;
//             }
//             // Increment our current index
//             currentIndex++;
//         }
//         // Now that one full pass has been made, we reset currentIndex = 0
//         // and decrement maxIndex because we know the smallest value has been
//         // swapped to the end of the array. And then we do it all over again!
//         currentIndex = 0;
//         maxIndex--;
//     } while(maxIndex >= 1); // Keep going until maxIndex is at one and we do the final comparison

//     return result;
// }