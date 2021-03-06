// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function





// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


 describe("fib function", () => {  
     var num1 = 6
     var num2 = 10
    test("takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci", () => {
        expect(fib(num1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fib(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
      })
    })

 
// b) Create the function that makes the test pass.

//make a function that takes a number paramter
const fib = (n) =>{
    let arr = [1, 1]; // assign a start point for the array greater than 2, the length of the array is = num so start with the two 1,1 values.
    for (let i = 2; i < n; i++){  //user iteration to add new values to the array
      arr.push(arr[i - 2] + arr[i -1]) // as it iterates through, push a new value equal to i-2 + i-1 / or n-2 + n-1. startšat i=2, n-2 is 1 in the array at index 0, and n-1 is the next 2 at index 1. When i=3, n-2 is index 1/ "1" and n-1 is index 2/"2". At i = 4, n-2 is index 2/ "2" and n-1 is index 3/ "3", so on an so forth. 
    }
   return arr //return the fibonnaci'd array
  }
// console.log(fib(6));
// console.log(fib(10));    


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.


describe("oddArraySorted", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
    it("returns eat food or keep working based on input", () => {
        expect(oddArraySorted(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddArraySorted(fullArr2)).toEqual([-823, 7, 23])
      })
    })



// b) Create the function that makes the test pass.

//make a function that takes an arr parameter
const oddArraySorted = (arr) =>{
    let sortedArray = [] //define an empty array to fill up
    for(let i = 0; i < arr.length; i++){ //iterate through the array
        if(typeof arr[i] === "number" && arr[i] % 2 !== 0){ //check for typeof to = number AND check for odd numbers
            sortedArray.push(arr[i]) // push values that match the condition of being typeof number and being odd into the empty array
            sortedArray.sort((a, b) => a - b); //organize the new array from least to greatest using sort.*Ascending = a-b
        }

    }
    return sortedArray; //return the new array of odd numbers sorted least to greatest.

}
// console.log(oddArraySorted(fullArr2));

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.




describe("sumArray", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    
    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    
    var numbersToAdd3 = []
    // Expected output: []

    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArray(numbersToAdd3)).toEqual([])

      })
    })


// b) Create the function that makes the test pass

//create a function that takes an array parameter
const sumArray = (arr) => {
    let summedArray = []  //define an empty array to fill up
    let start = 0 //define a start point for the adding process
        for(let i = 0; i < arr.length; i++){ //iterate through the array
           summedArray.push(start += arr[i]) //push new values = to the previous value added to the next
        }
        return summedArray //return the array full of added/summed numbers
    
    
    
    }
    // console.log(sumArray(numbersToAdd1));
    // console.log(sumArray(numbersToAdd2));
    // console.log(sumArray(numbersToAdd3));
