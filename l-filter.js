let L ={};

L.filter = function *(f,iter){
    for (const a of iter) if (f(a)) yield a;

};
var it=L.filter(a=> a%2,[1,2,3,4]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
//지연 평가 방식이 이제는 js의 공식적인 값에서 지연된 평가를 약속된 값을 통해 값을 다룰수 있다.
//서로 다른 라이브러리, 다른 함수 등도 같이해서 수있다.