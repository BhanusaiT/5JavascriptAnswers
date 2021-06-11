function maxsumpath(a)
{
    let n=a.length;
    let m=a[0].length;
    for(let i=1;i< n;i++)
    {
        b=0;
        for(let j=0;j<m;j++)
        {
            if (j>0 && j<m-1){
                a[i][j]+=Math.max(a[i-1][j],Math.max(a[i-1][j-1],a[i - 1][j + 1]));}
             else if (j>0){
                a[i][j]+=Math.max(a[i-1][j],a[i-1][j-1]);}
              else if (j<m-1){
                a[i][j]+=Math.max(a[i-1][j],a[i-1][j+1]);}
             b=Math.max(a[i][j],b);
        }
    }
    return b;
}
let a=[[10,10,2,0,20,4],[1,0,0,30,2,5],[0,10,4,0,2,0],[1,0,2,20,0,4]];
let e=[[1,2,3],[9,8,7],[4,5,6]]
console.log(maxsumpath(a));
console.log(maxsumpath(e));