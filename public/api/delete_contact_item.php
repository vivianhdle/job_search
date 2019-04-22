<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

// if(!empty($_GET['user_id'])){
//     throw new Exception('You must send a user_id with your request');
// }

if(empty($input['tracker_id'])){
    throw new Exception('You must send a tracker id with your request');
}

if(empty($input['contact_id'])){
    throw new Exception('You must send a contact id with your request');
}

$output['success'] = false;

$user_id = 1;
$tracker_id = $input['tracker_id'];
$contact_id = $input['contact_id'];

$contact_item_query = "DELETE FROM `contact_info` WHERE 
    `tracker_id`=? AND `id`=?
";

$contact_item_statement = mysqli_prepare($conn, $contact_item_query);
mysqli_stmt_bind_param($contact_item_statement, 'is', $tracker_id, $contact_id);
$contact_item_result = mysqli_stmt_execute($contact_item_statement);
$contact_item_result = mysqli_stmt_get_result($contact_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('contact was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>