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

$(document).ready(function () {
	map = L.map('map').setView({ lon: 0, lat: 0 }, 2);

	// add the OpenStreetMap tiles
	OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	});
	map.addLayer(OpenStreetMap);

	// wonders icon
	const greenMarker = L.ExtraMarkers.icon({
		icon: 'fas fa-landmark',
		markerColor: 'green-light',
		shape: 'circle',
		prefix: 'fa'
	});

	markerHash = {};

	/**
	 * Place wonders markers
	 */
	// christ the redeemer
	markerHash['christ_the_redeemer'] = L.marker([-22.9519, -43.2105], { icon: greenMarker })
	markerHash.christ_the_redeemer
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/ChristTheRedeemer_500x500.png' alt='Christ the Redeemer' width='100%'><br><b>Christ the Redeemer</b><br>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.<br><a href='https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)' target='_blank'>https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)</a>");
	
	// chichen itza
	markerHash['chichen_itza'] = L.marker([20.6843, -88.5678], { icon: greenMarker })
	markerHash.chichen_itza
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/ChichenItza_500x500.png' alt='Chichen Itza' width='100%'><br><b>Chichén Itzá</b><br>Chichén Itzá was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.<br><a href='https://en.wikipedia.org/wiki/Chichen_Itza' target='_blank'>https://en.wikipedia.org/wiki/Chichen_Itza</a>")
	
	// colosseum
	markerHash['colosseum'] = L.marker([41.8902, 12.4922], { icon: greenMarker })
	markerHash.colosseum
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/Colosseum_500x500.png' alt='Colosseum' width='100%'><br><b>Colosseum</b><br>An oval amphitheatre in the centre of the city of Rome, Italy.<br><a href='https://en.wikipedia.org/wiki/Colosseum' target='_blank'>https://en.wikipedia.org/wiki/Colosseum</a>")
	
	// great wall
	markerHash['great_wall_of_china'] = L.marker([40.4319, 116.5704], { icon: greenMarker })
	markerHash.great_wall_of_china
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/GreatWallofChina_500x500.png' alt='Great Wall of China' width='100%'><br><b>Great Wall of China</b><br>A series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.<br><a href='https://en.wikipedia.org/wiki/Great_Wall_of_China' target='_blank'>https://en.wikipedia.org/wiki/Great_Wall_of_China</a>")

	// machu picchu
	markerHash['machu_picchu'] = L.marker([-13.1631, -72.5450], { icon: greenMarker })
	markerHash.machu_picchu
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/MachuPicchu_500x500.png' alt='Machu Picchu' width='100%'><br><b>Machu Picchu</b><br>A 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge.<br><a href='https://en.wikipedia.org/wiki/Machu_Picchu' target='_blank'>https://en.wikipedia.org/wiki/Machu_Picchu</a>")

	// petra
	markerHash['petra'] = L.marker([30.3285, 35.4444], { icon: greenMarker })
	markerHash.petra
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/Petra_500x500.png' alt='Petra' width='100%'><br><b>Petra</b><br>A historic and archaeological city in southern Jordan.<br><a href='https://en.wikipedia.org/wiki/Petra' target='_blank'>https://en.wikipedia.org/wiki/Petra</a>")
	
	// taj mahal
	markerHash['taj_mahal'] = L.marker([27.1751, 78.0421], { icon: greenMarker })
	markerHash.taj_mahal
	.addTo(map)
	.bindPopup("<img src='../images/WondersTab/TajMahal_500x500.png' alt='Taj Mahal' width='100%'><br><b>Taj Mahal</b><br>An ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.<br><a href='https://en.wikipedia.org/wiki/Taj_Mahal' target='_blank'>https://en.wikipedia.org/wiki/Taj_Mahal</a>")

	const location = L.easyButton({
		position: 'topleft',
		id: 'locationBtn',
		states: [{
			icon: '<i class="fas fa-map-marker-alt"></i>',
			title: 'Location',
			onClick: function (control) { $('#location').marker('show') }
		}]
	})
	location.addTo(map);

	const orangeMarker = L.ExtraMarkers.icon({
		icon: 'far fa-building',
		markerColor: 'orange',
		shape: 'circle',
		prefix: 'fa'
	});

	/**
	 * Place architecture markers
	 */
	// burj khalifa
	markerHash['burj_khalifa'] = L.marker([25.1972, 55.2744], { icon: orangeMarker })
	markerHash.burj_khalifa
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/BurjKhalifa_500x500.png' alt='Burj Khalifa' width='100%'><br><b>Burj Khalifa</b><br>The Burj Khalifa is the world's tallest building located in Dubai with a height of 828m (2,717ft).<br><a href='https://en.wikipedia.org/wiki/Burj_Khalifa' target='_blank'>https://en.wikipedia.org/wiki/Burj_Khalifa</a>")

	// florence cathedral
	markerHash['florence_cathedral'] = L.marker([43.7731, 11.2560], { icon: orangeMarker })
	markerHash.florence_cathedral
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/FlorenceDuomo_500x500.png' alt='Florence Cathedral' width='100%'><br><b>Florence Cathedral</b><br>Florence Cathedral began in 1296 to a design of Arnolfo di Cambio and was structurally completed by 1436, with the dome engineered by Filippo Brunelleschi.<br><a href='https://en.wikipedia.org/wiki/Florence_Cathedral' target='_blank'>https://en.wikipedia.org/wiki/Florence_Cathedral</a>")
	
	// heydar aliyev center
	markerHash['heydar_aliyev_center'] = L.marker([40.3959, 49.8678], { icon: orangeMarker })
	markerHash.heydar_aliyev_center
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/HeydarAliyevCenter_500x500.png' alt='Heydar Aliyev Center' width='100%'><br><b>Heydar Aliyev Center</b><br>The Heydar Aliyev Center is a 57,500 m2 (619,000 sq ft) building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles.<br><a href='https://en.wikipedia.org/wiki/Heydar_Aliyev_Center' target='_blank'>https://en.wikipedia.org/wiki/Heydar_Aliyev_Center</a>")
	
	// chrysler building
	markerHash['chrysler_building'] = L.marker([40.7516, -73.9755], { icon: orangeMarker })
	markerHash.chrysler_building
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/ChryslerBuilding_500x500.png' alt='Chrysler Building' width='100%'><br><b>Chrysler Building</b><br>The Chrysler Building is an Art Deco skyscraper in the Turtle Bay neighborhood on the East Side of Manhattan, New York City, at the intersection of 42nd Street and Lexington Avenue near Midtown Manhattan.<br><a href='https://en.wikipedia.org/wiki/Chrysler_Building' target='_blank'>https://en.wikipedia.org/wiki/Chrysler_Building</a>")
	
	// royal liver building
	markerHash['royal_liver_building'] = L.marker([53.4058, -2.9959], { icon: orangeMarker })
	markerHash.royal_liver_building
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/RoyalLiverBuilding_500x500.png' alt='Royal Liver Building' width='100%'><br><b>The Royal Liver Building</b><br>The Royal Liver Building is a Grade I listed building in Liverpool, England. It is located at the Pier Head and along with the neighbouring Cunard Building and Port of Liverpool Building is one of Liverpool's <em>Three Graces<em>, which line the city's waterfront. It is also part of Liverpool's UNESCO-designated World Heritage Maritime Mercantile City.<br><a href='https://en.wikipedia.org/wiki/Royal_Liver_Building' target='_blank'>https://en.wikipedia.org/wiki/Royal_Liver_Building</a>")
	
	// sydney opera house
	markerHash['sydney_opera_house'] = L.marker([-33.8568, 151.2153], { icon: orangeMarker })
	markerHash.sydney_opera_house
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/SydneyOperaHouse_500x500.png' alt='SydneyOperaHouse' width='100%'><br><b>Sydney Opera House</b><br>The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia.<br><a href='https://en.wikipedia.org/wiki/Sydney_Opera_House' target='_blank'>https://en.wikipedia.org/wiki/Sydney_Opera_House</a>")
	
	// shanghai tower
	markerHash['shanghai_tower'] = L.marker([31.2335, 121.5056], { icon: orangeMarker })
	markerHash.shanghai_tower
	.addTo(map)
	.bindPopup("<img src='../images/ArchitectureTab/ShanghaiTower_500x500.png' alt='Shanghai Tower' width='100%'><br><b>Shanghai Tower</b><br>The Shanghai Tower is a 128-story, 632-meter (2,073 ft)-tall megatall skyscraper in Lujiazui, Pudong, Shanghai.<br><a href='https://en.wikipedia.org/wiki/Shanghai_Tower' target='_blank'>https://en.wikipedia.org/wiki/Shanghai_Tower</a>")

	boundary = new L.geoJson().addTo(map);

	const architecture = L.easyButton({
		position: 'topleft',
		id: 'archIconsBtn',
		states: [{
			icon: '<i class="far fa-building"></i>',
			title: 'Iconic Architecture',
			onClick: function (control) { $('#architecture').modal('show') },
		}]
	})
	architecture.addTo(map);

	const wonder = L.easyButton({
		position: 'topleft',
		id: 'wonderIconsBtn',
		states: [{
			icon: '<i class="fas fa-landmark"></i>',
			title: 'Wonders of the World',
			onClick: function (control) { $('#wonder').modal('show') },
		}]
	})
	wonder.addTo(map);

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
				
				L.marker(coords)
				.addTo(map)
				.bindPopup("Your location", { autoClose: false })
				.openPopup();
				
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
		},
	});
}

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
	map.panTo(new L.LatLng(lat, lng));
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
			$("#population").html(info.population);
			$("#flag").attr("src", info.flag);
			$("#currency").html(info.currencies[0]["name"]);
			$("#currencySymbol").html(info.currencies[0]["symbol"]);
			$("#currencyCode").html(info.currencies[0]["code"]);
			$("#area").html(info.area);
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
				$('#wikiSummary').html(wikiResult.geonames[0].summary);
				$('#wikiUrl').html(wikiResult.geonames[0].wikipediaUrl);
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
				$('#weatherMain').html(weatherResult.weather[0].main);
				$('#weatherTemp').html(weatherResult.main.temp);
				$('#weatherFeelsLike').html(weatherResult.main.feels_like);
				$('#weatherTempMin').html(weatherResult.main.temp_min);
				$('#weatherTempMax').html(weatherResult.main.temp_max);
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

				$('#covidConfirmed').html(totalCases);
				$('#covidRecovered').html(totalRecovered);
				$('#covidDeaths').html(totalDeaths);
				$('#covidNewConfirmed').html(newCases);
				$('#covidNewRecovered').html(newRecovered);
				$('#covidNewDeaths').html(newDeaths);
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
