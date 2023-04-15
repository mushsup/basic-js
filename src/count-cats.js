const { NotImplementedError } = require('../extensions/index.js');
function countCats(matrix) {
  let cats = 0;
  for (i=0;i<matrix.length;i++){
    for (x=0;x<matrix[i].length;x++){
        if (matrix[i][x]=="^^") {
        cats++;
      }
}
}
return cats;
}
module.exports = {
  countCats
};
