<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('sign_in_check.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

if(empty($input['contact'])){
    throw new Exception('You must send a contact item with your request');
}

$output['success'] = false;

$contact_info = $input['contact'];
$id = $contact_info['id'];
$name = $contact_info['name'];
$email = $contact_info['email'];
$phone = $contact_info['phone'];

$contact_item_query = "UPDATE `contact_info` SET
    `name`=?,
    `email`=?,
    `phone`=?
    WHERE `id`=?
";
//need to catch dupe entry error

$contact_item_statement = mysqli_prepare($conn, $contact_item_query);
mysqli_stmt_bind_param($contact_item_statement, 'ssii', $name, $email, $phone, $id);
$contact_item_result = mysqli_stmt_execute($contact_item_statement);
$contact_item_result = mysqli_stmt_get_result($contact_item_statement);  

if(mysqli_affected_rows($conn) === 0){
    throw new Exception(`tracker contact $id was not updated`);
}

$output['success'] = true;
print(json_encode($output));
?>