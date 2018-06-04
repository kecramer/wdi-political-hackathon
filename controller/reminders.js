const db = require('../model');

const create = (req, res) => {
   console.log('Running create function');
	db.Email.find({email: req.query.email}, (err, email) => {
      if(err) {console.log(err); res.sendStatus(500);}

      console.log(`Found ${JSON.stringify(email)}`);

      if(email.length === 0) {
         db.Email.create({email: req.query.email, reminder_1day: true, reminder_7day: true, reminder_30day: true}, (err, email) => {
            if(err) {console.log(err); res.sendStatus(500);}

            console.log('succesufully added email: ' + email.email);
            res.sendStatus(204);
         })
      }
   })
};

module.exports = {
   create,
}
