// ############## for loops #####################

// Write a for loop that increments the counter variable by 10 each time, and displays the value.
var Things = 100

for (var i = 0; i < Things.length; i=i+10) {
	Things[i]
};
console.log("numberOfThings:", Things);

// Write a for loop that divides the counter variable by 2 each time, and displays the value.

for (var i = Things.length; i > 0; i /= 2) {
	Things[i]
	// Augment the loop to insert each new value into an array

};
console.log("divide by two:", Things);

// Write a loop that starts at 100 and decrements a variable by 1. 
//If the number is even, add the number to the beginning of an array, else add it to the end of the array.

