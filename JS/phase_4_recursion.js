function range(start, end) {
  if(start === end){
    return [end];
  }
  
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if(arr.length === 1){
    return arr[0];
  }
  
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if(exp===0){
    return 1;
  }
  
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if(exp === 0) {
    return 1;
  } else if (exp === 1) {
      return base;
  }
  
  if(exp % 2 === 0){
    let result = exponent2(base, exp / 2);
    return result * result;
  } else {
    let result = exponent2(base, (exp - 1)/2);
    return base * (result * result);
  }
}

function fibonacci(n) {
  if (n === 1){
    return [0];
  } else if (n === 2){
    return [0,1];
  }
  
  let prev_fib = fibonacci(n-1);
  return prev_fib.concat([prev_fib[prev_fib.length-1] + prev_fib[prev_fib.length-2]]);
}

function deepDup(arr) {
  const result = [];
  
  for (let i=0; i < arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
      result.push(deepDup(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// const arr = [[1,2,3], [4,5,[6],9],4];
// 
// console.log(deepDup(arr));

function bsearch(arr, target) {
  const mid = Math.floor(arr.length / 2);
  
  if (arr.length === 0) {
    return -1;
  }
  
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    let result = bsearch(arr.slice(mid+1, arr.length), target);
    if (result === -1) {
      return -1;
    } else {
      return result + 1 + mid;
    }
  }
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const right = mergesort(arr.slice(mid));
  const left = mergesort(arr.slice(0,mid));
  
  return merge(left, right);
}

function merge(left, right){
  const result = [];
  while(left.length !== 0 || right.length !== 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left.concat(right));
}
const arr = [2,4,5];
const arr2 = [1,6,7];
console.log(merge(arr, arr2));
console.log(mergesort([1,4,2,5]));










