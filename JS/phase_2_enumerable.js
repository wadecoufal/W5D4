Array.prototype.myEach = function (callback) {
  for (i=0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const result = [];
  
  this.myEach(function (el) {
    result.push(callback(el));
  });
  
  return result;
};

// const arr = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.myReduce = function (callback, initialValue = null) {
  // let i = 0;
  // if (initialValue === null) {
  //   initialValue = this[0];
  //   i++;
  // }
  // 
  // while (i < this.length) {
  //   initialValue = callback(initialValue, this[i]);
  //   i++;
  // }
  // return initialValue;
  
  let newArr = this.slice();
  if (initialValue === null) {
    initialValue = this[0];
    // sliceIndex++;
    newArr = this.slice(1);
  }
  
  newArr.myEach((el)=> {
    initialValue = callback(initialValue, el);
  });
  
  
  return initialValue;
};

// arr.myReduce( (acc, el) => acc + el);




