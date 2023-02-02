var h = require('http');

//node app - web server
var myserver = h.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> Welcome to Node Web server</h1>");
	res.end();
});

myserver.listen(9000,function(){
  console.log("server running on 9000");
})