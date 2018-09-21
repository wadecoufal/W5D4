Array.prototype.uniq = function() {
  const result = [];
  this.forEach ((el) => {
    if (result.includes(el) === false){
        result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for (i = 0; i < this.length - 1; i++) {
    for (j= i + 1; j< this.length; j++){
      if (this[i] + this[j] === 0){
          result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  const result = [];
  for (i = 0; i < this[0].length; i++) {
    const inner_result = [];
    for (j = 0; j < this.length; j++) {
      inner_result.push(this[j][i]);
    }
    result.push(inner_result);
  }
  return result;
};
