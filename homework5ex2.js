// 2. Given an array of nested arrays. Write a recursive function
// that flattens it. (Hint create function that concats arrays).
function foo (arr,x=[]) {
  arr.forEach(item =>{
    if(!Array.isArray(item)){
      x.push(item);
    } else {
      return foo(item, x)
    }
  })
  return x;
}

foo([1, [3, 4, [1, 2]], 10]);
