<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

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

$tracker_id = $input['tracker_id'];
$title = $input['title'];
$company = $input['company'];
$progress = $input['progress'];
$link = $input['link'];

$tracker_item_query = "UPDATE `tracker_item` SET 
    `title`=?,
    `company`=?,
    `progress`=?,
    `link`=?
    WHERE `id`=?
";

$tracker_item_statement = mysqli_prepare($conn, $tracker_item_query);
mysqli_stmt_bind_param($tracker_item_statement, 'ssssi', $title, $company, $progress, $link, $tracker_id);
$tracker_item_result = mysqli_stmt_execute($tracker_item_statement);
$tracker_item_result = mysqli_stmt_get_result($tracker_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('tracker item was not updated');
}

$output['success'] = true;
print(json_encode($output));
?>