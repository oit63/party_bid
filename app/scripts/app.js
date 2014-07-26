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
      .when('/activityCreate', {
        templateUrl: '../views/activityCreate.html',
        controller: 'activityCreateController'
        })
      .when('/activitySignUp', {
        templateUrl: '../views/activitySignUp.html',
        controller: 'activitySignUpController'
        })
        .when('/', {
         templateUrl: '../views/activityList.html',
         controller: 'activityListController'
        })
        .otherwise({
            redirectTo: '/'
        });


//      })
//      .when('/activity_list', {
//          templateUrl: 'views/activityList.html',
//          controller: 'ActivityListCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
  });


//CreateActivityCtrl
//views/activityCreate.html