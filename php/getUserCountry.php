<?php
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$data = file_get_contents("http://api.geonames.org/countryCodeJSON?lat=$lat&lng=$lng&username=danielrush");
$output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['executedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

echo($data);
?>
