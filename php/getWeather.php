<?php

	$executionStartTime = microtime(true) / 1000;
	
	$weatherUrl='http://api.openweathermap.org/data/2.5/weather?lat=' . $_REQUEST['lat'] . '&lon=' . $_REQUEST['lng'] . '&units=metric&appid=0499b3ebb755c930da8e47005bfe086f';
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$weatherUrl);

	$weatherResult=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($weatherResult,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>