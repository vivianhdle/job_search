<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$user_id = (int)$_SESSION['user']['user_id'];

$output['success'] = false;

$stats_query = "SELECT u.`id` AS 'user_id', u.`name` AS 'user_name', COUNT(ti.`progress`) AS 'total_prospects', (SELECT COUNT(ti.`progress`) FROM `tracker_item` AS ti WHERE ti.`user_id`=$user_id AND  ti.`progress`='Started Application') AS 'started_application', (SELECT COUNT(ti.`progress`) FROM `tracker_item` AS ti WHERE ti.`user_id`=$user_id AND ti.`progress`='Waiting for Response') AS 'waiting_for_response', (SELECT COUNT(ti.`progress`) FROM `tracker_item` AS ti WHERE ti.`user_id`=$user_id AND ti.`progress`='Follow-up Needed') AS 'follow-up_needed', (SELECT COUNT(ti.`progress`) FROM `tracker_item` AS ti WHERE ti.`user_id`=$user_id AND ti.`progress`='Archived') AS 'archived', (SELECT COUNT(ti.`progress`) FROM `tracker_item` AS ti WHERE ti.`user_id`=$user_id AND DATE(ti.`created`)=CURRENT_DATE()) AS 'started_today' 
FROM `user` AS u JOIN `tracker_item` as ti ON u.`id`=ti.`user_id` 
WHERE u.`id` = $user_id LIMIT 1";

$result = mysqli_query($conn, $stats_query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}
if(!mysqli_num_rows($result)){
    throw new Exception('Unable to retrieve user data');
}

$data = mysqli_fetch_assoc($result);

$output['data'] = [
    'user_id' => (int)$data['user_id'],
    'user_name' => $data['user_name'],
    'total_prospects' => (int)$data['total_prospects'],
    'started_application' => (int)$data['started_application'],
    'waiting_for_response' => (int)$data['waiting_for_response'],
    'follow-up_needed' => (int)$data['follow-up_needed'],
    'archived' => (int)$data['archived'],
    'started_today' => (int)$data['started_today']
];

$output['success'] = true;

$json_output = json_encode($output);
print($json_output);
?>