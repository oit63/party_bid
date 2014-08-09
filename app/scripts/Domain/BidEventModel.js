'use strict'


function BidEvent (serial_number,  activity_name,  state,  is_choosed) {


	this.serial_number = serial_number;
	this.state = state || 'running';
	this.is_choosed = is_choosed || true;
	this.activity_name = activity_name;
}


BidEvent.prototype.change_attribute = function (attribute, value) {


	var self = this;
	var bidEvents = BidEvent.get_bidEvents();
	_(bidEvents).find(function (bidEvent) {


		return bidEvent.serial_number === self.serial_number;

	})[attribute] = value;
	BidEvent.save_bidEvents(bidEvents);

};




BidEvent.find_by_serial_number = function (serial_number) {


	var found_bidEvent = _(BidEvent.get_bidEvents()).find(function (bidEvent) {


		return bidEvent.serial_number === JSON.parse(serial_number);

	});

	return new BidEvent(found_bidEvent.serial_number, found_bidEvent.activity_name, found_bidEvent.state);

};




BidEvent.prototype.save = function(){


	var bidEvents = BidEvent.get_bidEvents();
	bidEvents.unshift(this);
	BidEvent.save_bidEvents(bidEvents);

};




BidEvent.is_has_running = function () {


	return BidEvent.find_running_bidEvent();

};




BidEvent.find_running_bidEvent = function () {

	console.log("m")
	return  _(BidEvent.get_bidEvents()).find(function (bidEvent) {


		return bidEvent.state === 'running';

	});

};




BidEvent.get_serial_number = function() {


	var bidEvents = BidEvent.get_bidEvents();
	return bidEvents.length;

}




BidEvent.set_serial_number = function() {


	var bidEvents = BidEvent.get_bidEvents();
	return bidEvents.length+1;

}




BidEvent.get_bidEvents = function(){


	return JSON.parse(localStorage.getItem('bidEvents'));
};



BidEvent.save_bidEvents = function(bidEvents){

	localStorage.setItem('bidEvents', JSON.stringify(bidEvents));
};







/**
 * Created by TanghaoTsui on 14-8-8.
 */



