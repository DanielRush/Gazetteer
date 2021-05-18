<?php
$executionStartTime = microtime(true) / 1000;
$country = str_replace(['(', ')'], '', $_GET['q']);
$wikiUrl='http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=' . urlencode($country) . '&maxRows=1&username=danielrush&style=full';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$wikiUrl);
$wikiResult=curl_exec($ch);
curl_close($ch);
echo $wikiResult;