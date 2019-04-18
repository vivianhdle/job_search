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
    throw new Exception('You must send a tracker_id with your request');
}

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

$user_id = 1;
$tracker_id = $input['tracker_id'];
$title = $input['title'];
$company = $input['company'];
$progress = $input['progress'];
$contact_info = $input['contact'];
$link = $input['link'];

$tracker_item_query = "UPDATE `tracker_item` SET 
    `title`=?,
    `company`=?,
    `progress`=?,
    `link`=?
    WHERE `id`=$tracker_id
";

$tracker_item_statement = mysqli_prepare($conn, $tracker_item_query);
mysqli_stmt_bind_param($tracker_item_statement, 'ssss', $title, $company, $progress, $link);
$tracker_item_result = mysqli_stmt_execute($tracker_item_statement);
$tracker_item_result = mysqli_stmt_get_result($tracker_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('tracker item was not updated');
}

$contact_item_query = "UPDATE `contact_info` SET
    `name`=?,
    `email`=?,
    `phone`=?
    WHERE `id`=?
";

foreach($contact_info as $value){
    $id = $value['id'];
    $name = $value['name'];
    $email = $value['email'];
    $phone = $value['phone'];

    $contact_item_statement = mysqli_prepare($conn, $contact_item_query);
    mysqli_stmt_bind_param($contact_item_statement, 'ssii', $name, $email, $phone, $id);
    $contact_item_result = mysqli_stmt_execute($contact_item_statement);
    $contact_item_result = mysqli_stmt_get_result($contact_item_statement);  
    
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception(`tracker contact $id was not updated`);
    }
}

$output['success'] = true;
print(json_encode($output));
?>