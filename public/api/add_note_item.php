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

if(empty($input['note'])){
    throw new Exception('You must send a note with your request');
}

$output['success'] = false;

$tracker_id = $input['tracker_id'];
$note_item = $input['note'];

$note_item_query = "INSERT INTO `note_item` SET 
    `tracker_id`=?,
    `input`=?,
    `created`=NOW()
";

$note_item_statement = mysqli_prepare($conn, $note_item_query);
mysqli_stmt_bind_param($note_item_statement, 'is', $tracker_id, $note_item);
$note_item_result = mysqli_stmt_execute($note_item_statement);
$note_item_result = mysqli_stmt_get_result($note_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('note was not added');
}

$output['success'] = true;
print(json_encode($output));
?>