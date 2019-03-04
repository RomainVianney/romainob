var weather="";

function getWeather(){
	jQuery(document).ready(function($) {
	var city = document.getElementById('city').value;
	var path_1='https://api.openweathermap.org/data/2.5/weather?q=';
	var path_2 ='&units=imperial&APPID=d48e58e95e9480995daf0a158d753853';//in Fahrenheit
	var apiUrl = path_1+city+path_2;
	var cityName;
	var state;
	var temperature;
    var weatherResult = $('#result');
	var stateResult = $('#animation');
      $.ajax({
        url: apiUrl,
        dataType: 'json',
        success: function (data) {
		  cityName=JSON.stringify(data.name);
		  state = JSON.stringify(data.weather[0].main);
		  state=state.substring(1,state.length-1);
		  cityName=cityName.substring(1,cityName.length-1);
          temperature = JSON.stringify(data.main.temp);
          weather=Math.round(temperature);
          weatherResult.html(cityName+" weather: "+weather+"°F");
		  if(state=="Clouds" || state=="Clear"){
		  $("#animation").attr("class","cloudy");
		  }
		  else if(state=="Rain"){
		  $("#animation").attr("class","rainy");
		  }
		  else if(state=="Sunny"){
		  $("#animation").attr("class","sunny");
		  }
		  else if(state=="Snow"){
		  $("#animation").attr("class","snowy");
		  }
		  else{
		 $("#animation").attr("class","");
		 stateResult.html("Condition: "+state);
		  }
		  
        }
      });
    }); 
 }
 function getHelp(){
	 var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
 }

 

 
 
 
