'use strict'


/**
 * Created by TanghaoTsui on 14-8-8.
 */




function Bid (serial_number,  state,  is_choosed,  activity_name) {


	this.serial_number = serial_number;
	this.state = state || 'running';
	this.is_choosed = is_choosed || true;

}

