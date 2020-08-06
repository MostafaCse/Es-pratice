// function add(num,num1){
//     return num+num1;
// }

// console.log(add(43,54));

// const doubleIt= function (num){
//     return num*2;
// }
// console.log(doubleIt(43));

const doubleIt=(num1,num2)=> num1+num2;  //arrow function
console.log(doubleIt(45,65));

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

console.log(doMath(4,5));