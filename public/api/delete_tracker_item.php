<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('sign_in_check.php');

if(empty($_GET['tracker_id'])){
    throw new Exception('You must send a tracker_id with your request');
};

$tracker_id = (int)$_GET['tracker_id'];

$output['success'] = false;

$tracker_item_query = "DELETE FROM `tracker_item` WHERE 
    `id`=$tracker_id
";

$result = mysqli_query($conn, $tracker_item_query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('tracker item was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>