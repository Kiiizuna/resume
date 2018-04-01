
var log = function() {
    console.log.apply(console, arguments)
}

//获取数据
var getData = function(callback) {
	var xhr = new XMLHttpRequest()
	xhr.open("get","http://api.jirengu.com/city.php", true)
	xhr.send()
	xhr.onload = function() {
		callback(JSON.parse(xhr.responseText))
	}
}

getData()