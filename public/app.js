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
         el.form_elem.text_email.css('border', '1px solid red');
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
               el.form_elem.text_email.css('border', '');
            },
            error: () => {
               console.log('had problems sending request to server');
            }
         })
      }
   })

   $('#seeMore1').click(function() {
     $('#extraContent1').toggleClass('hidden')
     $('#more1').toggleClass('hidden')
     $('#less1').toggleClass('hidden')
   })

   $('#seeMore2').click(function() {
     $('#extraContent2').toggleClass('hidden')
     $('#more2').toggleClass('hidden')
     $('#less2').toggleClass('hidden')
   })

   $('#seeMore3').click(function() {
     $('#extraContent3').toggleClass('hidden')
     $('#more3').toggleClass('hidden')
     $('#less3').toggleClass('hidden')
   })

   $('#seeMore4').click(function() {
     $('#extraContent4').toggleClass('hidden')
     $('#more4').toggleClass('hidden')
     $('#less4').toggleClass('hidden')
   })
});
