function summaxpath(a,b,c)
{       
        a.sort(function(a,b){return a-b});
        b.sort(function(a,b){return a-b});
        c.sort(function(a,b){return a-b});
        let d=0,e=0,f=0,i=0,j=0,k=0;
        let x=4579927898;
        let n=a.length
        while (i<n && j<n && k<n)
        {
            let sum = a[i]+b[j]+c[k];
            let max = Math.max(Math.max(a[i],b[j]),c[k]);
            let min = Math.min(Math.min(a[i],b[j]),c[k]);
            if (min == a[i])
                i++;
            else if (min == b[j])
                j++;
            else
                k++;
            if (x>(max-min))
            {
                x=max-min;
                d=max;
                e=sum-(max+min);
                f=min;
            }
        }
        let l=[]
        l.push(d)
        l.push(e)
        l.push(f)
        l.sort(function(a,b){return a-b});
        l=l.reverse()
        console.log(...l);
    }
let a=[15,12,8,9];
let b=[10,17,13,8];
let c=[14,16,11,5];
summaxpath(a,b,c);