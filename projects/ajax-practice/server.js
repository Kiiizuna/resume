// console.log("hello world")

var http = require("http")
http.createServer(function(req, res) {
	console.log(req)
	res.end("hello world!!") // 响应的内容
}).listen(8080)
//打开localhost:8080端口就可以看到"hello world!!"