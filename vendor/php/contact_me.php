<?php
if($_POST)
{
	$to_Email   	= "biuro@fitevent.pl"; //Replace with recipient email address
	$subject        = 'Fiteventy - Wiadomość od klienta'; //Subject line for emails
	
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Wymagane żądanie ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) || !isset($_POST["userMessage"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Wypełnij wszystkie pola!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	
	$user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
	
	//additional php validation
	if(strlen($user_Name)<3) // If length is less than 3 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Imię i nazwisko jest za krótkie!'));
		die($output);
	}
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Niepoprawny email!'));
		die($output);
	}
	
	if(strlen($user_Message)<5) //check emtpy message
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Wiadomość jest za krótka! Napisz nam coś jeszcze'));
		die($output);
	}
	
	
	$message_Body = "<strong>Imię i nazwisko: </strong>". $user_Name ."<br>";
	$message_Body .= "<strong>Email klienta: </strong>". $user_Email ."<br>";
	$message_Body .= "<strong>Wiadomość od klienta: </strong>". $user_Message ."<br>";
	
	
	
	$headers = "From: biuro@fitevent.pl\r\n";
    $headers .= "Reply-To: ". strip_tags($user_Email) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	
	
	
	//proceed with PHP email.
	/*$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	*/
	
	$sentMail = mail($to_Email, $subject, $message_Body, $headers);
	
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Coś poszło nie tak! Za chwilę spróbuj raz jeszcze'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hej '.$user_Name .'! Dzięki za Wiadomość. Niebawem odezwiemy się do Ciebie'));
		die($output);
	}
}
?>