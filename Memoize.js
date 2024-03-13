/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const c={};
    return function(...args) {
        const k=JSON.stringify(args);
        if(k in c) {
            return c[k];
        }
        c[k]= fn(...args);
        return c[k];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */