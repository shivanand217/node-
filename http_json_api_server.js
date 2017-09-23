/**
Problem:
Write an HTTP server that serves JSON data when it 
receives a GET request to the path '/api/parsetime'.
Expect the request to contain a query string with a key
'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z
The JSON response should contain only 'hour', 'minute' and 'second' properties.

{
  "hour": 14,
  "minute": 23,
  "second": 15
}

Add second endpoint for the path '/api/unixtime' 
which accepts the same query string but returns UNIX epoch time 
in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) 
under the property 'unixtime'. For example:

{ "unixtime": 1376136615474 }
Your server should listen on the port provided by the 
first argument to your program.

**/

const http = require('http')

const url = require('url')

// api 1
function parsetime (time){
	return{
		hour : time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

// api 2
function unixtime (time){
	return {
		unixtime: time.getTime()
	}
}

const server = http.createServer(function(request, response){

	const parsedUrl = url.parse(request.url, true)

	const time = new Date(parsedUrl.query.iso)

	let result

	// (/api/parsetime)
	// (/api/unixtime)

	// returns true if this format matches

	if (/^\/api\/parsetime/.test(request.url)){
		
			result = parsetime(time)
	} else if (/^\/api\/unixtime/.test(request.url)){

			result = unixtime(time) 
	}

	if(result) {

		response.writeHead(200, {'Content-Type': 'application/json'})

		response.end(JSON.stringify(result))
	} else {

		response.writeHead(404)

		response.end()
	}

})

server.listen(Number(process.argv[2]))