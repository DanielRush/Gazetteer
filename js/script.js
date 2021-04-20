let map;
let OpenStreetMap;
let lat;
let lng; 
let code; 
let flag; 
let north;
let east;
let south;
let west;
let boundary;
let global_country;
  $(document).ready(function () {   	
		
	map = L.map('map').setView({lon: 0, lat: 0}, 2);

    // add the OpenStreetMap tiles
    OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });
	map.addLayer(OpenStreetMap); 
    
    
    
// wonders icon
  var greenMarker = L.ExtraMarkers.icon({
    icon: 'fas fa-landmark',
    markerColor: 'green-light',
    shape: 'circle',
    prefix: 'fa'
  });
 
 // L.marker([51.941196,4.512291], {icon: greenMarker}).addTo(map);
   
 

// wonders of the world
    
    
    var marker = L.marker([-22.9519, -43.2105], {icon: greenMarker}) //christ the redeemer
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/ChristTheRedeemer_500x500.png' alt='Christ the Redeemer' width='100%'><br><b>Christ the Redeemer</b><br>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.<br><a href='https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)' target='_blank'>https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)</a>")
            .openPopup();
    var marker = L.marker([20.6843, -88.5678], {icon: greenMarker}) //chichen itza
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/ChichenItza_500x500.png' alt='Chichen Itza' width='100%'><br><b>Chichén Itzá</b><br>Chichén Itzá was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.<br><a href='https://en.wikipedia.org/wiki/Chichen_Itza' target='_blank'>https://en.wikipedia.org/wiki/Chichen_Itza</a>")
            .openPopup();
    var marker = L.marker([41.8902, 12.4922], {icon: greenMarker}) //colosseum
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/Colosseum_500x500.png' alt='Colosseum' width='100%'><br><b>Colosseum</b><br>An oval amphitheatre in the centre of the city of Rome, Italy.<br><a href='https://en.wikipedia.org/wiki/Colosseum' target='_blank'>https://en.wikipedia.org/wiki/Colosseum</a>")
            .openPopup();
    var marker = L.marker([40.4319, 116.5704], {icon: greenMarker}) //great wall
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/GreatWallofChina_500x500.png' alt='Great Wall of China' width='100%'><br><b>Great Wall of China</b><br>A series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.<br><a href='https://en.wikipedia.org/wiki/Great_Wall_of_China' target='_blank'>https://en.wikipedia.org/wiki/Great_Wall_of_China</a>")
            .openPopup();
    var marker = L.marker([-13.1631, -72.5450], {icon: greenMarker}) //machu picchu
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/MachuPicchu_500x500.png' alt='Machu Picchu' width='100%'><br><b>Machu Picchu</b><br>A 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge.<br><a href='https://en.wikipedia.org/wiki/Machu_Picchu' target='_blank'>https://en.wikipedia.org/wiki/Machu_Picchu</a>")
            .openPopup();
    var marker = L.marker([30.3285, 35.4444], {icon: greenMarker}) //petra
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/Petra_500x500.png' alt='Petra' width='100%'><br><b>Petra</b><br>A historic and archaeological city in southern Jordan.<br><a href='https://en.wikipedia.org/wiki/Petra' target='_blank'>https://en.wikipedia.org/wiki/Petra</a>")
            .openPopup();
    var marker = L.marker([27.1751, 78.0421], {icon: greenMarker}) // taj mahal
            .addTo(map)
            .bindPopup("<img src='../images/WondersTab/TajMahal_500x500.png' alt='Taj Mahal' width='100%'><br><b>Taj Mahal</b><br>An ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.<br><a href='https://en.wikipedia.org/wiki/Taj_Mahal' target='_blank'>https://en.wikipedia.org/wiki/Taj_Mahal</a>")
            .openPopup();
    		
    
    
var location = L.easyButton({
    position: 'topleft',
    id: 'locationBtn',
    states: [{
        icon: '<i class="fas fa-map-marker-alt"></i>',
        title: 'Location',
        onClick: function (control) { $('#location').marker('show') },

        }]
})
location.addTo(map);
    
var orangeMarker = L.ExtraMarkers.icon({
    icon: 'far fa-building',
    markerColor: 'orange',
    shape: 'circle',
    prefix: 'fa'
  });
 
 // L.marker([64.742686,-54.512291], {icon: orangeMarker}).addTo(map);
    
 // architecture
    var marker = L.marker([25.1972, 55.2744], {icon: orangeMarker}) //burj khalifa
            .addTo(map)
    		.bindPopup("<img src='../images/ArchitectureTab/BurjKhalifa_500x500.png' alt='Burj Khalifa' width='100%'><br><b>Burj Khalifa</b><br>The Burj Khalifa is the world's tallest building located in Dubai with a height of 828m (2,717ft).<br><a href='https://en.wikipedia.org/wiki/Burj_Khalifa' target='_blank'>https://en.wikipedia.org/wiki/Burj_Khalifa</a>")
            .openPopup();  		
    var marker = L.marker([43.7731, 11.2560], {icon: orangeMarker}) //florence cathedral
            .addTo(map)
    		.bindPopup("<img src='../images/ArchitectureTab/FlorenceDuomo_500x500.png' alt='Florence Cathedral' width='100%'><br><b>Florence Cathedral</b><br>Florence Cathedral began in 1296 to a design of Arnolfo di Cambio and was structurally completed by 1436, with the dome engineered by Filippo Brunelleschi.<br><a href='https://en.wikipedia.org/wiki/Florence_Cathedral' target='_blank'>https://en.wikipedia.org/wiki/Florence_Cathedral</a>")
            .openPopup();
    var marker = L.marker([40.3959, 49.8678], {icon: orangeMarker}) //heydar aliyev center
            .addTo(map)
            .bindPopup("<img src='../images/ArchitectureTab/HeydarAliyevCenter_500x500.png' alt='Heydar Aliyev Center' width='100%'><br><b>Heydar Aliyev Center</b><br>The Heydar Aliyev Center is a 57,500 m2 (619,000 sq ft) building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles.<br><a href='https://en.wikipedia.org/wiki/Heydar_Aliyev_Center' target='_blank'>https://en.wikipedia.org/wiki/Heydar_Aliyev_Center</a>")
            .openPopup();
    var marker = L.marker([40.7516, -73.9755], {icon: orangeMarker}) //chrysler building
            .addTo(map)
            .bindPopup("<img src='../images/ArchitectureTab/ChryslerBuilding_500x500.png' alt='Chrysler Building' width='100%'><br><b>Chrysler Building</b><br>The Chrysler Building is an Art Deco skyscraper in the Turtle Bay neighborhood on the East Side of Manhattan, New York City, at the intersection of 42nd Street and Lexington Avenue near Midtown Manhattan.<br><a href='https://en.wikipedia.org/wiki/Chrysler_Building' target='_blank'>https://en.wikipedia.org/wiki/Chrysler_Building</a>")
            .openPopup();
    var marker = L.marker([53.4058, -2.9959], {icon: orangeMarker}) //royal liver building
            .addTo(map)
            .bindPopup("<img src='../images/ArchitectureTab/RoyalLiverBuilding_500x500.png' alt='Royal Liver Building' width='100%'><br><b>The Royal Liver Building</b><br>The Royal Liver Building is a Grade I listed building in Liverpool, England. It is located at the Pier Head and along with the neighbouring Cunard Building and Port of Liverpool Building is one of Liverpool's <em>Three Graces<em>, which line the city's waterfront. It is also part of Liverpool's UNESCO-designated World Heritage Maritime Mercantile City.<br><a href='https://en.wikipedia.org/wiki/Royal_Liver_Building' target='_blank'>https://en.wikipedia.org/wiki/Royal_Liver_Building</a>")
            .openPopup();
    var marker = L.marker([-33.8568, 151.2153], {icon: orangeMarker}) //sydney opera house
            .addTo(map)
            .bindPopup("<img src='../images/ArchitectureTab/SydneyOperaHouse_500x500.png' alt='SydneyOperaHouse' width='100%'><br><b>Sydney Opera House</b><br>The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia.<br><a href='https://en.wikipedia.org/wiki/Sydney_Opera_House' target='_blank'>https://en.wikipedia.org/wiki/Sydney_Opera_House</a>")
            .openPopup();
    var marker = L.marker([31.2335, 121.5056], {icon: orangeMarker}) //shanghai tower
            .addTo(map)
            .bindPopup("<img src='../images/ArchitectureTab/ShanghaiTower_500x500.png' alt='Shanghai Tower' width='100%'><br><b>Shanghai Tower</b><br>The Shanghai Tower is a 128-story, 632-meter (2,073 ft)-tall megatall skyscraper in Lujiazui, Pudong, Shanghai.<br><a href='https://en.wikipedia.org/wiki/Shanghai_Tower' target='_blank'>https://en.wikipedia.org/wiki/Shanghai_Tower</a>")
            .openPopup();
	  
	boundary = new L.geoJson().addTo(map); 	


    
var architecture = L.easyButton({
    position: 'topleft',
    id: 'archIconsBtn',
    states: [{
        icon: '<i class="far fa-building"></i>',
        title: 'Iconic Architecture',
        onClick: function (control) { $('#architecture').modal('show') },
    }]
})
architecture.addTo(map);
    
var wonder = L.easyButton({
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
				const 
				{
					latitude
				} = position.coords;
				const 
				{
					longitude
				} = position.coords;
				const coords = [latitude, longitude];
              var marker = L.marker(coords).addTo(map).bindPopup(
          	"Your location", {autoClose:false}).openPopup();
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
            
						let country = json.countryName;
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
			let countries = JSON.parse(json);
			let option = "";
			var i = 0; 
			for (country of countries) {
		 
			option +=
				'<option value="' + country[0] + ' ">' + country[0] + "</option>";
        		  
			}
		$("#countries").append(option);
		},
	});
}

function move_map(country){
  $("#countries option:selected").text(country)
	$.ajax({
		url: "php/getCountryInfo.php",
		type: "GET",
		dataType: 'json',
		data: {
			country_name: country,
		},
		success: function(result) {
			console.log(result);

			if (result.status.name == "ok") {
					
				lat = (result['data'][0]['geometry']['lat']);
				lng = (result['data'][0]['geometry']['lng']); 
				code = (result['data'][0]['components']['ISO_3166-1_alpha-2']);
					
                global_country = (result['data'][0]['components']['country']);
                          
				map.panTo(new L.LatLng(lat, lng), 13);
				$('#country_info').collapse('show');
                  
				getCountryBorder();                  	
				get_country_info();
              	                getWiki();
                                getWeather();
                                getExchangeRates();
                                getCovidData();
			}			
		},			
	}); 
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

			const east = bounds.getEast();
			const west = bounds.getWest();
			const north = bounds.getNorth();
			const south = bounds.getSouth(); 
			
			getWiki();
       
		},
	});
}

// country border style
function borderStyle(feature) {
    return {
        fillColor: 'teal',
        weight: 4,
        opacity: 0.8,
        color: 'teal',  
        fillOpacity: 0.2
    };
}

function get_country_info() {

	$.ajax({
		url: "php/getInfo.php",
		type: "GET",
		data: {
			country_code: code
		},
		success: function (response) {
			let info = $.parseJSON(response);
			console.log(info);
			$(".card-header").attr("src", info.flag);
			$("#country").html(info.name);
			$("#capital").html(info.capital);
			$("#population").html(info.population);
			$("#flag").attr("src", info.flag);
			$("#currency").html(info.currencies[0]["name"]);
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
		},
	});
}

function get_events(){
	events.clearLayers();
	
	$.ajax({
		url: "getEvents.php",
		type: "GET",
		dataType: 'json',
		data: {
			country_code: code
		},
		success: function(result) {
			console.log(result);

			if (result.status.name == "ok") {
                const wiki_icon = L.ExtraMarkers.icon({
        
					icon: "fa-calendar-alt",
					markerColor: "orange",
					shape: "penta",
					iconColor: 'white',
					prefix: "far",
        
				});
                for (let i = 0; i < result['data']['venues'].length; i++) {
                    let longitude = parseInt(result['data']['venues'][i]['location']['longitude']);
                    let latitude = parseInt(result['data']['venues'][i]['location']['latitude']);
					
					var marker = L.marker([latitude, longitude], {icon:wiki_icon,}).bindPopup(
					"<strong>" + result['data']['venues'][i]['name'] + "</strong><br>" + result['data']['venues'][i]['address']['line1'] +
                    "<br>Upcoming Events: " + result['data']['venues'][i]['upcomingEvents']['_total'] + "<br>Book Tickets Here: <a href='" + 
                    result['data']['venues'][i]['url'] + "'>Ticketmaster</a>");
                     
                    events.addLayer(marker); 

				} 		
			}
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
            q: $("#q").val(),
        },
        success: function(wikiResult) {
            console.log(wikiResult);
            if (wikiResult.status.name == "ok") {
                $('#wikiSummary').html(wikiResult['data']['geonames'][0]['summary']);
                $('#wikiUrl').html(wikiResult['data']['geonames'][0]['wikipediaUrl']);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR');
            console.error(errorThrown);
        }
    }); 
}


// weather 

function getWeather() {
    $.ajax({
        url: 'php/getWeather.php',
        type: 'GET',
        dataType: 'json',
        data: {
            lat: $("#lat").val(),
            lng: $("#lng").val(),
        },
        success: function(weatherResult) {
            console.log(weatherResult);
            if (weatherResult.status.name == "ok") {
                $('#weatherMain').html(weatherResult['data']['weather'][0]['main']);
                $('#weatherDescription').html(weatherResult['data']['weather'][0]['description']);
                $('#weatherTemp').html(weatherResult['data']['main'][0]['temp']);
              	$('#weatherFeelsLike').html(weatherResult['data']['main'][0]['feels_like']);
                $('#weatherTempMin').html(weatherResult['data']['main'][0]['temp_min']);
                $('#weatherTempMax').html(weatherResult['data']['main'][0]['temp_max']);
                $('#weatherHumidity').html(weatherResult['data']['main'][0]['humidity']);
                $('#weatherPressure').html(weatherResult['data']['main'][0]['pressure']);
                $('#weatherWindSpeed').html(weatherResult['data']['wind'][0]['speed']);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
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
            country: $("#country").val(),
            startDate: $("#startDate").val(),
            endDate: $("#endDate").val(),
        },
        success: function(CovidResult) {
            console.log(CovidResult);
            if (CovidResult.status.name == "ok") {
                $('#covidConfirmed').html(covidResult['data']['Countries'][0]['TotalConfirmed']);
                $('#covidRecovered').html(covidResult['data']['Countries'][0]['TotalRecovered']);
              	$('#covidDeaths').html(covidResult['data']['Countries'][0]['TotalDeaths']);
                $('#covidNewConfirmed').html(covidResult['data']['Countries'][0]['NewConfirmed']);
                $('#covidNewRecovered').html(covidResult['data']['Countries'][0]['NewRecovered']);
                $('#covidNewDeaths').html(covidResult['data']['Countries'][0]['NewDeaths']);
                $('#covidDate').html(covidResult['data']['Countries'][0]['Date']);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR');
            console.error(errorThrown);
        }
    }); 
}

 // Exchange Rates
function getExchangeRates() {
              $.ajax({
                  url: "./php/getExchangeRate.php",
                  type: 'GET',
                  dataType: 'json',
                  success: function(result) {
                      console.log('exchange rates',result);
                      if (result.status.name == "ok") {
                      
                      exchangeRate = result.exchangeRate.rates[currencyCode];
                      $('#ExchangeRate').html('Exchange Rate: <strong>' + exchangeRate.toFixed(3) + '</strong> ' + currencyCode + ' = <strong>1</strong> USD. <br>');
                      }
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      console.log(textStatus, errorThrown);
                  }
              }); 
} 