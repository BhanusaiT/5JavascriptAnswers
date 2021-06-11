function rotatearray(arr,d,n){
    let c=d%n;
    firstpart=arr.slice(0,c);
    secondpart=arr.slice(c,n);
    return secondpart.concat(firstpart);
}
let arr=[1,2,3,4,5];
let d=2;
let n=5;
let a=rotatearray(arr,d,n);
console.log(a);