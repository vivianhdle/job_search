<?php
session_start();

$output['success'] = false;

if(!empty($_SESSION)){
    $output['success'] = true;
}

$json_output = json_encode($output);
print($json_output);
?>