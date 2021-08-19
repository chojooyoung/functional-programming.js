// const iterable={
//     [Symbol.iterator](){
//         let i = 3;
//         return{
//             next(){
//                 return i == 0 ? {done: true } : {value: i--,done:false};
//             },
//             [Symbol.interaor](){return this;}
//         }
//     }
// };
// let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// for (const a of iterable) console.log(a);

// arr2=[1,2,3];
// let iter2=arr2[Symbol.iterator]();
// iter2.next();
// console.log(iter2[Symbol.iterator]()==iter2);
// for (const a of arr2) console.log(a);

// for(const a of document.querySelectorAll('*'));
// console.log(a);//모든 문서
// const all = document.querySelectorAll('*');
// console.log(all);//이터러블 형태로 나옴
// let iter3 = all[Symbol.iterator]();
// log(iter3.next());
// log(iter3.next());//value값이 나옴

function *gen(){
    yield 1;
    if(false) yield 2;
    yield 3;
    return 100;
};

let iter=gen();
 console.log(iter[Symbol.iterartor] == iter);
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
for (const a of gen()){
    console.log(a);
};

function *odds(l){
    for(const a of infinity(1)){
        if(a%2) yield a;
        if(a==l) return;

    }

}

function *infinity(i=0){
    while(true) yield i++;
}
// iter3=infinity();
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());