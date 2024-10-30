// // This entire file is a scratch pad for doing exercises in Javascript. 
// // Feel free to un-comment any given section and execute the code to see the result of the exercise. 


// // Objects in JS
// // Factory Functions



// function createCircle(radius) 
// {
//     // It appears that the brace needs to be on the same line as the return keyword here, not sure why
//     return {   // Essentially we are returning a reference to the object created below
//         radius, // Auto assigns the parameter with this name to a member variable with the same name
//         draw()
//         {
//             console.log('GO NJD');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// circle1.draw();
// const circle2 = createCircle(2);
// console.log(circle2);
// circle2.draw();



// // Constructor Function
// // Similar to Java

// function Circle(radius)
// {
//     this.radius = radius;
//     this.draw = function()
//     {
//         console.log("GO NJD");
//     }
//     this.calculateArea = function()
//     {
//         return 3.14 * radius * radius;
//     }
// }

// const circle3 = new Circle(7);
// let area = circle3.calculateArea();
// console.log(area);
// console.log(circle3.constructor);
// console.log(Circle.arguments);
// console.log(Circle.caller);
// console.log(Circle.length);
// console.log(Circle.name);
// console.log(Circle.prototype);

// // Demonstration of pass by reference vs value

// let x = 10;
// let y = x;
// x = 20;
// console.log(x);
// console.log(y);

// let a = { value: 10};
// let b = a;
// a.value = 20;
// console.log(a);
// console.log(b);



// // Multiple ways to iterate through the properties of an object
// // as well as check if a property/function exists within an object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// // Key will be the name of the property or function
// // The value of [key] is the value of that property or function
// for(let key in circle)
//     console.log(key, circle[key]);

// console.log('End loop 1\n');

// // Object.keys(circle) returns an array with the names of every property/function
// // in the object

// for(let key of Object.keys(circle))
//     console.log(key);

// console.log('End loop 2\n');

// // Object.entries(circle) returns an array of mappings of key-value pairs
// // where the key is the name of the property/function and the value is
// // the value of that property or function
// for(let entry of Object.entries(circle))
//     console.log(entry);

// console.log('End loop 3\n');

// // Can use the "in" operator to check if a property or function with that name exists in the object
// if('radius' in circle) console.log('Yes');
// if('color' in circle) console.log('Yes 2');



// // Cloning an object

// const circle = {
//     radius: 3,
//     draw() {
//         console.log('draw');
//     }
// };

// // Copies all properties and functions from object "source" to object "target"
// // We can have target be an empty object here and then assign the returned value to another object
// // or just assign it directly to the target, but target would have to be initialized first
// // const another = Object.assign(target,source);

// let another2 = {};
// const another1 = Object.assign(another2,circle);
// console.log(another1.radius);
// console.log(another2.radius);

// // Easiest way is to use the three dots, or "Spread Operator"
// const another3 = {...circle};
// console.log(another3.radius);



// // String Primitives vs Objects

// // String primitive
// const message = 'Lets Go NJD!';

// // String object
// const message2 = new String('Go DEVILS!');

// // Both can use the dot operator to access methods of the String class



// // Template Literals
// // These will match the exact formatting you use in the editor
// // Also can use quotes without escape characters
// // Useful for sending emails

// const another = `Devils For 
// The \n'Cup'`;
// console.log(another); 



// const firstName = 'Allan';
// const greeting = 'Hi' + firstName + ',\n';

// const message = 
// `Hi ${firstName},

// Welcome to the NJD Mailing List!

// Best Regards,

// Allan Estes`;

// console.log(message);



// // Dates and their formats
// // The constructors are fairly flexible

// const now = new Date();
// const date1 = new Date('February 7 1989');
// // When using the below format, months start at 0, so February is 1
// const date2 = new Date(1989, 1, 7);

// console.log(now);
// console.log(date1);
// console.log(date2);




// // Create an address object and then create a function to display its properties
// // both name of property and value
// // street, city, zipCode
// // showAddress(address)
// // Done using to string, member function, and manually printing each property
// // Demonstrated using bracket notation, constructor function, and factory function

// // Classic Bracket Notation
// let myFirstHouse = {
//     street: 'Alder',
//     city: 'Lyndhurst',
//     zipCode: '07071',
//     toString() {
//         return "\nStreet: " + this.street + "\nCity: " + this.city + "\nZip Code: " + this.zipCode;
//     }
// };

// // Constructor Function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
//     this.showAddress = function()
//     {
//         for(let x in this)
//             console.log(x,this[x]);
//     }
// }

// let mySecondHouse = new Address("Limeric Circle", "Wilmington", "01234");

// // Factory Function
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode,
//         showAddress()
//         {
//             console.log(street);
//             console.log(city);
//             console.log(zipCode);
//         }
//     }
// }

// let myThirdHouse = createAddress("Hunters Glen", "Plainsboro", "77777");

// console.log("First House: " + myFirstHouse + '\n\n');

// console.log("Second House: ");
// mySecondHouse.showAddress();
// console.log('\n\n');

// console.log("Third House: ");
// myThirdHouse.showAddress(); 

// let address1 = new Address('a','b','c');
// let address2 = new Address('a','b','c');

// // Returns true if both objects have equal properties
// function areEqual(address1, address2)
// {
//     return ( (address1.street === address2.street)
//                 && (address1.city === address2.city)
//                 && (address1.zipCode === address2.zipCode))
// }

// // Returns true if both parameters are referencing the same object
// function areSame(address1, address2)
// {
//     return address1 === address2;
// }

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));




// // Declare an object literal with the following properties
// // title, body, author, views, comments (author, body), isLive

// let blogPost = {
//     title: "Allan's Hockey Corner",
//     body: "This is Allan's NJD Hockey Corner Blog Post Body!",
//     author: "Allan Estes",
//     views: 0,
//     comments: [
//         { author: "Some Guy", body: "This is Some Guy's comment"} ,
//         { author: "Some Guy 2", body: "This is Some Other Guy's comment"}
//     ],
//     isLive: false
// };

// console.log(blogPost);


