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
        //初始化数据
        //-----------------------------------------//
        $scope.go_activity_list = function(){
            $location.path('/activity_list');};
        $scope.names = is_localStorage_null();
        $scope.save_item = function (name)
            {

                if(is_repeat(name))
                {
                    $scope.tips="活动名称有重复，请重新输入！"
                }
                else{
                    shift_event(name);
                    localStorage['yourChoice'] = JSON.stringify(name);
                    $location.path('/activity_sign_up')
                }
            }
    });

function is_localStorage_null()
{
    return Boolean(localStorage.length)
}

function is_repeat(name)
{
    var list_json= JSON.parse(localStorage['activityKey'] || '[]');
    for(var i = 0;i<list_json.length;i++)
    {
        if (list_json[i] == name) {
           return true;
        }
    }
    return false
}

function shift_event(name)
{
    var list_json= JSON.parse(localStorage['activityKey'] || '[]');
    list_json.unshift(name);
    localStorage['activityKey'] = JSON.stringify(list_json);
}

