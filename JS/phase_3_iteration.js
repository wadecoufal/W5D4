
Array.prototype.bubbleSort = function () {
  
  let sorted = false;
  
  while (sorted === false) {
    sorted = true;
    
    for (i=0; i < this.length-1; i++) {
      let j = i + 1;
      if (this[i] > this[j]) {
        let x = this[i];
        this[i] = this[j];
        this[j] = x;
        sorted = false;
      }
    }
  }
  
  return this;
};

// const arr = [10,4,2,11,1,0,-4];

String.prototype.substrings = function () {
  const result = [];
  
  for (i=0; i < this.length; i++) {
    for (j=i; j < this.length; j++) {
      result.push(this.slice(i, j+1));
    }
  }
  
  return result;
};