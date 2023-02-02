var http = require('http');
var url = require('url');
var fs = require('fs');

var myserv = http.createServer(function(req,res){
	//object - multiple key-value pairs
	var parsed_url = url.parse(req.url , true);	
	var pname = parsed_url.pathname;
	//console.log(pname);
	var fpath = pname.substring(1);
	fs.readFile(fpath, function(err, data){
		if(!err)
		{	
			res.writeHead(200,{'content-type':'text/html'});
			res.write(data.toString());
			res.end();
		}	
	});
	

	/*var data = fs.readFileSync(fpath);
	res.writeHead(200,{'content-type':'text/html'});
	res.write(data.toString());
	res.end();*/	

});

myserv.listen(9000, function(){
	console.log("server started at 9000");
})

