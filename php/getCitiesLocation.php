<?php

	$executionStartTime = microtime(true) / 1000;

	$url='https://www.triposo.com/api/20210615/location.json?part_of=' . $_REQUEST['country'] . '&account=TEUOBHZR&token=74noeldqzdzka8uw2gopvqkipvv4y0ks';
    //https://www.triposo.com/api/20210615/location.json?id=London&account=TEUOBHZR&token=74noeldqzdzka8uw2gopvqkipvv4y0ks
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

	/*
	
/api/20210317/location.json?
part_of=France
&tag_labels=city
&count=10
&order_by=-score
&fields=name,id,snippet,parent_id,score,type

API token: 74noeldqzdzka8uw2gopvqkipvv4y0ks
Account ID:  TEUOBHZR

https://www.triposo.com/api/20210615/location.json?id=London&account=<account ID>&token=<API token>

https://www.triposo.com/api/20210615/location.json?id=London&account=TEUOBHZR&token=74noeldqzdzka8uw2gopvqkipvv4y0ks

*/

?>



