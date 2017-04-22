'use strict';
function fib(n) {
    if(n === 0) {
        return 0;
    }else if(n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2); //関数の定義内で関数自身を呼ぶ == 再帰
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}