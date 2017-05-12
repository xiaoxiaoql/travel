;
(function(){
	var directives=angular.module('directives',[]);
	directives.directive('headers',function(){
		return {
			templateUrl:'./directive/headers.html'
		}
	})
	directives.directive('foot',function(){
		return {
			templateUrl:'./directive/foot.html'
		}
	})
	directives.directive('slides',function(){
		return {
			templateUrl:'./directive/slides.html',
			link:function(){
				var swiper = new Swiper('.swiper-container', {
				    pagination: '.swiper-pagination',
				    paginationClickable: true
				});
			}
		}
	})
	directives.directive('infolist',function(){
		return {
			templateUrl:'./directive/infolist.html'
		}
	})
	
})()
;