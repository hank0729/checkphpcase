<?php
// 服務器名稱
$servername = "1.175.178.176";
// 數據庫名稱
$dbname = "sensorbase";
// 數據庫使用者名稱
$username = "root";
// 數據庫使用者密碼
$password = "will4567";

// 此 API Key 值與的 ESP8266 中API Key 值需一致。
// 如果你改變這個值，ESP8266 中的值也需要變更
$api_key_value = "tPmAT5Ab3j7F8";
 
$api_key=$sensor=$location=$value1=$value2=$PM=$situation="";
echo $api_key;
//回應 $api_key_value;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $api_key = test_input($_POST["api_key"]);
    if($api_key == $api_key_value) {
        $sensor = test_input($_POST["sensor"]);
        $location = test_input($_POST["location"]);
        $PM = test_input($_POST["PM"]);
		$situation = test_input($_POST["situation"]);
	
        
        // 創建連接
        $conn = new mysqli($servername, $username, $password, $dbname);
        // 檢查連接
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "INSERT INTO sensordata (sensor, location, PM, situation)
        VALUES ('" . $sensor . "', '" . $location . "', '" . $PM . "', '" . $situation . "')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}	