<?php
    require_once('functions.php');
    set_exception_handler('handleError');
    require_once('config.php');
    require_once('mysqlconnect.php');

    if(empty($_GET['tracker_id'])){
        throw new Exception('You must send a tracker_id with your request');
    };

    $user_id = 1;//hard coded for now
    $tracker_id = (int)$_GET['tracker_id'];

    $output['success'] = false;

    $tracker_item_query = "SELECT ti.`id`, ti.`created`, ti.`title`, ti.`company`, ti.`progress`, ti.`link` FROM `user` AS u JOIN `tracker_item` AS ti ON u.`id`=ti.`user_id` JOIN `contact_info` AS ci ON ti.`id`=ci.`tracker_id` JOIN `note_item` AS ni ON ti.`id`=ni.`tracker_id` WHERE ti.`id`=$tracker_id LIMIT 1";
    
    $result = mysqli_query($conn, $tracker_item_query);

    print_r($result );

    if(!$result){
        throw new Exception(mysqli_error($conn));
    }

    if(!mysqli_num_rows($result)){
        throw new Exception('Unable to retrieve tracker data');
    }

    while($row = mysqli_fetch_assoc($result)){
        $tracker_item_contact_query = "SELECT  `id`, `name`, `email`, `phone` FROM `contact_info` WHERE `tracker_id`=$tracker_id";
    
        $contact_result = mysqli_query($conn, $tracker_item_contact_query);
    
        if(!$contact_result){
            throw new Exception(mysqli_error($conn));
        }
    
        if(!mysqli_num_rows($contact_result)){
            throw new Exception('Unable to retrieve tracker contact data');
        }
    
        $contact = [];
    
        while($contact_row = mysqli_fetch_assoc($contact_result)){
            $contact[] = [
                'id' => (int)$contact_row['id'],
                'name' => $contact_row['name'],
                'email' => $contact_row['email'],
                'phone' => (int)$contact_row['phone'],
            ];
        }

        $tracker_item_note_query = "SELECT `id`, `created`, `input` FROM `note_item` WHERE `tracker_id`=$tracker_id";
    
        $note_result = mysqli_query($conn, $tracker_item_note_query);
    
        if(!$note_result){
            throw new Exception(mysqli_error($conn));
        }
    
        if(!mysqli_num_rows($note_result)){
            throw new Exception('Unable to retrieve tracker note data');
        }
    
        $note = [];
    
        while($note_row = mysqli_fetch_assoc($note_result)){
            $note[] = [
                'id' => (int)$note_row['id'],
                'created' => $note_row['created'],
                'input' => $note_row['input'],
            ];
        }    
    
        $output['data'] = [
            'id' => (int)$row['id'],
            'created' => $row['created'],
            'title' => $row['title'],
            'company' => $row['company'],
            'progress' => $row['progress'],
            'contact' => $contact,
            'note' => $note,
            'link' => $row['link']
        ];
    }

    $output['success'] = true;

    $json_output = json_encode($output);
    print($json_output);
?>