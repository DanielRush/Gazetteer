<?php
$curl = curl_init();

$todayDate = date('Y-m-d');
$yesterdayTimestamp = strtotime('-2 day', time());
$yesterdayDate = date('Y-m-d', $yesterdayTimestamp);

$country = str_replace(' ', '-', $_GET['country']);
$country = str_replace(['(', ')'], '', $country);

curl_setopt_array($curl, array(
	CURLOPT_URL => 'https://api.covid19api.com/total/country/'.$country.'?from='.$yesterdayDate.'&to='.$todayDate,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

	$output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['executedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
