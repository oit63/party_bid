'use strict';


angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {


        Activity.is_has_activities() ? "" : $location.path('/create_activity');



        $scope.unableCreate = Activity.is_has_running();




        $scope.goto_create_activity = function () {


	        $location.path('create_activity');

        };




		$scope.goto_activity_signup = function (activity_name) {


			Activity.find_by_name(activity_name).change_attribute('is_choosed', true);
            $location.path('activity_signup/' + activity_name);

        };




        $scope.activities = Activity.get_activities();

    });