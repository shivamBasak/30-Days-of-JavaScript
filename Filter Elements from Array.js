/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const aa=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            aa.push(arr[i]);
        }
    }
    return aa;
};