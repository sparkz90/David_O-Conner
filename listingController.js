
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) 
  {
      $scope.listings = Listings;
      $scope.detailedInfo = undefined;
      $scope.newListing = undefined;
      $scope.newDetail = '';
	     $scope.ListingIndex = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      	
      	$scope.listings.push($scope.newListing);
		    $scope.newListing = undefined;

    };
    $scope.deleteListing = function(index) {
		  
		    $scope.listings.splice(index,1);

    };
    $scope.showDetails = function(index) {
    	 $scope.newDetail = $scope.listings[index].address;
      	$scope.listingIndex = index;
      	console.log($scope.newDetail);
		    console.log($scope.listingIndex);

    };
  }
]);