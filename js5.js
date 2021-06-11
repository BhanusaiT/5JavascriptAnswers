function findMax (arr)
{
    var row = 0, N=4, i, j;
    count=0
    let f=[]
    arr.forEach((c)=>{
        c.forEach((b)=>{
            if (b==1){
                count+=1
            }
        })
        f.push(count)
        count=0
    })
    console.log(f.indexOf(Math.max(...f)))
}
var arr = [[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]];
findMax(arr);