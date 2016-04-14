	function graphMonths(){
		var defaultData = {
		labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0,0]
				}
			]
		};
		var jsonData = null;
		var ctx = document.getElementById("myChartMonths").getContext("2d");
		var myBarChart = new Chart(ctx).Bar(defaultData);
		
		loadJSON("https://terpconnect.umd.edu/~armank/Projects/crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			createData(query);
			$("#monthText").remove();
			$("#months").prepend('<p id="monthText">Arrests involving ' + query +' graphed monthly</p>');
			event.preventDefault();
		});

		function createData(query) {
			var monthValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for(var i = 0; i < jsonData.length; i++) {
					if((jsonData[i]["DESCRIPTION"]).toString().toLowerCase().includes(query.toLowerCase())){
						monthValues[parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(0,2))-1]++;
					}
			}
			var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				datasets: [
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.5)",
						strokeColor: "rgba(151,187,205,0.8)",
						highlightFill: "rgba(151,187,205,0.75)",
						highlightStroke: "rgba(151,187,205,1)",
						data: monthValues
					}
				]
			};
			for(var i = 0; i < 12; i++){
				myBarChart.datasets[0].bars[i].value = monthValues[i];
			}
			myBarChart.update();
		}
		function loadJSON(file, callback){
			var jsonRequest = new XMLHttpRequest();
			jsonRequest.overrideMimeType("application/json");
			jsonRequest.open('GET', file, true);
			jsonRequest.onreadystatechange = function(){
				if(jsonRequest.readyState == 4 && jsonRequest.status == "200"){
					callback(jsonRequest.responseText);
				}
			};
			jsonRequest.send(null);
		}
	}
		
	function graphHours(){
		var defaultData = {
		labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
			datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				}
			]
		};
		var jsonData = null;
		var ctx = document.getElementById("myChartHours").getContext("2d");
		var myBarChart = new Chart(ctx).Bar(defaultData);
		
		loadJSON("https://terpconnect.umd.edu/~armank/Projects/crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			createData(query);
			$("#hourText").remove();
			$("#hours").prepend('<p id="hourText">Arrests involving ' + query +' graphed hourly</p>');
			event.preventDefault();
		});

		function createData(query) {
			var hourValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for(var i = 0; i < jsonData.length; i++) {
					if((jsonData[i]["DESCRIPTION"]).toString().toLowerCase().includes(query.toLowerCase())){
						hourValues[parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(9,11))]++;
					}
			}
			var defaultData = {
			labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
				datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: hourValues
				}
			]
		};
			for(var i = 0; i < 24; i++){
				myBarChart.datasets[0].bars[i].value = hourValues[i];
			}
			myBarChart.update();
		}
		function loadJSON(file, callback){
			var jsonRequest = new XMLHttpRequest();
			jsonRequest.overrideMimeType("application/json");
			jsonRequest.open('GET', file, true);
			jsonRequest.onreadystatechange = function(){
				if(jsonRequest.readyState == 4 && jsonRequest.status == "200"){
					callback(jsonRequest.responseText);
				}
			};
			jsonRequest.send(null);
		}
	}
	function graphDays(){
		var defaultData = {
		labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: [0,0,0,0,0,0,0]
				}
			]
		};
		var jsonData = null;
		var ctx = document.getElementById("myChartDays").getContext("2d");
		var myBarChart = new Chart(ctx).Bar(defaultData);
		
		loadJSON("https://terpconnect.umd.edu/~armank/Projects/crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			createData(query);
			$("#dayText").remove();
			$("#days").prepend('<p id="dayText">Arrests involving ' + query +' graphed by day</p>');
			event.preventDefault();
		});

		function createData(query) {
			var dayValues = [0, 0, 0, 0, 0, 0, 0];
			for(var i = 0; i < jsonData.length; i++) {

					if((jsonData[i]["DESCRIPTION"]).toString().toLowerCase().includes(query.toLowerCase())){
						var month = parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(0,2));
						var date = parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(3,5));
						var year = parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(6,8));
						var dayOfWeek= calcDay(month, date, 2000+year);
						dayValues[dayOfWeek]++;
					}
			}
			var defaultData = {
					labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

				datasets: [
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: dayValues
				}
			]
		};
			for(var i = 0; i < 7; i++){
				myBarChart.datasets[0].bars[i].value = dayValues[i];
			}
			myBarChart.update();
		}
		function loadJSON(file, callback){
			var jsonRequest = new XMLHttpRequest();
			jsonRequest.overrideMimeType("application/json");
			jsonRequest.open('GET', file, true);
			jsonRequest.onreadystatechange = function(){
				if(jsonRequest.readyState == 4 && jsonRequest.status == "200"){
					callback(jsonRequest.responseText);
				}
			};
			jsonRequest.send(null);
		}
	}
	
	function writeLatest(){
		var jsonData = null;
		
		loadJSON("https://terpconnect.umd.edu/~armank/Projects/crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			writeData(query);
			event.preventDefault();
		});

		function writeData(query) {
			var latestArrestIndex = 0;
			for(var i = 0; i < jsonData.length; i++) {
				if((jsonData[i]["DESCRIPTION"]).toString().toLowerCase().includes(query.toLowerCase())){
					if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(6,8)) > parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(6,8))){
						latestArrestIndex = i;
					}else if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(6,8)) == parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(6,8))){
						if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(0,2)) > parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(0,2))){
							latestArrestIndex = i;
						}else if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(0,2)) == parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(0,2))){
							if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(3,5)) > parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(3,5))){
								latestArrestIndex = i;
							}else if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(3,5)) == parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(3,5))){
								if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(9,11)) > parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(9,11))){
									latestArrestIndex = i;
								}else if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(9,11)) == parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(9,11))){
									if(parseInt(jsonData[i]["ARRESTED DATE TIME CHARGE"].substring(12,14)) > parseInt(jsonData[latestArrestIndex]["ARRESTED DATE TIME CHARGE"].substring(12,14))){
										latestArrestIndex = i;
									}
								}
							}
						}
					}
				}
			}
			$("#latestText").remove();
			$("#latest").prepend('<p id="latestText">This is the latest arrest for ' + query + ': <br>'+ 
			'Arrest Number: ' + jsonData[latestArrestIndex]['ARREST NUMBER'] + '<br>'+ 
			'Arrest Date/Time: ' + jsonData[latestArrestIndex]['ARRESTED DATE TIME CHARGE'] + '<br>'+ 
			'UMPD Case Number: ' + jsonData[latestArrestIndex]['UMPD CASE NUMBER'] + '<br>'+ 
			'Age: ' + jsonData[latestArrestIndex]['AGE'] + '<br>'+ 
			'Race: ' + jsonData[latestArrestIndex]['RACE'] + '<br>'+ 
			'Sex: ' + jsonData[latestArrestIndex]['SEX'] + '<br>'+ 
			'Description: ' + jsonData[latestArrestIndex]['DESCRIPTION'] + '</p>');
		}
			
		function loadJSON(file, callback){
			var jsonRequest = new XMLHttpRequest();
			jsonRequest.overrideMimeType("application/json");
			jsonRequest.open('GET', file, true);
			jsonRequest.onreadystatechange = function(){
				if(jsonRequest.readyState == 4 && jsonRequest.status == "200"){
					callback(jsonRequest.responseText);
				}
			};
			jsonRequest.send(null);
		}
	}
	function calcDay(month, day, year){
		var k = day;
		var m;
		if((month - 2) % 12 < 0)
			m = (month - 2) % 12 + 12;
		else
			m = (month - 2) % 12;
		var y = year;
		if(m == 11 || m == 12){
			y = --year;
		}
		var d = y - 2000;
		var c = 20;
		var f = k + Math.floor((13*m-1)/5) + d + Math.floor(d/4) + Math.floor(c/4) - 2*c;
		if(f < 0)
			return f%7+7;
		else
			return f%7;
	}