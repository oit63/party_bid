'use strict';


/**
 * Created by TanghaoTsui on 14-7-15.
 */




angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location, $routeParams) {


        Initialization.signUpMessages();




        $scope.init_show_which_btn = function () {


            var running_activity = Activity.find_running_activity();
            if (running_activity && running_activity.name === $routeParams.activity_name) {


                $scope.show_which_btn = 'end';

            }
            if (!running_activity) {


                $scope.show_which_btn = 'active_start';

            }
            if (running_activity && running_activity.name !== $routeParams.activity_name) {

	            
                $scope.show_which_btn = 'disabled_start';

            }

        };




        $scope.init_show_which_btn();




        $scope.refresh = function () {


            $scope.signUpMessages = SignUpMessage.get_messages_choosed($routeParams.activity_name);
            $scope.show_which_title = 'none_number';
            if($scope.signUpMessages) {


                $scope.total_number = $scope.signUpMessages.length;
                return $scope.show_which_title = 'show_number';

            }
            if(Activity.is_choosed_running()) {


                $scope.total_number = '0';
                return $scope.show_which_title = 'show_number';

            }

        }
        $scope.refresh();





        $scope.go_activity_list = function () {
            Activity.find_by_name($routeParams.activity_name).change_attribute('is_choosed', false);
            $location.path('/activity_list');
        };




        $scope.start_activity = function () {
            $scope.show_which_btn = 'end';
            Activity.find_by_name($routeParams.activity_name).change_attribute('state', 'running');
        };




        $scope.stop_activity = function () {
            if (confirm('报名结束确认?')) {


                Activity.find_by_name($routeParams.activity_name).change_attribute('state', 'stop');
                $scope.show_which_btn = 'active_start';

            }

        };

    })