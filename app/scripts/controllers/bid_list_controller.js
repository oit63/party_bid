'use strict';


/**
 * Created by TanghaoTsui on 14-8-7.
 */




angular.module('partyBidApp')
	.controller('bid_list_controller', function ($scope, $location, $routeParams) {


		Initialization.bidEvents();


		$scope.bidEvents = BidEvent.get_bidEvents();
		console.log(JSON.stringify($scope.bidEvents))


		$scope.goto_activity_list = function () {


			Activity.find_by_name($routeParams.activity_name).change_attribute('is_choosed', false);
			$location.path('/activity_list');

		};

		$scope.goto_bid_signup = function (bidEvent_serial_number) {


			$location.path('/bid_signup/' + $routeParams.activity_name + "/" + bidEvent_serial_number);
		}



		$scope.start_new_bid = function () {


			var bidEvent = new BidEvent(BidEvent.set_serial_number(), $routeParams.activity_name);
			bidEvent.save();
			$location.path('/bid_signup/' + $routeParams.activity_name + "/" + BidEvent.get_serial_number());

		}



	});