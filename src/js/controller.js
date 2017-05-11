//控制器模块
;(function(){
		var controllers=angular.module('controllers',[]);
		controllers.controller('indexctrl',function($scope){
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

		})
	})()