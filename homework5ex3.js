function sum (n){
  let sumofDigits = 0;
  while(n != 0){
    sumofDigits += (n % 10);
    n = (n - n % 10) / 10;
  }
  return sumofDigits;
}

function oneDigit(n){
  if (n <= 9) {
    return n;
  }
  n = sum(n);
  return oneDigit(n);
}
