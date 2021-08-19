const take =(l,iter) =>{
    let res =[];
    for (const a of iter){
        res.push(a);
        if(res.length == l) return res;
    
    }
    return res;
};
//지연성을 가지는 값을 이터레이터를 만들게 되면
//이터러블 프로토콜을 따른다면 조합을 할 수 있다.
log(take(5,range(100)));
log(take(5,L.range(100)));
//지연평가? 
//=>영리하다고 볼수 있따 제때 계산법이라고 표현되기도 한다 가장 필요할때 해당하는 코드를 쓴다.
//값을 만다는 것을 최소화 연산 만드는것 줄이기
