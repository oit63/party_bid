'use strict'


function BidEvent (serial_number,  activity_name,  state,  is_choosed) {


	this.serial_number = serial_number;
	this.state = state || 'running';
	this.is_choosed = is_choosed || true;
	this.activity_name = activity_name;
}




BidEvent.get_bidEvents = function(){


	return JSON.parse(localStorage.getItem('bidEvents'));
};


BidEvent.save_bidEvents = function(bidEvents){

	localStorage.setItem('bidEvents', JSON.stringify(bidEvents));
};




BidEvent.prototype.save = function(){


	var bidEvents = BidEvent.get_bidEvents();
	bidEvents.unshift(this);
	BidEvent.save_bidEvents(bidEvents);

};




BidEvent.get_serial_number = function(){




};




/**
 * Created by TanghaoTsui on 14-8-8.
 */



