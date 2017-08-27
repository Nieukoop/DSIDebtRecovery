<?php
	$conn = new mysqli("localhost", "westernw_leroy", "Amber23!", "westernw_DSI");

    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $subject = $_POST["subject"];
    $description = $_POST["description"];

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "INSERT INTO queries (name, email, mobile, subject, description)
   								VALUES ('$name','$email','$mobile','$subject','$description')";

		if ($conn->query($sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();

		header("Location: index.html");
?>