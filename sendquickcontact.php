<?php


$mailto   = "driforce1@gmail.com"; 
$subject  = "Website Quick Contact"; 
$name     = ucwords($_POST['name']); 
$phone     = $_POST['phone']; 
$description     = ucwords($_POST['description']); 

	if(strlen($name) < 1 ){
		echo  'email_error';
	}
  	else if(!is_valid_phonenumber($phone)) {
		echo  'phone_error';
	}

  	else if(strlen($description) < 1 ){
		echo  'email_error';
	}
 	else {

	//send enquiry

	$email_message="\n\n" .
		"Name: " .
		ucwords($name) . 
		"\n" .
		"Phone: " . ucwords($phone) .
		"\n" .
		"Case Description: " . $description;

		$email_message = trim(stripslashes($email_message));
		mail($mailto, $subject, $email_message, "From: \"$vname\" <".$email.">\nReply-To: \"". ucwords($name). "\" <".$email.">\nX-Mailer: PHP/" . phpversion() );
	}
	
	
	function is_valid_phonenumber( $phone ) {

  // strip all valid chars
  $stripped = preg_replace( '{[0-9 +-]}', '', $phone );

  // check if there are remains, if yes: fail
  if( !empty( $stripped ) )
    return false;

  // get digit count by replacing everything except digits with nothing
  $digits = strlen( preg_replace( '{[^0-9]}', '', $phone ) );

  // invalid if less than 6 or more than 12 in length
  if( $digits < 6 || $digits > 12 )
    return false;

  // if nothing fails before this, we're good to go
  return true;

}
?>