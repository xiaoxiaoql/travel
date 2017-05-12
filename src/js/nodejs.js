var http=require('http');
var url=require('url');
var mysql=require('mysql');
var querystring=require('querystring');

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
	var strurl=url.parse(request.url).query;
	console.log(strurl)
	var str=querystring.parse(strurl);
	console.log(str);
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
		case "/selectall":
		conn.query("select * from dream",function(err,data){
			if(err){
				throw err;
			}else{
				console.log(data)
				var lvall={};
				lvall.list=data;
				response.end(JSON.stringify(lvall));
			}
		});
		break;
		case "/write":
			conn.query("insert into dream (auto, contain, url) values ('"+str.auto+"','"+str.contain+"','"+str.url+"')",function(err,data){
				if(err){
					throw err;
				}else{
					conn.query("select * from dream",function(err,data){
						if(err){
							throw err;
						}else{
							console.log(666)
							var lvall={};
							lvall.list=data;
							response.end(JSON.stringify(lvall));
						}
					});
				}
			});
		break;
		case "/login":
			conn.query("select * from user",function(err,data){
				if(err){
					throw err;
				}else{
					for(var i=0;i<data.length;i++){
						console.log(data[i].username==str.username);
						console.log(data[i].password==str.password);
						if(data[i].username==str.username&&data[i].password==str.password){
							var verify={};
							verify.word=1;
							verify.datail=data[i];
							response.end(JSON.stringify(verify))
						}else{
							// var verify={};
							// verify.word=0;
							// response.end(JSON.stringify(verify))
						}
					}
				}
			});
		break;
	}

}).listen('8899');
console.log("开启服务器");
