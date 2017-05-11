var http=require('http');
var url=require('url');
var mysql=require('mysql');

//创建数据库连接
var conn=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'travel'
});
//连接数据库
conn.connect();
http.createServer(function(request,response){
	//设置请求头
	response.setHeader('Access-Control-Allow-Origin','*');
	var pathname=url.parse(request.url).pathname;
	switch(pathname){
		case "/hot":
		conn.query("select * from lv",function(err,data){
			if(err){
				throw err;
			}else{
				console.log(data)
				var cityall={};
				var arr=[];
				console.log(data[0].name)
				for(var i=0;i<data.length;i++){
					if(data[i].ishot=='hot'){
						arr.push(data[i])
					}
				}
				cityall.list=arr;
				response.end(JSON.stringify(cityall));
			}
		});
		break;
		case "/adress":
		conn.query("select * from lv",function(err,data){
			if(err){
				throw err;
			}else{
				console.log(data)
				var cityall={};
				cityall.list=data;
				response.end(JSON.stringify(cityall));
			}
		});
		break;
	}

}).listen('8899');
console.log("开启服务器");
