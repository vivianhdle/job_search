<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['user_name'])){
    throw new Exception('You must send a user_name with your request');
}

if(empty($input['email'])){
    throw new Exception('You must send a email with your request');
}

if(empty($input['password'])){
    throw new Exception('You must send a password with your request');
}

$output['success'] = false;

$email = $input['email'];

$check_user_exist_query = "SELECT u.`email` FROM `user` AS u WHERE u.`email`=?";

$check_user_exist_statement = mysqli_prepare($conn, $check_user_exist_query);
mysqli_stmt_bind_param($check_user_exist_statement, 's', $email);
$check_user_exist_result = mysqli_stmt_execute($check_user_exist_statement);
$check_user_exist_result = mysqli_stmt_get_result($check_user_exist_statement);

if(!$check_user_exist_result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($check_user_exist_result)){
    throw new Exception('User account already exists');
}

$user_name = $input['user_name'];
$password = $input['password'];
$hashedPassword = sha1($password);

unset($input['password']);

$sign_up_query = "INSERT INTO `user` SET 
    `name`=?,
    `email`=?,
    `password`=?
";

$sign_up_statement = mysqli_prepare($conn, $sign_up_query);
mysqli_stmt_bind_param($sign_up_statement, 'sss', $user_name, $email, $hashedPassword);
$sign_up_result = mysqli_stmt_execute($sign_up_statement);
$sign_up_result = mysqli_stmt_get_result($sign_up_statement);

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('User was not signed up');
}

$output['success'] = true;
print(json_encode($output));
?>