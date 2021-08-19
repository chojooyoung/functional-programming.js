const range = l =>{
    let i =-1;
    let res = [];
    while(++i < l){
        res.push(i);
    }
    return res;
}

console.log(range(5));

//let list = range(4);

const L ={};
L.range=function *(l){
    let i =-1;
    while(++i<l){
        yield i;
    }
};

var list = L.range(4);
console.log(list);
console.log(list.next());
console.log(list.next())
console.log(list.next());

//일반 array 어레이를만들고 이터레이터를 만들고 next()하면서순회
//실행됫을때 이터레이터를 만들고 자기자신을 그냥 리턴하는 이터러블이고, 해당함수를 실행하면
//이미 만들어진 함수를 리턴만하고 순회를 한다.->효율적

