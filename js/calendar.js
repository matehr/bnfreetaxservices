$(document).ready(function() {
	$("#calendar").fullCalendar({
			events: {
					url:'https://www.google.com/calendar/feeds/bnfreetaxservices%40gmail.com/public/basic',
					currentTimezone: 'America/Chicago'
			}
	});
});