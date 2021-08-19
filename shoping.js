const products =[
    {name: '반팔티', price:15000, quantity:1, is_selector: true},
    {name: '바지', price:25000, quantity:2, is_selector: false},
  {name: '긴팔티', price:20000, quantity:3,is_selector: true},
    {name: '핸드폰케이스', price:15000, quantity:4,is_selector: true},
    {name: '후드티', price:30000, quantity:5,is_selector: false},
];
const add =(a,b)=>a+b;

const curry = f => 
(a, ..._) =>_.length ? f(a, ..._) : (..._) => f(a, ..._);

const map =curry((f,iter) =>{
    let res =[];
for (const a of iter){
    res.push(f(a));
}
return res;

})
const filter = curry((f,iter)=>{
    let res =[];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res;

})

const reduce=curry((f, acc, iter)=>{
    if(!iter){
        iter=acc[Symbol.iterator]();
        acc=iter.next().value;
    }
    for (const a of iter){
        acc = f(acc,a);
    }
    return acc;
});

const go =(...args)=>reduce((a,f)=>f(a),args);
const pipe = (...fs)=>(a)=>go(a,...fs);




// const total_quantity=products=>go(products,
// map(p=>p.quantity),
// reduce((a,b)=>a+b));

const sum =curry((f, iter)=> go(
    iter,
    map(f),
    reduce(add)
));

const total_quantity= sum(p=> p.quantity);

const total_price=sum(p=>p.price * p.quantity);
document.querySelector('#cart').innerHTML=`
    <table> 
        <tr>
            <th>상품이름</th>
            <th>가격</th>
            <th>수량</th>
            <th>총 가격</th>
        </tr>
        <tr>
        ${go(products,
            sum(p=>`
        <tr>
            <td><input type="checkbox" ${p.is_selector ? 'checked':''}></td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td><input type="number" value="${p.quantity}"</td>
            <td>${p.price*p.quantity}</td>
        </tr>
            `),
            //reduce(add),)//안하면 배열로 받아와서 ```가생김
        )}
        </tr>
        <tr>
            <td colspan="3">합계</td>
            <td>${total_quantity(filter(p=>p.is_selector,products))}</th>
            <td>${total_price(filter(p=>p.is_selector,products))}</td>
    </tr>
    </table>
`;