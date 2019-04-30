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

if(empty($input['title'])){
    throw new Exception('You must send a title with your request');
}

if(empty($input['company'])){
    throw new Exception('You must send a company with your request');
}

if(empty($input['progress'])){
    throw new Exception('You must send a progress with your request');
}

$output['success'] = false;

$user_id = (int)$_SESSION['user']['user_id'];
$title = $input['title'];
$company = $input['company'];
$progress = $input['progress'];
if(!isset($input['contact'])){
    $input['contact'] = '';
}
$contact_info = $input['contact'];
if(!isset($input['note'])){
    $input['note'] = '';
}
$note_item = $input['note'];
if(!isset($input['link'])){
    $input['link'] = '';
}
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
mysqli_stmt_bind_param($tracker_item_statement, 'issss', $user_id, $title, $company, $progress, $link);
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

    foreach($contact_info as $value){
        $name = $value['name'];
        $email = $value['email'];
        $phone = $value['phone'];

        $contact_item_statement = mysqli_prepare($conn, $contact_query);
        mysqli_stmt_bind_param($contact_item_statement, 'issi', $returned_tracker_id, $name, $email, $phone);
        $contact_item_result = mysqli_stmt_execute($contact_item_statement);
        $contact_item_result = mysqli_stmt_get_result($contact_item_statement);  
        
        if(mysqli_affected_rows($conn) === 0){
            throw new Exception(`tracker contact was not added`);
        }
    }
}

if($note_item){
    $note_query = "INSERT INTO `note_item` SET
        `tracker_id`=?,
        `input`=?,
        `created`=NOW()
    ";
    
    $note_statement = mysqli_prepare($conn, $note_query);
    mysqli_stmt_bind_param($note_statement, 'is', $returned_tracker_id, $note_item);
    $note_result = mysqli_stmt_execute($note_statement);
    $note_result = mysqli_stmt_get_result($note_statement);
    
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('tracker note was not added');
    }    
}

$output['success'] = true;
print(json_encode($output));
?>