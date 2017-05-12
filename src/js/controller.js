//控制器模块
;(function(){
		var controllers=angular.module('controllers',[]);
		controllers.controller('indexctrl',function($scope,$cookieStore){
			$scope.page=1;
			$scope.nav=function(n){
				$scope.page=n;
			}
		});
		controllers.controller('page1ctrl',function($scope,$http){
			$scope:ajax=function(){
				$http({
					url:'http://localhost:8899/hot',
					method:'GET',
					params:{

					}
				}).then(function(data){
					console.log(data.data.list);
					$scope.arr=data.data.list;

				})
			}
			$scope:ajax();
		})
		controllers.controller('page2ctrl',function($scope,$http){
			$scope:ajax=function(){
				$http({
					url:'http://localhost:8899/adress',
					method:'GET',
					params:{

					}
				}).then(function(data){
					console.log(data.data.list);
					$scope.arr=data.data.list;

				})
			}
			$scope:ajax();
		})
		controllers.controller('page3ctrl',function($scope,$http){
			$scope.all=function(){
				$http({
					url:'http://localhost:8899/selectall',
					method:'GET',
					params:{

					}
				}).then(function(data){
					console.log(data)
					$scope.dreamarr=data.data.list;
				})
			}
			$scope.dreambtn=function(){
				$http({
					url:"http://localhost:8899/write",
					method:"GET",
					params:{
						auto:$scope.autoes,
						contain:$scope.contains,
						url:'http://localhost:8080/th/demo/src/img/list2-1.jpg'
					}

				}).then(function(data){
					$scope.dreamarr=data.data.list;
					//发送完成后清空输入框
					$scope.autoes='';
					$scope.contains='';
				})
			}
			$scope.all();

		})
		controllers.controller('page4ctrl',function($scope){

		})
		controllers.controller('detailctrl',function($scope){
ss
		})
		controllers.controller('loginctr',function($scope,$window,$http){
			$scope.username='';
			$scope.password='';
			$scope.tips='';
			$scope.loginbtn=function(){
				//对用户名和密码格式的判断
				if($scope.username==''||$scope.password==''){
					$scope.tips='用户名或密码不能为空';
					return false;
				}else if(!/^1[34578][\d]{9}$/.test($scope.username)){
					$scope.tips='电话号码格式错误';
					return false;
				}else if(!/^[\d\w]{6,10}$/.test($scope.password)){
					$scope.tips='密码错误';
					return false;
				}
				$http({//对用户名和密码正确性的判断
					url:'http://localhost:8899/login',
					method:'GET',
					params:{
						username:$scope.username,
						password:$scope.password
					}

				}).then(function(data){
					console.log(data)
					if(data.data.word==1){
						$window.location.href ="http://localhost:8080/travel/src/index.html#!/index/page1";
					}else{
						$scope.tips='错误';
					}
				})
				
			}

		})
	})()