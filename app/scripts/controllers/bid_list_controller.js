'use strict';


/**
 * Created by TanghaoTsui on 14-8-7.
 */




angular.module('partyBidApp')
	.controller('bid_list_controller', function ($scope, $location, $routeParams) {


		$scope.goto_activity_list = function () {


			Activity.find_by_name($routeParams.activity_name).change_attribute('is_choosed', false);
			$location.path('/activity_list');

		};



		$scope.start_new_bid = function () {


			Bid.new_a_bid();
			$location.path('/bid_signup/' + $routeParams.activity_name );

		}



	});