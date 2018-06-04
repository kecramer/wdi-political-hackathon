$(document).ready(() => {
   $('#remindMeForm').on('submit', (e) => {
      e.preventDefault();

      let registrationReminders = $('input[name=\'registration\']').is(':checked');
      let voteByMailReminders = $('input[name=\'mailvote\']').is(':checked');
      let voteReminders = $('input[name=\'vote\']').is(':checked');

      if(!registrationReminders && !voteByMailReminders && !voteReminders) {
         //User didn't select any reminders!
      }

      let fname = $('input[name=\'fname\']').val() || '';
      let lname = $('input[name=\'lname\']').val() || '';
      let email = $('input[name=\'emailaddress\']').val() || '';

      if(!email) {
         //User didn't specify an email address!
      }

      if(email && (registrationReminders || voteByMailReminders || voteReminders)) {
         $.ajax({
            method: 'POST',
            url: `http://localhost:3000/reminder?email=${email}&registration=${registrationReminders}&mailvote=${voteByMailReminders}&vote=${voteReminders}&fname=${fname}&lname=${lname}`,
            success: () => {
               console.log('Sucesfully sent request to server');
            },
            error: () => {
               console.log('had problems sending request to server');
            }
         })
      }
   })
});
