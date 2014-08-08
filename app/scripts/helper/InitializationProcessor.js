'use strict';


function Initialization() {

}




Initialization.create_page = function () {


	if (!localStorage['activities']) {


		Activity.save_activities([]);

	}

},




Initialization.signUpMessages = function () {


	if (!localStorage['signUpMessages']) {


		SignUpMessage.save_messages([]);

	}

}




/**
 * Created by TanghaoTsui on 14-8-4.
 */



