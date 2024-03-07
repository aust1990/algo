
/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
    // create variable for min index
    // outer loop traverses the array minus one
    //inner loop compares it's voi to the current min
      // if the element at the inner loop var is less than the current element,
      // min is set to the INDEX of the lesser element 
    // outside inner loop swap if i is not the min 
    

    for(let i=0;i <nums.length-1;i++){
        let min = i
        for(let j=i+1;j < nums.length;j++){
            if(nums[min] > nums[j]  ){
                min = j               
            }
        }
        if(min !== i){
            let temp = nums[i]
            nums[i]= nums[min]
            nums[min] = temp
        }
    }
    return nums
}

console.log(selectionSort(numbersOrdered))
console.log(selectionSort(numbersRandomOrder))
console.log(selectionSort(numbersReversed))