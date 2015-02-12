var app = angular.module('Clues',[]);
app.controller('CharSelector',['$scope',function($scope){
	$scope.chars = {
		scarlet:{url:'http://th09.deviantart.net/fs70/PRE/i/2013/217/2/a/jessica_rabbit_by_paullus23-d6gpy7d.jpg'},
		mustard:{url:'http://i01.i.aliimg.com/wsphoto/v0/1456170851/CL5048-Yellow-font-b-Sexy-b-font-Adult-Women-s-Racing-Suit-Zipper-V-neck-font.jpg'},
		white:{url:'http://i01.i.aliimg.com/wsphoto/v3/921620067_3/White-Sexy-costumes-New-2014-melting-fantasia-nurse-costume-uniform-plus-size-Hot-sexy-lingerie-women.jpg'},
		olive:{url:'http://image.rioswimshop.com/image/data/bandeira/Brazilian-Bikini-Green-Bandeira-01.jpg'},
		peacock:{url:'http://www.wallpaperfly.com/thumbnails/detail/20121010/iron%20man%20tony%20stark%20robert%20downey%20jr%20iron%20man%202%201441x2000%20wallpaper_www.wallmay.net_97.jpg'},
		plum:{url:'http://www.squirrelfarts.com/sfblog/wp-content/uploads/2212/01/closer_02.jpg'}
	}
}]);
app.controller('StepController',['$rootScope','$scope',function($rootScope,$scope){
	$rootScope.index = 0
	this.isCurrent = function(i){
		return i == $rootScope.index
	};
	this.prev = function(){
		$rootScope.index--;
	};
	this.next = function(){
		$rootScope.index++;
	};
}]);
/*
var app = angular.module('bearStore',[]);
app.controller('StoreController',function(){
	this.products = bears;	
	this.increment = function(product)
	{
		product.count++;
		product.isBoy = !product.isBoy
	}
})
var bears = [
	{
		name: 'alice',
		isBoy: false,
		count: 0
	},
	{
		name: 'hsiung',
		isBoy: true,
		count: 1
	}
]

})()
*/
