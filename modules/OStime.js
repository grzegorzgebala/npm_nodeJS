var colors = require('colors');

function getOStime(uptime) {
	var hour = Math.floor(uptime / 3600);
	var min = Math.floor((uptime - (hour * 3600)) / 60);
	var sec = uptime - (hour * 3600) - (min * 60);
    
	if (sec < 0) {
		sec = '0';
	}

	console.log('Uptime: ~' .green, hour, 'godz.',min, 'min.', sec, 'sec');
}

exports.print = getOStime;