<?php
$string = file_get_contents("../data/countryBorders.geo.json");
$json = json_decode($string);
$features = $json->features;
$country_code = $_GET['country_code'];
$output_geom = "";
for($i=0;$i<sizeof($features);$i++){
    $feature = $features[$i];
    if($feature->properties->iso_a2 == $country_code){
        $output_geom = $feature->geometry;
    }
}

	$output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['executedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

echo(json_encode($output_geom));
?>
