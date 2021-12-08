<?php
    include_once 'laark.php';

    $first = $_POST['first'];
    $last = $_POST['last'];
    $email = $_POST['email'];
    
    $sql = "INSERT INTO active_subscriber (email, first_name, last_name)
            VALUES ('$email', '$first, '$last');";
   
    mysqli_query($conn, $sql);

header("Location: ../index.php?signup=success");