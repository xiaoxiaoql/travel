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
					pramas:{

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
					pramas:{

					}
				}).then(function(data){
					console.log(data.data.list);
					$scope.arr=data.data.list;

				})
			}
			$scope:ajax();
		})
		controllers.controller('page3ctrl',function($scope){
		})
		controllers.controller('page4ctrl',function($scope){

		})
		controllers.controller('detailctrl',function($scope){

		})
	})()