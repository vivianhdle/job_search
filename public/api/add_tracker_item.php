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

if(!empty($input['title'])){
    throw new Exception('You must send a title with your request');
}

if(!empty($input['company'])){
    throw new Exception('You must send a company with your request');
}

if(!empty($input['progress'])){
    throw new Exception('You must send a progress with your request');
}

$output['success'] = false;

$user_id = 1;
$title = $input['title'];
$company = $input['company'];
$progress = $input['progress'];
$contact_info = [
    "name" => $input['contact']['name'],
    "email" => $input['contact']['email'],
    "phone" => $input['contact']['phone']
];
$note_item = $input['note'];
$link = $input['link'];

$tracker_item_query = "INSERT INTO `tracker_item` SET 
    `user_id`=?,
    `title`=?,
    `company`=?,
    `progress`=?,
    `link`=?,
    `created`=NOW()
";

$tracker_item_statement = mysqli_prepare($conn, $tracker_item_query);
mysqli_stmt_bind_param($tracker_item_statement, 'dssss', $user_id, $title, $company, $progress, $link);
$tracker_item_result = mysqli_stmt_execute($tracker_item_statement);
$tracker_item_result = mysqli_stmt_get_result($tracker_item_statement);
$returned_tracker_id = $tracker_item_statement->insert_id;

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('tracker item was not added');
}

if($contact_info){
    $contact_query = "INSERT INTO `contact_info` SET
        `tracker_id`=?,
        `name`=?,
        `email`=?,
        `phone`=?    
    ";

    $contact_statement = mysqli_prepare($conn, $contact_query);
    mysqli_stmt_bind_param($contact_statement, 'dssd', $returned_tracker_id, $contact_info['name'], $contact_info['email'], $contact_info['phone']);
    $contact_result = mysqli_stmt_execute($contact_statement);
    $contact_result = mysqli_stmt_get_result($contact_statement);
    
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('tracker contact was not added');
    }    
}

if($note_item){
    $note_query = "INSERT INTO `note_item` SET
        `tracker_id`=?,
        `input`=?,
        `created`=NOW()
    ";

    $note_statement = mysqli_prepare($conn, $note_query);
    mysqli_stmt_bind_param($note_statement, 'ds', $returned_tracker_id, $note_item);
    $note_result = mysqli_stmt_execute($note_statement);
    $note_result = mysqli_stmt_get_result($note_statement);
    
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('tracker note was not added');
    }    
}

$output['success'] = true;
print(json_encode($output));
?>