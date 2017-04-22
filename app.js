'use strict';
const memo = new Map(); //memo = 新規の連想配列
memo.set(0, 0); //memoの添字key0番目に0
memo.set(1, 1); //memoの添字key1番目に1
function fib(n) {
    if(memo.has(n)) { //添字keyがあったら
        return memo.get(n); //添字key番目の値を返す（これで0番目0,1番目1が返却）
    }
    const value = fib(n - 1) + fib(n - 2); //関数の定義内で関数自身を呼ぶ == 再帰
    memo.set(n, value); //添字key n番目にvalueをセット
    return value;
}
const length = 100;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}