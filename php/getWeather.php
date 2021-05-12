<?php
$executionStartTime = microtime(true) / 1000;
$weatherUrl='http://api.openweathermap.org/data/2.5/weather?lat=' . $_GET['lat'] . '&lon=' . $_GET['lng'] . '&units=metric&appid=0499b3ebb755c930da8e47005bfe086f';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$weatherUrl);
$weatherResult=curl_exec($ch);
curl_close($ch);
echo $weatherResult;