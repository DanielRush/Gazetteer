<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true) / 1000;
$initial_url = 'https://api.opencagedata.com/geocode/v1/json?q=' .$_GET['country_name'] .'&key=6de7118216f04062b2e20ab8153cde02';
$url = str_replace(' ', '%20', $initial_url);
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
curl_close($ch);
$decode = json_decode($result,true);	
$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "mission saved";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = $decode['results'];

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($output);