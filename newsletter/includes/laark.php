<?php
        // start with servername, username, password, databasename
    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "laark";

        // variable to start connection
    $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed:" .$conn->connect_error);
    }

    echo "Connected succesfully"."<br>";


    $sql ="SELECT first_name, last_name FROM active_subscriber";
    $result =$conn->query($sql);
    if($result->num_rows > 0) {
    
        while($row = $result->fetch_assoc()) {
            echo $row['first_name']. "- Lastname:".$row['last_name']."<br/>";
        }
    }
    else {
        echo "0 results";
    }