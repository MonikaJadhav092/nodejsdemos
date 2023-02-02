var http = require('http');
var u = require('url');

var myserv = http.createServer(function(req,res){
	var url_obj = u.parse(req.url, true); //fisrt decode(sp symbols - special charaters) and then parse
	/*console.log(url_obj.pathname);
	console.log(url_obj.query);
	console.log(url_obj.query.name);
	*/
	var nm = url_obj.query.name;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1 style='color:green'> Welcome "+nm+"</h1>");
	res.end();
});

myserv.listen(9000,function() {
	console.log("server started at 9000")
})