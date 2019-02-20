/*
Build a script that prints a Fibonacci sequence:
F(0) = 0
F(1) = 1
F(N) = F(n-1) + F(n-2)
Make sure you know where stop!

Tips: 
Run this script with: node fibonacci.js
Make sure you call your function
*/
function fibonacci(max, nMinus1=0,nMinus2=0){
    let _number = nMinus1 + nMinus2;
    console.log(_number);
    if (_number < max) fibonacci(max, _number, nMinus1)
}

fibonacci(0)
fibonacci(0,1)
fibonacci(100,1,0)