const products =[
    {name: '반팔티', price:15000},
    {name: '바지', price:25000},
  {name: '긴팔티', price:20000},
    {name: '핸드폰케이스', price:15000},
    {name: '후드티', price:30000},
  

];
const map =(f,iter) =>{
    let res =[];
for (const a of iter){
    res.push(f(a));
}
return res;

}

console.log(map(p=>p.name,products));
//어떠한 값을 수집하겠다고 보조함수(p=>p.name을 전달)

//이터러블 프로토콜을 따른 map의 다형성
console.log([1,2,3].map(a=>a+1));

function *gen(){
    yield 3;
    yield 3;
    yield 4;
}

console.log(map(a=>a*a,gen()));
//제너레이터함수의 결과물에 대해서도 map을 할수 있기에 모든것들을 map을 할 수 있다.
//유연하고 다형성이 높다


let m = new Map();
m.set('a',10);
m.set('b',20);
console.log(map(([k,a])=>[k,a*2],m));

