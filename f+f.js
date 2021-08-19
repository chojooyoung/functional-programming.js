//함수합성? f((g(x)) 를 생각하라.
//안전하게 합성하기위해 모나드라는 개념이 있다.
//비동기 상황을 안전하게 합성이 promise다

//함수합성을 안전하게 해나가 는것
const log=console.log;
//const g = a =>a+1;
//const f = a =>a*a;
//log(f(g(1)));

//모나드는 박스를 가지고 있다. 함수합성을 박스[] 가 가지고 있는 특성을통해합성
//log([1].map(g).map(f));//[4]

//Array.of(1).map(g).map(f).forEach(r=>log(r));//4
//map까지 존재하는 상태라면, foreach를 통해 log
//[1,2,3].map(g).filter(a=>a%2).map(f).forEach(r=>log(r));

//Promise.resolve(2).then(g).then(f).then(r=>log(r));
//프로미스는 then으로 함수를 합성 결과는 9
//프로미스는 안에 값이 있거나 없거나의 합성을 안전하게하려는게 xxx
//프로미스는 대기가 되어있는 값 (비동기)합성을 안전하게 하려는 것

//new Promise(resolve => 
//    setTimeout(()=> resolve(2),100)
//    ).then(g).then(f).then(r=>log(r));
//맵을 통해 하는이유가 어레이의 정확한 정의를 모를수도 있기에 안정적으로 실행하고
//만들어진 값을 가지고 무언가를 하기위해 사용되는 도구

//프로미스는 합성관점에서 봣을떄는 비동기상황에서도 함수를 적절한 시점에 평가하는 도구로 사용

//함수합성이 원하는데로 정확하게 이루어 지지 않을 수도 있따.
//따라서 kieisli composition은 결과를 정확히 전달할수없는 상황일때 에러가 나는 것을 해결하기 위한 함수사용

//f,g합성
//f(g(x))=f(g(x)) 결과는 항상 같다.
//실무에서는 원하는 결과와 다를 수있다
//f((gx))=g(x) g(X)에서 오류가 나면, g가리턴한 값이 f를 합성해도 g와 동일한결과나오는것

let users = [
    {id:1, name: 'aa'},
    {id:2, name: 'bb'},
    {id:3, name: 'cc'},
];

const getUserById = id =>
    find(u=>u.id == id, users) || Promise.reject('없어요!');

const f = ({name})=> name;//name이있을때만 정상동작
const g =getUserById;//id가 있을때만동작

// const fg = id => f(g(id));

// const r =fg(2);
// log(r);

// users.pop(); 
// users.pop();

// const r2 =fg(2);
// log(r);


const fg = id =>Promise.resolve(id).then(g).then(f).catch(a=>a);
fg(2).then(log);