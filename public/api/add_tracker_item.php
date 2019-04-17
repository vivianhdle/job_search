<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

// if(!empty($_GET['tracker_id'])){
//     throw new Exception('You must send a tracker_id with your request');
// }

// if(!empty($_GET['user_id'])){
//     throw new Exception('You must send a user_id with your request');
// }

// if(!empty($_GET['title'])){
//     throw new Exception('You must send a title with your request');
// }

// if(!empty($_GET['company'])){
//     throw new Exception('You must send a company with your request');
// }

// if(!empty($_GET['progress'])){
//     throw new Exception('You must send a progress with your request');
// }

// $user_id = (int)$_GET['user_id'];
// $title = $_GET['title'];
// $company = $_GET['company'];
// $progress = $_GET['progress'];
// $contact_info = $_GET['contact_info'] = '';//need to set as ''?
// $note_item = $_GET['note_item'] = '';//need to set as ''?
// $link = $_GET['link'] = '';//need to set as ''?

$output['success'] = false;

$user_id = 1;
$tracker_id = 1;
$title = 'Data Monkey';
$company = 'Google';
$progress = 'Waiting for Response';
$contact_info = [
    "name" => "Mr.Googles",
    "email" => "mrgoogles@google.com",
    "phone" => 1234567890
];
$note_item = 'Snuck my business card into Mr.Googles back pocket. Hope he calls back';
$link = 'www.google.com';

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
    mysqli_stmt_bind_param($contact_statement, 'dssd', $tracker_id, $contact_info['name'], $contact_info['email'], $contact_info['phone']);
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
    mysqli_stmt_bind_param($note_statement, 'ds', $tracker_id, $note_item);
    $note_result = mysqli_stmt_execute($note_statement);
    $note_result = mysqli_stmt_get_result($note_statement);
    
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('tracker note was not added');
    }    
}

$output['success'] = true;
print(json_encode($output));
?>