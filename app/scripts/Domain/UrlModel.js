/**
 * Created by TanghaoTsui on 14-8-4.
 */
partyBidApp
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/create_activity', {
            templateUrl: 'views/create_activity.html',
            controller: 'create_activity_controller'
        })
        .when('/activity_sign_up', {
            templateUrl: 'views/activity_sign_up.html',
            controller: 'activity_sign_up_controller'
        })
        .when('/activity_list', {
            templateUrl: 'views/activity_list.html',
            controller: 'activity_list_controller'
        })
        .otherwise({
            redirectTo: '/'
        });
});