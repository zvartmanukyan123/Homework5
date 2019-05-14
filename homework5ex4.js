function rotate(arr, n) {
    if(n > 0) {
      let firstElement = arr.shift();
      arr.push(firstElement);
    } else {
      let lastElement = arr.pop();
      arr.unshift(lastElement);
    }
    return arr;
}

function rec (arr, n) {
   if(n == 0) {
     return arr;
   }
   arr = rotate(arr,n);
   if(n > 0) {
     n--;
   } else {
     n++;
   }
   return rec(arr,n);
}
