//평가를 미루는 순서를가지고 평가순서를 달리하는 이터레이터를 반환하는 제너레이터 함수

const L ={};
L.map = function*(f,iter){
    for (const a of iter) yield f(a);
};
//L.map([1,2,3]);
var it= L.map(a => a+10,[1,2,3]);
//log(it.next());
//log(it.next());
//log(it.next());
console.log(it.next());