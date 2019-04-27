<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('sign_in_check.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['id'])){
    throw new Exception('You must send a note id with your request');
}

$output['success'] = false;

$note_id = (int)$input['id'];

$note_item_query = "DELETE FROM `note_item` WHERE 
    `id`=$note_id
";

$result = mysqli_query($conn, $note_item_query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('note was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>