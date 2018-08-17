var UnflattenedArray = [[1, 2, [3]], 4,[1,[2],3],[11],[12],[13]];        // Declaring array that needs to be Flattened
var Flattened = new Array();                                // Declaring the resultant Array

flatten(UnflattenedArray);                                  // Function call for Flattening an Array
console.log("The flattened array is" + Flattened);
alert("The Flattened array is "+ Flattened);

// Array Flattening function
function flatten(input) {
    for (var i = 0; i < input.length; i++) {
        if (typeof (input[i]) === "object") {
            flatten(input[i]);              // If the type is object recursively call the flattening function
        }
        else {
            Flattened.push(input[i]);           // If the type is not object i.e. it is not nested or there is no array inside the array 
                                               // then directly add it to the resultant Array
        }
    }
  
}