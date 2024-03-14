/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunked=[]
    let i=0
    while(i<arr.length){
        chunked.push(arr.slice(i , size + i))
        i +=size;
    }
    return chunked
};
