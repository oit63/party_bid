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




Initialization.bidEvents = function () {


	if (!localStorage['bidEvents']) {


		BidEvent.save_bidEvents([]);

	}

}




/**
 * Created by TanghaoTsui on 14-8-4.
 */



