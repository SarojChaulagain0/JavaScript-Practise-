<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the POST request
    $username = $_POST["username"];
    $password = $_POST["password"];

    $validUsername = "Saroj";
    $validPassword = "123";

    if ($username == $validUsername && $password == $validPassword) {
        $response = array("status" => "success", "message" => "Login successful!");
    } else {
        $response = array("status" => "error", "message" => "*Invalid credentials. Please try again.*");
    }

 
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
  
    $response = array("status" => "error", "message" => "Invalid request method.");

   
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>

