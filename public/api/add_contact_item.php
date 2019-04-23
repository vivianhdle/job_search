<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['tracker_id'])){
    throw new Exception('You must send a tracker id with your request');
}

if(empty($input['contact'])){
    throw new Exception('You must send a contact with your request');
}

$output['success'] = false;

$tracker_id = $input['tracker_id'];
$contact_info = $input['contact'];

$contact_info_query = "INSERT INTO `contact_info` SET 
    `tracker_id`=?,
    `name`=?,
    `email`=?,
    `phone`=?
";

$name = $contact_info['name'];
$email = $contact_info['email'];
$phone = $contact_info['phone'];

$contact_info_statement = mysqli_prepare($conn, $contact_info_query);
mysqli_stmt_bind_param($contact_info_statement, 'issi', $tracker_id, $name, $email, $phone);
$contact_info_result = mysqli_stmt_execute($contact_info_statement);
$contact_info_result = mysqli_stmt_get_result($contact_info_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('contact was not added');
}

$output['success'] = true;
print(json_encode($output));
?>