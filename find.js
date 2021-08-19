const users = [
    {age:32},
    {age:1},
    {age:3},
    {age:19},
    {age:27},
    {age:29},

];

const find =(f,iter)=>go(
    iter,
    filter(a=>f(a)),
    take(1),
    ([a])=>a
);

