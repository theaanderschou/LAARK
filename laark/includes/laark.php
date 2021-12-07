<?php
        // start with servername, username, password, databasename
    $dbServername = "localhost";
    $dbUsername = "";
    $dbPassword = "";
    $dbName = "laark";

        // variable to start connection
    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
