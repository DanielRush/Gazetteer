
let map;
let OpenStreetMap;
let code;
let flag;
let north;
let east;
let south;
let west;
let boundary;
let markerHash;


// Preloader

$(window).on('load', function () {
	if ($('#preloader').length) {
	$('#preloader').delay(100).fadeOut('slow', function () {
	$(this).remove();
	});
	}
	});



$(document).ready(function () {
	map = L.map('map').setView({ lon: 0, lat: 0 }, 2);

	// add the OpenStreetMap tiles
	OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 15,
		minZoom: 2,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	});
	map.addLayer(OpenStreetMap);

	L.control.zoom({
		position:'topright'
	   }).addTo(map);

	map.setMaxBounds([[-90,-180],[90,180]]);
	map.setMinZoom(3);
	
  	
  	function preloadImage(url) {
    var img=new Image();
    img.src=url;
	}

	markerHash = {};



	boundary = new L.geoJson().addTo(map);

	// scale bar
	L.control.scale().addTo(map);

	getCountryCodes();
	getLocation();
});

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				const { latitude, longitude } = position.coords;
				const coords = [ latitude, longitude ];
							
				
				$.ajax({
					url: "php/getUserCountry.php?",
					type: "GET",
					data: {
						lat: latitude,
						lng: longitude
					},
					success: function (json) {
						map.setView(coords, 13);
						json = JSON.parse(json);

						const country = json.countryName;
						move_map(country);
					},
				});
			},
			function () {
				alert("Geolocator not granted permission on this device, could not get location");
			}
		);
	}
}

function getCountryCodes() {
	$.ajax({
		url: "php/getCountries.php?",
		type: "GET",
		success: function (json) {
			const countries = JSON.parse(json);
			let option = '';
			for (let country of countries) {
				option += '<option value="' + country[0] + '">' + country[0] + '</option>';
			}
			$("#countries").append(option);
          	$("#countries").change();
		},
	});
}

function openCountry(evt, countryName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(countryName).style.display = "block";
	evt.currentTarget.className += " active";
  }  


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  

function move_map(country) {
	$("#countries option:selected").text(country)
	
	$.ajax({
		url: "php/getCountryInfo.php",
		type: "GET",
		dataType: 'json',
		data: {
			country_name: country,
		},
		success: function (result) {
			if (result.status.name == "ok") {
				const lat = (result['data'][0]['geometry']['lat']);
				const lng = (result['data'][0]['geometry']['lng']);
				code = (result['data'][0]['components']['ISO_3166-1_alpha-2']);

				map.panTo(new L.LatLng(lat, lng), 13);
				$('#country_info').collapse('show');

				getCountryBorder();
				getCountryInfo();
				getWiki();
				getCovidData();
			}
		},
	});
}

function moveToLocation(locationKey, lat, lng) {
	map.setZoom(13);
	map.fitBounds(new L.LatLng(lat, lng));
	markerHash[locationKey].openPopup();
}

// border
function getCountryBorder() {
	$.ajax({
		url: "php/getBorder.php",
		type: "GET",
		data: {
			country_code: code
		},
		success: function (json) {
			json = JSON.parse(json);
			boundary.clearLayers();
			boundary.addData(json).setStyle(borderStyle());

			const bounds = boundary.getBounds();
			map.fitBounds(bounds);

			bounds.getEast();
			bounds.getWest();
			bounds.getNorth();
			bounds.getSouth();
		},
	});
}

// country border style
function borderStyle() {
	return {
		fillColor: 'teal',
		weight: 4,
		opacity: 0.8,
		color: 'teal',
		fillOpacity: 0.2
	};
}

function populationWithCommas(population) {
    		return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

function areaWithCommas(area) {
    		return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

function getCountryInfo() {
	$.ajax({
		url: "php/getInfo.php",
		type: "GET",
		data: {
			country_code: code
		},
		success: function (response) {
			let info = $.parseJSON(response);  
          	
          	
			
          
			$(".card-header").attr("src", info.flag);
			$("#country").html(info.name);
			$("#capital").html(info.capital);
			$("#population").html(populationWithCommas(info.population));
			$("#flag").attr("src", info.flag);
			$("#currency").html(info.currencies[0]["name"]);
			$("#currencySymbol").html(info.currencies[0]["symbol"]);
			$("#currencyCode").html(info.currencies[0]["code"]);
			$("#area").html(areaWithCommas(info.area));
			$("#timezones").html(info.timezones);
			$("#region").html(info.region);
			$("#subregion").html(info.subregion);
			$("#alpha3Code").html(info.alpha3Code);
			$("#alpha2Code").html(info.alpha2Code);
			$("#borders").html(info.borders);
			$("#wikipedia").attr(
				"href",
				"https://en.wikipedia.org/wiki/" + info.name
			);

			getExchangeRates(info.currencies[0]["code"]);
			getWeather(info.latlng);
          
          
		},
	});
}

//wikipedia links
function getWiki() {
	$.ajax({
		url: 'php/getWiki.php',
		type: 'GET',
		dataType: 'json',
		data: {
			q: $("#countries").val(),
		},
		success: function (wikiResult) {
			if (wikiResult.geonames.length > 0) {
              const wikipediaUrlFull = 'https://' + wikiUrl;
				$('#wikiSummary').html(wikiResult.geonames[0].summary);
				$('#wikiUrl').html(wikiResult.geonames[0].wikipediaUrl);
              	$('#wikiUrl').attr("href", wikipediaUrlFull);
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('ERROR');
			console.error(jqXHR);
			console.error(textStatus);
			console.error(JSON.stringify(errorThrown));
		}
	});
}




// weather 
function getWeather(latlng) {
	$.ajax({
		url: 'php/getWeather.php',
		type: 'GET',
		dataType: 'json',
		data: {
			lat: latlng[0],
			lng: latlng[1],
		},
		success: function (weatherResult) {
			if (weatherResult.main) {
            var iconcode = weatherResult.weather[0].icon;
              	var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
              	$('#weatherIcon').attr('src', iconurl);
             
              /*http://openweathermap.org/img/wn/10d@2x.png
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";*/
              
        		/*$('#weatherIcon').html(weatherResult.weather[0].icon);*/
				$('#weatherIcon').html(weatherResult.weather[0].icon);
              	$('#weatherMain').html(weatherResult.weather[0].main);
				$('#weatherTemp').html(Math.round(weatherResult.main.temp) + '°' );
				$('#weatherFeelsLike').html(Math.round(weatherResult.main.feels_like) + '°C');
				$('#weatherTempMin').html(Math.round(weatherResult.main.temp_min) + '°C');
				$('#weatherTempMax').html(Math.round(weatherResult.main.temp_max) + '°C');
				$('#weatherHumidity').html(weatherResult.main.humidity);
				$('#weatherPressure').html(weatherResult.main.pressure);
				$('#weatherWindSpeed').html(weatherResult.wind.speed);
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('ERROR');
			console.error(errorThrown);
		}
	});
}

function totalCasesWithCommas(totalCases) {
    		return totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
function totalRecoveredWithCommas(totalRecovered) {
    		return totalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
function totalDeathsWithCommas(totalDeaths) {
    		return totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
function newCasesWithCommas(newCases) {
    		return newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
function newRecoveredWithCommas(newRecovered) {
    		return newRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
function newDeathsWithCommas(newDeaths) {
    		return newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

// covid data
function getCovidData() {
	$.ajax({
		url: 'php/getCovidData.php',
		type: 'GET',
		dataType: 'json',
		data: {
			country: $("#countries").val()
		},
		success: function (covidResult) {
			if (covidResult.length > 0) {
				let totalCases = covidResult[1].Confirmed;
				let totalRecovered = covidResult[1].Recovered;
				let totalDeaths = covidResult[1].Deaths;
				let newCases = covidResult[1].Confirmed - covidResult[0].Confirmed;
				let newRecovered = covidResult[1].Recovered - covidResult[0].Recovered;
				let newDeaths = covidResult[1].Deaths - covidResult[0].Deaths;

				$('#covidConfirmed').html(totalCasesWithCommas(totalCases));
				$('#covidRecovered').html(totalRecoveredWithCommas(totalRecovered));
				$('#covidDeaths').html(totalDeathsWithCommas(totalDeaths));
				$('#covidNewConfirmed').html(newCasesWithCommas(newCases));
				$('#covidNewRecovered').html(newRecoveredWithCommas(newRecovered));
				$('#covidNewDeaths').html(newDeathsWithCommas(newDeaths));
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('ERROR');
			console.log($("#countries").val());
			console.error(jqXHR);
			console.error(textStatus);
			console.error(JSON.stringify(errorThrown));
		}
	});
}

// Exchange Rates
function getExchangeRates(code) {
	$.ajax({
		url: "php/getExchangeRate.php",
		type: 'GET',
		data: {
			code: code
		},
		dataType: 'json',
		success: function (exchangeRatesResult) {
			if (exchangeRatesResult.rates) {
				$('#exchangeRate').html(exchangeRatesResult.rates[code]);
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
		}
	});
}


// cities input
/*function getNearbyPlaceName() {
	$.ajax({
		url: 'php/getNearbyPlaceName.php',
		type: 'GET',
		dataType: 'json',
		data: {
			lat: lat,
			lng: lng,
		},
		success: function (result) {
			if (result.geonames.length > 0) {

				$('#cityName').html(result.geonames[0].name);
				$('#cityPopulation').html(result.geonames[0].population);

			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('ERROR');
			console.error(jqXHR);
			console.error(textStatus);
			console.error(JSON.stringify(errorThrown));
		}
	});
} */

// city Location
function getCitiesLocation() {
	$.ajax({
		url: "php/getCitiesLocation.php",
		type: 'GET',
		dataType: 'json',
		data: {
			country: $("#countries").val(),
		},
		success: function (results) {
			if (results.status.name == "ok") {
				$('#cityName').html(results.results[0].id);
				$('#cityLat').html(results.results.coordinates[0].latitude);
				$('#cityLng').html(results.results.coordinates[0].longitude);
				$('#cityImage').html(results.results.images.url);
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
		}
	});
}

var cityIcon = L.ExtraMarkers.icon({
    iconClasses: "far fa-building",
    markerColor: '#F3D849',
    markerFillOpacity: 0.95,
    markerStrokeWidth: 1,
    markerStrokeColor: "grey",
    iconColor: "black",
    iconXOffset: -1,
    iconYOffset: -10
})

var markers = L.markerClusterGroup();
markers.addLayer(L.marker(cityLat, cityLng(map)));

map.addLayer(markers);
/*L.icon.fontAwesome*/
