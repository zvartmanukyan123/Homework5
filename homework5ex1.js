// 1. Given an array. Write a recursive function that removes the
// first element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to
// second...)

function hideFirstNum(arr,newArr=[]) {
  if (arr.length == 1) {
    return newArr.reverse();
  }
    let lastElement = arr.pop()
    newArr.push(lastElement);
    return hideFirstNum(arr, newArr);
}

hideFirstNum([1,3,7]);
