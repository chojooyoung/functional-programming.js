const products =[
    {name: '반팔티', price:15000},
    {name: '바지', price:25000},
  {name: '긴팔티', price:20000},
    {name: '핸드폰케이스', price:15000},
    {name: '후드티', price:30000},
  

];

const add =(a,b)=>a+b;
let under20000 = [];
for (const p of products){
    if (p.price<20000) under20000.push(p);

}
console.log(...under20000);

const filter = (f,iter)=>{
    let res =[];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res;
}






console.log(...filter(p=>p.price<20000,products));
//filter 역시 이터러블프로토콜을 따른다
