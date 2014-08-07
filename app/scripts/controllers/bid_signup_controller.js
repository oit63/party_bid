'use strict';


/**
 * Created by TanghaoTsui on 14-8-7.
 */




angular.module('partyBidApp')
	.controller('bid_signup_controller', function ($scope, $location, $routeParams) {


		$scope.go_bid_list = function () {




			$location.path('/bid_list/'+ $routeParams.activity_name);

		};


										}
	);