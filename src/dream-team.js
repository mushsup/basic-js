const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let arr = [];
  if(!members) return 0;
  if(members===[]) return 0;
  if(!members) return 0;
  if ((typeof members)==="number"){
    return 0;
  }
  
  console.debug(typeof members);
 for (let mem of members){
  if(!mem) return 0;
  if ((typeof mem)!="string"){
    return 0;
  }
  arr.push(mem.trim()[0]);
 }

  return arr.sort().join("").toUpperCase();
}









module.exports = {
  createDreamTeam
};
