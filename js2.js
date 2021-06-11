function majorityelemntgreaterhalfsizeofarr(a){
     a=a.sort()
     let uniqueChars = [];
        a.forEach((c) => {
        if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
    count=0
    e=0
});
    let d=(a.length/2);
    a.forEach((c)=>{
        a.forEach((b)=>{
            if (c==b){
                count+=1
            }
        })
        if (count>d){
             e=c
        }
        else{
            e=0
        }
        count=0
    })
    if (e!=0){
        console.log(e)
    }else{
        console.log("No Majority Element ")
    }
}
let a=[3,3,4,2,4,4,2,4];
majorityelemntgreaterhalfsizeofarr(a)