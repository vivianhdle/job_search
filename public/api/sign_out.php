<?php
session_start();
$output['success'] = false;
session_destroy();
$output['success'] = true;

$json_output = json_encode($output);
print($json_output);
?>