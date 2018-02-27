
// object literal
var foo = {};
console.log(foo);
foo.bar = 12;
console.log(foo);

var foo1 = { bar:12, ok:200 };
console.log(foo1);

var foo = {
    bar: 123,
    bas: [1,2,3]
}
console.log(foo);

// immediately execute function after declaring it
(function foo() {
    console.log("shiv");
})();

(function magic() {
    console.log("invoked without call");
})();

// choose to avoid needlessly naming of functions these are called anonymous functions
(function () {
    console.log("anonymous function");
})();

var foo = 123;
if(true) {
    (function() {
        console.log("another anonymous function");
        var foo = 456;
    })();
}
console.log(foo);

// javascript has first class functions
// means that function can be treated in the same way as any other variables
var foo2 = function () {
    console.log("first class function");
}
foo2();

// Higher order function in JS. a function which takes a function as its argument
/*
setTimeout(function () {
    console.log("message will be displayed after 2s.");
}, 2000 );

// another type
function foo4() {
    console.log("this message will be displayed after 1s.");
}
setTimeout(foo4, 1000); */

// display clock after every second
function clock() { // We create a new Date object
    var time = new Date();
    // Access the "getHours" method on the Date object with the dot accessor.
    var hours = time.getHours();
    // Access the "getMinutes" method with the dot accessor.
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    function _time(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
    console.log("current time is: (hours:min:secs)=> "+_time(hours)+":"+_time(minutes)+":"+_time(seconds));
}
//setInterval(clock, 1000);

// closures
function outer(arg) {
    var outervar = arg;
    (function () {
        console.log("anonymous function automatically invokes calls outervar: " + arg);
    })();
    function foo() {
        console.log("foo prints outervar: " + outervar);
    }
    foo();
}
outer('hello');

// simulating users
function longRun(callback) {
    console.log("wait for 10 seconds");
    setTimeout(callback, 10000);
    console.log("operation ended");
}
function userClicked() {
    console.log("starting a long operation");
    longRun( function () {
        console.log("Bye");
    });
}
// userClicked();


// JS copies reference of an existing variable
var foo = {bas: 123};
var boo = foo;
console.log("foo.bas is "+ foo.bas);
boo.bas = 10;
console.log("foo.bas is "+ foo.bas); // foo.bas has changed


var foo = {bas: 123};
var boo = {bas: foo.bas}; // a reference created
console.log("foo.bas is "+ foo.bas);
boo.bas = 456;
console.log("foo.bas is "+ foo.bas);


// default or non-existing value of anything in JS is undefined
var foo;
console.log(foo);
var foo = {bar: 123};
console.log("foo.bar is " + foo.bar + " \nfoo.bas is "+foo.bas);

console.log('\n');
// use of 'this'
var foo = {
    bar: 123,
    bas: function() {
        console.log('inside this.bar is: '+this.bar);
    },
    bak : {
        bar: 111,
        bas: 222
    },
    ano: function(bak1) {
        var bak = {
            bar: 333,
            bas: 444
        };
        console.log('bak.bas of foo is '+bak1.bas+" \nbak.bar of foo is "+bak1.bar);
        // using 'this' keyword
        console.log('bak.bar of foo is: '+this.bak.bar+'\nbak.bas of foo is: '+this.bak.bas);
        // local bak.bas
        console.log('bak.bas of ano is: '+bak.bas+'\nbak.bar of ano is: '+bak.bar);
    },
    auto: (function() {
        console.log('anonymous hai pehle aayega');
    })()
};

console.log('foo.bar is: ', foo.bar);
foo.bas();
foo.ano(foo.bak);

/******************* JS prototype *******************/
function poo() { 
    var p  = {
        a: 1,
        b: 2,
        c: 3
    };
};
poo.prototype.bar = 123;

// instance of poo function
var bas = new poo();
console.log(bas.p.a);

// another instance
var paa = new poo();
// prototype value copied
console.log(bas.bar);
console.log(bas.bar);
// console.log(bas.bar);
