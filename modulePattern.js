function printable() {
    var msg = "hello";
    function setMessage(newMsg) {
        if(!newMsg) { 
            throw new Error('cannot set empty message');
        }
        msg = newMsg;
    }   
    function getMsg() {
        return msg;
    }
    function printMsg() {
        console.log(msg);
    }
    var ret = {
        setMsg: setMessage,
        getMsg: getMsg,
        printMsg: printMsg
    };
    return ret; // returning objects
}

// pattern in use
var awesome1 = printable();
awesome1.printMsg();

var awesome2 = printable();
//awesome2.printMsg();
awesome2.setMsg("Become an expert in Node");
awesome2.printMsg();

awesome2.setMsg("sdasdasd"); // throw error
awesome2.printMsg();
