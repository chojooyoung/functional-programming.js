//값을 축약하는 함수
//하나의 값을 누적해 나갈때
const products =[
    {name: '반팔티', price:15000},
    {name: '바지', price:25000},
  {name: '긴팔티', price:20000},
    {name: '핸드폰케이스', price:15000},
    {name: '후드티', price:30000},
  

];
const nums = [1,2,3,4,5];
let total =0;
for (const n of nums){
    total=total+n;
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
//console.log(reduce(add,0,[1,2,3,4,5]));
console.log(reduce(add,[1,2,3,4,5]));

//보조함수를 통해 어떻게 축약할지 완전히 위임하기 때문에, 복잡한 형태의 데이터역시 축약하는데 있어서 유리.

console.log(
    reduce(
    (total_price, product)=>total_price + product.price,
    0,products));
