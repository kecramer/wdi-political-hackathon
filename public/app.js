$(document).ready(() => {
   let el = {
      form: $('#remindMeForm'),
      form_elem: {
         check_reg: $('input[name=\'registration\']'),
         check_mail: $('input[name=\'mailvote\']'),
         check_vote: $('input[name=\'vote\']'),
         text_fname: $('input[name=\'fname\']'),
         text_lname: $('input[name=\'lname\']'),
         text_email: $('input[name=\'emailaddress\']'),
      }
   };

   el.form.on('submit', (e) => {
      e.preventDefault();

      let registrationReminders = el.form_elem.check_reg.is(':checked');
      let voteByMailReminders = el.form_elem.check_mail.is(':checked');
      let voteReminders = el.form_elem.check_vote.is(':checked');

      if(!registrationReminders && !voteByMailReminders && !voteReminders) {
         //User didn't select any reminders!
      }

      let fname = el.form_elem.text_fname.val() || '';
      let lname = el.form_elem.text_lname.val() || '';
      let email = el.form_elem.text_email.val() || '';

      if(!email || email.indexOf('@') == -1) {
         //User didn't specify an email address!
      }

      if(email && (registrationReminders || voteByMailReminders || voteReminders)) {
         $.ajax({
            method: 'POST',
            url: `http://localhost:3000/reminder?email=${email}&registration=${registrationReminders}&mailvote=${voteByMailReminders}&vote=${voteReminders}&fname=${fname}&lname=${lname}`,
            success: () => {
               console.log('Sucesfully sent request to server');
               el.form_elem.text_fname.val('');
               el.form_elem.text_lname.val('');
               el.form_elem.text_email.val('');
            },
            error: () => {
               console.log('had problems sending request to server');
            }
         })
      }
   })
});
