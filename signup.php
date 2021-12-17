    <?php
    include_once "dbh.inc.php";

        $first = $_POST['first_name'];
        $last = $_POST['last_name'];
        $email = $_POST['email'];


        // First we make a SQL query that selects all data from our users table in the database.
        $sql = "INSERT INTO active_subscriber (first_name, last_name, email) VALUES ('$first', '$last', '$email');";
        

        // Then we run the query in the database.
        mysqli_query($conn, $sql);
    
    ?> 
