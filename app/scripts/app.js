'use strict';

/**
 * @ngdoc overview
 * @name partyBidApp
 * @description
 * # partyBidApp
 *
 * Main module of the application.
 */
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/create_activity', {
        templateUrl: '../views/create_activity.html',
        controller: 'CreateCtrl'
        })
      .when('/activity_sign_up', {
        templateUrl: 'views/activity_sign_up.html',
        controller: 'SignUpCtrl'
        })
        .when('/activity_list', {
            templateUrl: 'views/activity_list.html',
            controller: 'ListCtrl'
        })
        .when('/choose_food', {
            templateUrl: 'views/choose_food.html',
            controller: 'ChooseFoodCtrl'
        })
        .when('/show_orders', {
            templateUrl: 'views/show_orders.html',
            controller: 'ShowOrdersCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
//      .when('/create_activity', {
//        templateUrl: 'views/create_activity.html',
//        controller: 'CreateActivityCtrl'
//      })

//      })
//      .when('/activity_list', {
//          templateUrl: 'views/activity_list.html',
//          controller: 'ActivityListCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
  });


//CreateActivityCtrl
//views/create_activity.html