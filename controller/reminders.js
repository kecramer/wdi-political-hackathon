const crypto = require('crypto');
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_TOKEN);
const mailchimp_lists = {
	register: '0628fad118',
	mail: 'b302ecacfe',
	vote: '1d2c782785',
}

const create = (req, res) => {
	let success = false;

	if(!req.query.email) {
		res.sendStatus(400);
	}
	let email = req.query.email;

	if(req.query.registration == 'true') {
		console.log('Adding user to registration reminders');
		mailchimp.put({
			path: `/lists/${mailchimp_lists.register}/members/${crypto.createHash('md5').update(email).digest("hex")}`,
			body: {
				email_address: email,
				status_if_new: 'subscribed',
				fname: 'John',
				lname: 'Doe'
			}
		}, (err, result) => {
			if(err) {console.log(err);}
			success = true;
			console.log(JSON.stringify(result));
		});
	}

	if(req.query.mailvote == 'true') {
		console.log('Adding user to mail-to-vote reminders');
		mailchimp.put({
			path: `/lists/${mailchimp_lists.mail}/members/${crypto.createHash('md5').update(email).digest("hex")}`,
			body: {
				email_address: email,
				status_if_new: 'subscribed',
				fname: 'John',
				lname: 'Doe'
			}
		}, (err, result) => {
			if(err) {console.log(err);}
			success = true;
			console.log(JSON.stringify(result));
		});
	}

	if(req.query.vote == 'true') {
		console.log('Adding user to vote reminders');
		mailchimp.put({
			path: `/lists/${mailchimp_lists.vote}/members/${crypto.createHash('md5').update(email).digest("hex")}`,
			body: {
				email_address: email,
				status_if_new: 'subscribed',
				fname: 'John',
				lname: 'Doe'
			}
		}, (err, result) => {
			if(err) {console.log(err);}
			success = true;
			console.log(JSON.stringify(result));
		});
	}

	setTimeout(()=> {
		if(success) {
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	}, 1000);
};

module.exports = {
	create,
}
