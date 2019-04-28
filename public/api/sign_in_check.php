<?php
$output['success'] = false;

if(empty($_SESSION['user']['token'])){
    require_once('sign_up_guest.php');
}

$token = $_SESSION['user']['token'];

$sign_in_check_query = "SELECT * FROM `user_connection` WHERE `token`=?";

$sign_in_check_statement = mysqli_prepare($conn, $sign_in_check_query);
mysqli_stmt_bind_param($sign_in_check_statement, 's', $token);
$sign_in_check_result = mysqli_stmt_execute($sign_in_check_statement);
$sign_in_check_result = mysqli_stmt_get_result($sign_in_check_statement);

if(!$sign_in_check_result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($sign_in_check_result) !== 1){
    throw new Exception('Sign in failed, please try again.');
}

$data = mysqli_fetch_assoc($sign_in_check_result);

$output['success'] = true;

if(!empty($_SESSION['user'])){
    $_SESSION['user'] = [
        'user_id'=>$data['user_id'],
        'token'=>$token
    ];
}
?>