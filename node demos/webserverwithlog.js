                                                                                                                                                                                         var h=require('http');
var url=require('url');
var fs=require('fs');

var server=h.createServer(function(req,res){
	if(req.url == '/favicon.ico')	
		return;
	
	   var obj=url.parse(req.url,true);
	   var msg=obj.query.msg;
	   var color=obj.query.color;
	   //log the request
	   var time = new Date();
	   var path = obj.pathname;
	   var data = "Request received a                                                                                                                t "+time+" for "+path+"\n";
	   fs.appendFile('log.txt', data, function(err){
		if(!err)
		{
			console.log("log generated");
		}	
	   });


	   //generate the response
	   res.writeHead(200,{'content-type':'text/html'});
	   res.write("<h1 style='color:"+color+"'>"+msg+"</h1>");
	   res.end();
	
	});

server.listen(9000,function(){
	console.log("server started")
})