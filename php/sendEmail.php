<?php
 //recaptcha code
 require_once "recaptchalib.php";
 $secret = "6Lf-iRcTAAAAALtNoEMv5-N9CON97L9BRK8ZXc5x";
 $response = null;
 $reCaptcha = new ReCaptcha($secret);
 // if submitted check response
 if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
 }
 
 //send email
 if ($response != null && $response->success) {
 	$email = $_POST['email'] ;
 	$subject = "Question from " . $_POST['firstName'] . " " . $_POST['lastName'];
 	$message = $_POST['message'] ;
	 mail("bnfreetaxservices@gmail.com", $subject, "From: " . $email . " Message: " . $message);
 	 header("Location: http://www.bnfreetaxservices.org/success.html");
 }
?>