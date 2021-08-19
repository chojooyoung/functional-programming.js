//callback? 필요할떄 불러쓰는 함수

//비동기 상황을 일급값으로 다룬다는 것에서 callback과 차이가있다.


//비동기를 값으로 만드는 promise
//promise라는 클래스를 통해 만들어진 인스턴스를 반환
//대기 성공 실패를 다루는 일급 값으로 이루어져 있다.
//대기와 일을 끝내는 것들을 코드나 컨테스트로만 다루는 것이 아니라
//대기 되어 지는 값을 만든다 라는 것이 콜백과 큰 차이를 가지고 있다.
//일급이라는 얘기는 변수에할당및 일들을 이어 나갈 수 있다.



// function add10(a, callback){
//     setTimeout(()=> callback(a+10),100);
// }

// var a =add10(5,res=>{
//     add10(res, res=>{
//         add10(res,res=>{
//             console.log(res);
//         });
//     });
// });

// //console.log(a);//undifind
// function add20(a){
//     return new Promise(resolve => setTimeout(()=> resolve(a+20),100));
// }

// var b = add20(5)
//     .then(add20)
//     .then(add20)
//     .then(console.log);
// //console.log(b);//promise
// //console.log(add10(5,_=>_));//undifiend
// //console.log(add20(5,_=>_));//promise

// let c = add20(5,_=>_);
// //console.log(c);
//d=c.then(a=>a-5);
//console.log(d);

// 일급활용
//const go1 = (a,f)=> f(a);//동기적으로 값이 필요 
const add5 = a => a+5;//동기적으로 값이필요
//promise가 아닌 값이 들어와야 된다.
const go1 =(a,f) => a instanceof Promise ? a.then(f):f(a);//promise로 다형성을 지원
const n1=10;
const delay100 = a => new Promise(resolve=> 
    setTimeout(()=>resolve(a),100));//100m/s뒤에 resolve에 전달

let r = go1(10,add5);
let r2 = go1(go1(delay100(10),add5,console.log));
console.log(r);//15
console.log(r2);//15
//console.log(go1(Promise.resolve(10),add5));//promise

