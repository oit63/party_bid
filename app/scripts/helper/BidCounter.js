function BidCounter() {

}




BidCounter.get_current_serial_number = function() {


	var bidEvents = BidEvent.get_bidEvents();
	return bidEvents.length + 1;

}






/**
 * Created by TanghaoTsui on 14-8-9.
 */