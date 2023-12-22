<?php
// Connect to the database
$conn = mysqli_connect("1.175.178.176", "root", "will4567", "sensorbase");

// Execute the query
$result = mysqli_query($conn, "SELECT * FROM sensor1_data");

// Convert the result to JSON
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$json = json_encode($data);

// Return the JSON response
header('Content-Type: application/json');
echo $json;
?>