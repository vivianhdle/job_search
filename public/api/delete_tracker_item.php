<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

// if(!empty($_GET['user_id'])){
//     throw new Exception('You must send a user_id with your request');
// }

if(empty($_GET['trackerId'])){
    throw new Exception('You must send a tracker_id with your request');
};

$user_id = 1;//hard coded for now
$tracker_id = (int)$_GET['trackerId'];

$output['success'] = false;

$tracker_item_query = "DELETE FROM `tracker_item` WHERE `id`=$tracker_id";

$result = mysqli_query($conn, $tracker_item_query);

// $tracker_item_query = "DELETE FROM `tracker_item` WHERE `id`=?";

// $tracker_item_statement = mysqli_prepare($conn, $tracker_item_query);
// mysqli_stmt_bind_param($tracker_item_statement, 'i', $tracker_id);
// $tracker_item_result = mysqli_stmt_execute($tracker_item_statement);
// $tracker_item_result = mysqli_stmt_get_result($tracker_item_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('tracker item was not deleted');
}

$output['success'] = true;
print(json_encode($output));
?>