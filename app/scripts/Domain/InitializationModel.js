'use strict';


/**
 * Created by TanghaoTsui on 14-8-4.
 */




function Initialization() {

}




Initialization.create_page = function () {


	if (!localStorage['activities']) {


		Activity.set_activities([]);

	}

},




Initialization.list = function () {


	if (!localStorage['activities']) {


		$location.path('/create_activity');

	}

},




Initialization.signUpMessages = function () {


	if (!localStorage['signUpMessages']) {


		localStorage['signUpMessages'] = "[]";

	}

}