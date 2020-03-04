module.exports = function towelSort (matrix) {
  if(matrix){
    for (i = 0; i < matrix.length; i++){
      if(i%2 != 0){
        matrix[i].reverse();
      }
    }
    return matrix.reduce(function(acc, val){ return acc.concat(val)}, []);
  }
  else
    return [];
}
