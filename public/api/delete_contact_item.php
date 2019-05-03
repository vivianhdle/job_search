<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');
ob_start();
require_once('sign_in_check.php');
ob_end_clean();

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['id'])){
    throw new Exception('You must send a contact id with your request');
}

$output['success'] = false;

$contact_id = (int)$input['id'];

$contact_item_query = "DELETE FROM `contact_info` WHERE 
    `id`=$contact_id
";

$result = mysqli_query($conn, $contact_item_query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('contact was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>