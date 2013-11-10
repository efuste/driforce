<?php


$mailto   = "driforce1@gmail.com"; 
$subject  = "Website Main Contact"; 

$fname     = ucwords($_POST['fname']); 
$lname     = ucwords($_POST['lname']); 
$phone     = $_POST['phone']; 
$email =     $_POST['email'];

$address = $_POST['address']; 
$city = $_POST['city']; 
$state = ucwords($_POST['state']); 
$zip = $_POST['zip']; 

$description     = $_POST['description'];

$policyNum = $_POST['policyNum']; 
$companyName = $_POST['companyName']; 
		
    
    if(!is_valid_phonenumber($phone)) {
		echo  'phone_error';
	}
	else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", $email)) {
    	echo 'email_error';
	}
	
 	else {
	
	//send enquiry

	$email_message="\n\n" .
		"Name: " .
		$fname . " " . $lname .
		"\n" .
		"Phone: " . $phone .
		"\n" .
		"Email: " . $email .
		"\n" .
		"Address: " . $address .
		"\n" . 
		 $city . ",  " . $state . "  " .  $zip .
		"\n" .
		"Case Description: " . $description .
		"\n" .
		"Policy Number: " . $policyNum . 
		"\n" .
		"Insurance Company: " . $companyName;

		$email_message = trim(stripslashes($email_message));
		mail($mailto, $subject, $email_message, "From: \"$vname\" <".$email.">\nReply-To: \"". ucwords($fname). "\" <".$email.">\nX-Mailer: PHP/" . phpversion() );
	}
	
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
