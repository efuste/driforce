<?php


$mailto   = "erik.fuste@pxl83.com"; 
$subject  = "Website Main Contact"; 

$fname     = ucwords($_POST['fname']); 
$lname     = ucwords($_POST['lname']); 
$phone     = $_POST['phone']; 
$email = ucwords($_POST['email']);

$address = ucwords($_POST['address']); 
$city = ucwords($_POST['city']); 
$state = ucwords($_POST['state']); 
$zip = ucwords($_POST['zip']); 

$description     = ucwords($_POST['description']);

$agentName = ucwords($_POST['agentName']); 
$companyName = ucwords($_POST['companyName']); 
$agentPhone = $_POST['agentPhone']; 
		
  	
    
    if(!is_valid_phonenumber($phone)) {
		echo  'phone_error';
	}
 	else {
	
	//send enquiry

	$email_message="\n\n" .
		"Name: " .
		ucwords($fname) . " " . ucwords($lname) .
		"\n" .
		"Phone: " . ucwords($phone) .
		"\n" .
		"Email: " . ucwords($email) .
		"\n" .
		"Address: " . ucwords($address) .
		"\n" . ucwords($city) . " " . ucwords($state) . ucwords($zip) .
		"Case Description: " . $description .
		"\n" .
		"Agent Name: " . ucwords($agentName) . 
		"\n" .
		"Insurance Company: " . ucfirst($companyName) .
		"\n" . 
		"Agent Phone: " . $agentPhone;

		$email_message = trim(stripslashes($email_message));
		mail($mailto, $subject, $email_message, "From: \"$vname\" <".$email.">\nReply-To: \"". ucwords($name). "\" <".$email.">\nX-Mailer: PHP/" . phpversion() );
	}
	
?>

<?php
function is_valid_phonenumber($number) {

  	// strip all valid chars
  		$stripped = preg_replace( '{[0-9 +-]}', '', $number );

  	// check if there are remains, if yes: fail
  		if( !empty( $stripped ) )
    		return false;

  		// get digit count by replacing everything except digits with nothing
  			$digits = strlen( preg_replace( '{[^0-9]}', '', $number ) );

  	// invalid if less than 6 or more than 12 in length
  	if( $digits < 6 || $digits > 12 )
    return false;

  	// if nothing fails before this, we're good to go
  	return true;
	}
?>