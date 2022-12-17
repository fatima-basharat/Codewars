// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// My solution
function getLength(arr){
    return arr.length;
  }
  function getFirst(arr){
    return arr[0];
  }
  function getLast(arr){
    return arr[arr.length-1];
  }
  function pushElement(arr){
    arr.push(1);
    return arr;
  }
  function popElement(arr){
    arr.pop()
    return arr;
  }