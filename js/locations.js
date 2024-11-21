$(document).ready(function() {
  $( "#BPL_label" ).click(function() {
	$("#BPL").removeClass("hidden");
	$("#HCC").addClass("hidden");
	$("#MCCA").addClass("hidden");
	$("#NAC").addClass("hidden");
	$("#google_map").html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.9398158330455!2d-88.99400862514992!3d40.4765964519954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b71dae09b274d%3A0x2da6e70f47fe7cf9!2sBloomington%20Public%20Library!5e0!3m2!1sen!2sus!4v1732155855838!5m2!1sen!2sus' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>");
  });
  
  $( "#HCC_label" ).click(function() {
	$("#BPL").addClass("hidden");
	$("#HCC").removeClass("hidden");
	$("#MCCA").addClass("hidden");
	$("#NAC").addClass("hidden");
	$("#google_map").html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3263254035273!2d-89.01903032472063!3d40.53437908532496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b7159363f3377%3A0xbb118746771f703f!2sInstructional%20Commons%20North%2C%20Vermillion%20Way%2C%20Normal%2C%20IL%2061761!5e0!3m2!1sen!2sus!4v1732156069819!5m2!1sen!2sus' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>");
  });
  
  $( "#MCCA_label" ).click(function() {
	$("#BPL").addClass("hidden");
	$("#HCC").addClass("hidden");
	$("#MCCA").removeClass("hidden");
	$("#NAC").addClass("hidden");
	$("#google_map").html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.809024934848!2d-89.01527134924764!3d40.479489779256575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b71f0cb156733%3A0x64c22c36cea2405!2s1301+W+Washington+St%2C+Bloomington%2C+IL+61701!5e0!3m2!1sen!2sus!4v1484101544173' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>");
  });
  
  $( "#NAC_label" ).click(function() {
	$("#BPL").addClass("hidden");
	$("#HCC").addClass("hidden");
	$("#MCCA").addClass("hidden");
	$("#NAC").removeClass("hidden");
	$("#google_map").html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.241438012349!2d-88.97992994924651!3d40.51415427925259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b70fdc3ad5a01%3A0x96a75800c6beb058!2s600+E+Willow+St%2C+Normal%2C+IL+61761!5e0!3m2!1sen!2sus!4v1484100855025' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>");
  });
});
