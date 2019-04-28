<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$email = 'guest';
$password = 'guest';//change password to id passed from front end local storage
$hashedPassword = sha1($password);//DO NOT HASH ID just (int)

$query="SELECT `id` FROM `user` WHERE `email`=? AND `password`=?";

$user_statement = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($user_statement, 'ss', $email, $hashedPassword);
$result = mysqli_stmt_execute($user_statement);
$result = mysqli_stmt_get_result($user_statement);

if(!$result){
    throw new Exception('invalid query:', mysqli_error($conn));
}

if(!mysqli_num_rows($result)){
    throw new Exception('guest sign in failed');
}

$data = mysqli_fetch_assoc($result);
$data_id = $data['id'];
$token = $email.$data['id'].microtime();
$token = sha1($token);

$connect_query = "INSERT INTO `user_connection` SET `token`=?, `user_id`=?, `created` = NOW(), `ip_address`='{$_SERVER['REMOTE_ADDR']}'";

$connect_statement = mysqli_prepare($conn, $connect_query);
mysqli_stmt_bind_param($connect_statement, 'si', $token, $data_id);
$connect_result = mysqli_stmt_execute($connect_statement);
$connect_result = mysqli_stmt_get_result($connect_statement);

if(mysqli_errno($conn)){
    throw new Exception('invalid query:', mysqli_errno($conn));
}

if(mysqli_affected_rows($conn) !== 1){
    throw new Exception('failed to log in: connection not saved');
}

$_SESSION['user'] = [
    'user_id'=>$data['id'],
    'token'=>$token
];

$output['success'] = true;
$output['token'] = $token;
$output['guest'] = true;

$json_output = json_encode($output);
print($json_output);
?>