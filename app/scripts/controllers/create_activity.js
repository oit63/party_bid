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
    .controller('CreateCtrl', function ($scope, $location)
    {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        if(localStorage.length == 0 )
        {
            var names = [];
            localStorage['names'] =JSON.stringify(names);
            $scope.names = false
        }
        else
        {
            $scope.names = true
        $scope.save_item = function (name) {
            var names = [];
                var names=JSON.parse(localStorage['names']);
                //检查名称是否重复
                var count = 0;
                for(var i = names.length; i>=0; i--)
                {

                    if($scope.name  == names[i])
                    {
                        count++;
                    }
                }
                if(count == 1)
                {
                        $scope.tips = '*活动名称重复'
                }
                if(count == 0)
                {
                    //更新数据

                        var names = [];
                        var names=JSON.parse(localStorage['names']);
                        names.push(name);
                        localStorage['names'] =JSON.stringify(names);
                        $location.path('/activity_sign_up');
                    }

                    var names = [];
                    var names=JSON.parse(localStorage['names']);
                  }
        }

    });

