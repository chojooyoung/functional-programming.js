const products =[
    {name: '반팔티', price:15000},
    {name: '바지', price:25000},
  {name: '긴팔티', price:20000},
    {name: '핸드폰케이스', price:15000},
    {name: '후드티', price:30000},
  

];

const filter = (f,iter)=>{
    let res =[];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res;
}

const map =(f,iter) =>{
    let res =[];
for (const a of iter){
    res.push(f(a));
}
return res;

}
const reduce=(f, acc, iter)=>{
    if(!iter){
        iter=acc[Symbol.iterator]();
        acc=iter.next().value;
    }
    for (const a of iter){
        acc = f(acc,a);
    }
    return acc;
};

const add =(a,b)=>a+b;
console.log(reduce(
    add,
    map(p=>p.price,
        filter(p=>p.price<20000,products)))
);

//기대값을 하나씩 생각하면서 구현해봅시다.
