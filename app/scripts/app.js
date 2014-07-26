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
        templateUrl: '../views/create.html'
//        controller: 'create_activity_controller'
        })
      .when('/sign_up', {
        templateUrl: '../views/sign_up.html',
        controller: 'sign_up_controller'
        })
        .when('/activity_list', {
         templateUrl: '../views/list.html',
         controller: 'activity_list_controller'
        })
        .otherwise({
            redirectTo: '/'
        });


//      })
//      .when('/activity_list', {
//          templateUrl: 'views/list.html',
//          controller: 'ActivityListCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
  });


//CreateActivityCtrl
//views/create.html