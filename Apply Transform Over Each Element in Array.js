/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    reArr=[];
    for(let i=0;i<arr.length;i++){
       reArr[i]=fn(arr[i],i);

    }
    return reArr;
};