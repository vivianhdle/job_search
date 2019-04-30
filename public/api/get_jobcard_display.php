<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');
ob_start();
require_once('sign_in_check.php');
ob_end_clean();

$output['success'] = false;

$user_id = (int)$_SESSION['user']['user_id'];

$query = "SELECT ti.`id`, ti.`created`, ti.`title`, ti.`company`, ti.`progress` FROM `user` AS u JOIN `tracker_item` AS ti ON u.`id`=ti.`user_id` WHERE u.`id`=$user_id";

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

$output['data'] = [];

while($row = mysqli_fetch_assoc($result)){
    $output['data'][] = [
        'id' => $row['id'],
        'created' => $row['created'],
        'title' => $row['title'],
        'company' => $row['company'],
        'progress' => $row['progress']
    ];
}

$output['success'] = true;

$json_output = json_encode($output);
print($json_output);
?>