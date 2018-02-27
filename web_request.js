
function longRun(callback) {
    // simulate a 3s opearation
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log("start a long operation for request: "+request.id);
    longRun( function() {
        console.log("ending a long operation for request: "+request.id);
    });
}

// simulate a web request
webRequest({id: 1});

// second request
webRequest({id: 2});

