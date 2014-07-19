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
        var names = [];
           //保证有数组，并存入数据,跳转页面
        if(localStorage.length ==0)
            {
                localStorage['names'] =JSON.stringify(names);
                $scope.save_item = function (name)
                {
                        names.push(name);
                        localStorage['names'] = JSON.stringify(names);
                        $location.path('/activity_sign_up');

                }
            }
        else
            {
                //读取活动
                names = JSON.parse(localStorage['names']);
                //判断“返回”按钮是否应该显示
                if (names.length >= 1 )
                    {
                        $scope.names = true
                    }
                $scope.save_item = function (name)
                    {
                        //检查名称是否重复
                        //创建标记
                        var count = 0;
                        //遍历数组找出重复
                        for (var i = names.length; i >= 0; i--)
                            {
                                if (name == names[i])
                                    {
                                        count++;
                                    }
                            }
                        //结果处理
                        if (count == 1)
                            {
                                $scope.tips = '*活动名称重复'
                            }
                        if (count == 0)
                            {
                                //存活动名称，更新数据以及跳转
                                names.push(name);
                                localStorage['names'] = JSON.stringify(names);
                                $location.path('/activity_sign_up');
                            }
                    }
             }



    });

