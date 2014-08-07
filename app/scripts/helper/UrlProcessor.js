'use strict';


/**
 * Created by TanghaoTsui on 14-8-4.
 */




partyBidApp
.config(function ($routeProvider) {
    $routeProvider


	    .when('/', {


		    templateUrl: 'views/activity_list.html',
		    controller: 'activity_list_controller'

	    })





	    .when('/create_activity', {


            templateUrl: 'views/create_activity.html',
            controller: 'create_activity_controller'

        })




        .when('/activity_signup/:activity_name', {


            templateUrl: 'views/activity_signup.html',
            controller: 'activity_signup_controller'

        })




        .when('/bid_list/:activity_name', {


            templateUrl: 'views/bid_list.html',
            controller: 'bid_list_controller'

        })




	    .when('/bid_signup/:activity_name', {


		    templateUrl: 'views/bid_signup.html',
		    controller: 'bid_signup_controller'

	    })




	    .otherwise({


            redirectTo: '/'

        });
});