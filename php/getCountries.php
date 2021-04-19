<?php

$string = file_get_contents("../data/countryBorders.geo.json");
$json = json_decode($string);
$features = $json->features;

$countries = array();
for($i=0;$i<sizeof($features);$i++){
    $feature = $features[$i];
    $country_name = $feature->properties->name;
    $country_iso_a2 = $feature->properties->iso_a2;
	$coords = $feature->geometry->coordinates;
    $array = [$country_name,$country_iso_a2, $coords];
    array_push($countries, $array);
}
usort($countries, function($a, $b) {
    return strcasecmp($a[0], $b[0]);
});
print_r(json_encode($countries));
?>
