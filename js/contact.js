$(document).ready(function() {
    $("#submit").click(function(event) {
        alert( "As you can see, the link no longer took you to jquery.com" );
        event.preventDefault();
        var dataString = 'firstName='+ firstName + '&lastName='+ lastName +'&email=' + email + '&message=' + message;
         // alert (dataString);return false;
		 alert("before ajax");
          $.ajax({
            type: "POST",
            url: "php/sendEmail.php",
            data: dataString,
			success: function() {
					 alert(dataString);
					 }
					 return false;
           /* success: function() {
              $('#contact_form').html("<div id='message'></div>");
              $('#message').html("<h2>Contact Form Submitted!</h2>")
              .append("<p>We will be in touch soon.</p>")
              .hide()
              .fadeIn(1500, function() {
                $('#message').append("<img id='checkmark' src='images/check.png' />");
              });
            }*/
          });
		  alert("after success");
          return false;
    });
});