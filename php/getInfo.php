<?php
$country_code = $_GET['country_code'];
$data = file_get_contents("https://restcountries.eu/rest/v2/alpha/$country_code");

	$output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['executedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

echo($data);
?>        
