const age=[34,54,32,54];
const age1=[56,65,32,11];
const age2=[76,87,32];
const fullage=age.concat(age1).concat([5]).concat(age2); //older version
console.log(fullage);

const fullage1=[...age,...age1, 5,...age2];  //es6 version
console.log(fullage1);

const maximum=Math.max(...age2);
console.log(maximum);