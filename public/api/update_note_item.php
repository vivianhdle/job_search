<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['note'])){
    throw new Exception('You must send a note item with your request');
}

$output['success'] = false;

$id= $input['id'];
$note= $input['note'];


$note_item_query = "UPDATE `note_item` SET
    `input`=?
    WHERE `id`=?
";
//need to catch dupe entry error

$note_item_statement = mysqli_prepare($conn, $note_item_query);
mysqli_stmt_bind_param($note_item_statement, 'si', $note, $id);
$note_item_result = mysqli_stmt_execute($note_item_statement);
$note_item_result = mysqli_stmt_get_result($note_item_statement);  

if(mysqli_affected_rows($conn) === 0){
    throw new Exception(`tracker note $id was not updated`);
}

$output['success'] = true;
print(json_encode($output));
?>