/* 

  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/
[42]
// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 7, 4];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//! HELPER FUNCTION 
function merge(left = [], right = []) {
  // create an array to hold sorted elements
  //create vars for the indices
  const merged = []
 let i= 0
 let j =0
  while(i < left.length && j < right.length){

        if(left[i] < right[j]){
            merged.push(left[i])
            i++
        }else{
            merged.push(right[j])
            j++
        }
    
  }

 

    return merged.concat(right.slice(j)).concat(left.slice(i))


  


  // loop while there are elements is both arrays

}

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//! MAIN FUNCTION TO BE CALLED RECURSIVELY

function mergeSort(numbers = []) {

  //base case is the arr length is one
  if(numbers.length <= 1){
    return numbers
  }

  //recursive
  const right = mergeSort(numbers.slice(Math.ceil(numbers.length/2)))
  const left = mergeSort(numbers.slice(0,Math.ceil(numbers.length/2)))

  return merge(left, right)
  
  // split the arr in half
    // find midpoint
    // left 
    // right

    //return helper function invocation



}
console.log(mergeSort(numbersRandomOrder))