function findFirstDuplicate(arr) {
  for (let index in arr){
    let x=parseInt(index)+1;
    
      if (arr[index]===arr[x]){
       
        return (arr[index]);
      } 
      else if (x===arr.length){
        
        return(-1);
      }
    }
  }



if (require.main === module) {
  console.log("Expecting: 7");
  console.log("=>", findFirstDuplicate([2, 1, 6, 3, 2, 7, 7]));

  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// for each index of an array I will see if it matches any other index and if it does I will have it return that index and then stop checking since the instructions are to return the first match. And I am assuming find 'first' means when reading left to right. I will iterate through the array and check the index next to the current index by making the index an integer an adding 1 to it then using an if statement to see if the current index has the same value as that index plus 1, or the next index. 
