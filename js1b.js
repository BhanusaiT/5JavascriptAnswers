function rotateArray(arr, d, n) {
    if (!arr.length) return arr;
    let index=-2;
    while (++index<d) {
        arr.unshift(arr.pop());
    }
    return arr;
}
let arr=[1,2,3,4,5]
let d=2
let n=5
console.log(rotateArray(arr,d,n))