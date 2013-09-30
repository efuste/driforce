<?php


$mailto   = "erik.fuste@pxl83.com"; 
$subject  = "Website Quick Contact"; 
$name     = ucwords($_POST['name']); 
$phone     = ucwords($_POST['phone']); 
$email    =	 $_POST['email'];
$description     = ucwords($_POST['description']); 

	if(strlen($name) < 1 ){
		echo  'email_error';
	}
  	else if(strlen($phone) < 9 ){
		echo  'phone_error';
	}

  	else if(strlen($description) < 1 ){
		echo  'email_error';
	}
	
  	else if(strlen($email) < 1 ) {
		echo 'email_error';
	}

  	else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", $email)) {
    	echo 'email_error';
  	}
 else {

	//send enquiry

	$email_message="\n\n" .
		"Name: " .
		ucwords($name) . 
		"\n" .
		"Phone: " . ucwords($phone) .
		"\n" .
		"Email: " .
		$email .
		"\n\n" ;

		$email_message = trim(stripslashes($email_message));
		mail($mailto, $subject, $email_message, "From: \"$vname\" <".$email.">\nReply-To: \"". ucwords($name). "\" <".$email.">\nX-Mailer: PHP/" . phpversion() );

}
?>