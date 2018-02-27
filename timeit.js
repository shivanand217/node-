/*console.time('timer');

setTimeout(function() {
    console.timeEnd('timer');
}, 1000);*/

console.time('timer');

function fib(n) {
    if(n < 2) {
        return 1;
    } else {
        return fib(n-2)+fib(n-1);
    }
}
var ans = fib(60);
console.log(ans);
console.log("process ends");

console.timeEnd('timer')