'use strict';


/**
 * Created by TanghaoTsui on 14-8-7.
 */




angular.module('partyBidApp')
	.controller('bid_signup_controller', function ($scope, $location, $routeParams) {


		$scope.goto_bid_list = function () {




			$location.path('/bid_list/'+ $routeParams.activity_name + '/' + $routeParams.serial_number);

		};




		$scope.end_bid_signup = function () {

			if (confirm('确定要结束本次竞价吗?')) {


				$location.path('bid_list/' + $routeParams.activity_name + '/' +  '0');

			}
		}


	}

	);