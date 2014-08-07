'use strict';


angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {


        Initialization.list();




        $scope.act = Activity.is_has_running();




        $scope.go_create_activity = function () {


	        $location.path('create_activity');

        };




		$scope.go_activity_signup = function (activity_name) {


			Activity.find_by_name(activity_name).change_attribute('is_choosed', true);
            $location.path('activity_signup/' + activity_name);

        };




        $scope.activities = Activity.get_activities();

    });