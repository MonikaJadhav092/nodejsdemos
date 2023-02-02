console.log("File name : "+__filename);
console.log("Dir name : "+__dirname);

setInterval(function(){console.log("welcome to server side")}, 1000);

console.log("Running node app : "+process.pid);
console.log("node app working directory : "+process.cwd());