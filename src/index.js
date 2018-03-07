module.exports = function longestConsecutiveLength(array) {
  let result = [];
  let set = new Set(array);

    for(let item of set){
      if(!set.has(item-1)){
        let count = 1;

        while(set.has(item+1)){
          count++;
          item++;
        }
        result.push(count);
      }
    }
  return (result[0]) ? Math.max.apply(null, result) : 0;
  // your solution here
}
