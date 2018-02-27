
function fib(n){
    if(n<2) {
        return 1;
    } else {
        return fib(n-2)+fib(n-1);
    }
}

//setup timer
console.time('timer');
setTimeout(function() {
    console.timeEnd('timer');//prints much more than 1000s
}, 1000);

fib(10);