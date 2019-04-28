<?php
    session_start();
    session_destroy();
    require_once('sign_up_guest.php');//change to sign_in once local storage for each guest is set
    echo'<h1>Session Cleared</h1>';
?>