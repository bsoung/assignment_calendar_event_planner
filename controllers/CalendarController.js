let models = require("./../models");
let Calendar = models.Calendar;
let User = models.User;

module.exports = {
	showCalendars: (req, res) => {
		let options = {
			order: ["id"],
			include: [
				{
					model: User,
					attributes: ["id", "username", "email"],
					where: { id: Calendar.userId }
				}
			]
		};

		Calendar.findAll(options)
			.then(calendars => {
				console.log(calendars, "????????");
				const finalObject = calendars.map(calendar => {
					// console.log(calendar, "???");
					// return {
					// 	name: calendar.name,
					// 	username: calendar.users.username,
					// 	email: calendar.users.email
					// };
				});

				// console.log(finalObject);
				res.end("Hi.");
			})
			.catch(e => res.status(500).send(e.stack));
	}
};
