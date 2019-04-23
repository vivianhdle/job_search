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

if(empty($input['note_id'])){
    throw new Exception('You must send a note id with your request');
}

$output['success'] = false;

$tracker_id = $input['tracker_id'];
$note_id = $input['note_id'];

$note_item_query = "DELETE FROM `note_item` WHERE 
    `tracker_id`=? AND `id`=?
";

$note_item_statement = mysqli_prepare($conn, $note_item_query);
mysqli_stmt_bind_param($note_item_statement, 'is', $tracker_id, $note_id);
$note_item_result = mysqli_stmt_execute($note_item_statement);
$note_item_result = mysqli_stmt_get_result($note_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('note was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>