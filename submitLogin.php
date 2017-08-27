<?php
	$conn = new mysqli("localhost", "westernw_leroy", "Amber23!", "westernw_DSI");

   	$username = $_POST["username"];
   	$password = $_POST["password"];

   	echo $username;

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "SELECT * FROM user WHERE username='$username' AND password='$password'";

		if ($conn->query($sql) === TRUE) {
		    echo "Login Successful!";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();;

		header("Location: index.html");
?>