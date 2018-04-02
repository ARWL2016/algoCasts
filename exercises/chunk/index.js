// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  const result = []; 

  for (let i=0; i < array.length; i += size) {
    const slice = array.slice(i, i + size); 
    result.push(slice);
  }
  return result;
}


console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));



module.exports = chunk;


// function chunk(array, size) {
//   const result = []; 
//   let subArray = [];

//   array.forEach((num, index) => {
//     subArray.push(num); 

//     if (subArray.length === size || index === array.length -1) {
//       result.push(subArray); 
//       subArray = [];
//     }
//   })
//   return result;

// }
