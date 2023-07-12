Array.range = function(start, count) {
    return Array.from({ length: count }, (_, index) => start + index);
  }
  
  Array.prototype.sum = function(arr) {
    let 
      i = 0,
      sum = 0;
    while (i < this.length) {
      sum += this[i]
      i++;
    }
    return sum;
  }