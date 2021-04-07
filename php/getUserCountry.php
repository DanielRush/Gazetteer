<?php

$lat = $_GET['lat'];
$lng = $_GET['lng'];

$data = file_get_contents("http://api.geonames.org/countryCodeJSON?lat=$lat&lng=$lng&username=danielrush");
print_r($data);

?>