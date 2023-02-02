var http = require('http');

var serv = http.createServer(function(rq, rs){
	rs.writeHead(200,{'content-type':'text/html'});
	if(rq.url == '/login')
	{
		rs.write("<h2> Login Form </h2>");
	}
	else if(rq.url == '/home')
	{
		rs.write("<h1>Home Page</h1>");
	}
	else
	{
		rs.write("<p> simple response </p>");
	}
	rs.end();
});


serv.listen(9000,function(){
	console.log("server started at 9000");
});