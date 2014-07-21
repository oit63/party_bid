/**
 * Created by TanghaoTsui on 14-7-14.
 */
'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('create_activity_controller', function ($scope, $location)
    {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_activity_list = function(){
            $location.path('/activity_list');};
        if (localStorage.length != 0 )
        {
            $scope.names = true
        }
        else
        {
            $scope.names = false
        }

        $scope.save_item = function (name)
            {

                var list_json= JSON.parse(localStorage['activityKey'] || '[]');
                for(var i = 0;i<list_json.length;i++)
                {
                    if(list_json[i]==name)
                    {
                        var repeat=1;
                    }
                }
                if(repeat==1)
                {
                    $scope.tips="活动名称有重复，请重新输入！"
                }
                else{
                    list_json.unshift(name);
                    localStorage['activityKey']=JSON.stringify(list_json);
                    $location.path('/activity_sign_up')
                }
            }


    });

