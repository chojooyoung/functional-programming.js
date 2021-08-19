const products =[
    {name: '반팔티', price:15000},
    {name: '바지', price:25000},
  {name: '긴팔티', price:20000},
    {name: '핸드폰케이스', price:15000},
    {name: '후드티', price:30000},
  

];
const add =(a,b)=>a+b;

const map =(f,iter) =>{
    let res =[];
for (const a of iter){
    res.push(f(a));
}
return res;

}
const filter = (f,iter)=>{
    let res =[];
    for (const a of iter){
        if(f(a)) res.push(a);
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

//go는 함수들과 인자를 받아 즉시 어떤값을 가
const go =(...args)=>reduce((a,f)=>f(a),args);
// const pipe = (...fs)=>(a)=>go(a,...fs);
// console.log(go(
//     0,
//     a=>a+1,
//     a=>a+10,
//     a=>a+100,
// ));


//함수들이 나열되어있는, 합성된 함수로 만들어진 함수
// const f = pipe(
//     (a,b)=>a+b,
//     a => a+1,
//     a => a+10,
//     a => a+100);

console.log(go(
    products,
    products=>filter(p=>p.price<20000,products),
    products=>map(p=>p.price,products),
    prices=> reduce(add,prices),
)
)


//curry 함수 만들어보기
//코드를 값으로 다루면서 원하는 시점에 평가시키는 함수
//함수를 받아서 함수를 리턴하고 인자를 받아서 인자가 원하는 갯수의 인자가 들어왔을때, 나중에 평가시키는

const curry = f => 
(a, ..._) =>_.length ? f(a, ..._) : (..._) => f(a, ..._);
// 함수를 받아 함수를리턴하고, 리턴된 함수가 실행되었을때 인자가 두개이상이라면length가 있을때 받아둔 함수를 즉시 실행하고
//아니라면 다시 새 인자를 받은후 리턴 
const mult = curry((a,b) => a*b);
console.log(mult(1));
//함수를 전달해서 즉시 리턴이된다 이 함수의 인자를 하나만 전달하면, 그다음 결과는 함수다