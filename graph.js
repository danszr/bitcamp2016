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
		
		loadJSON("crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			createData(query);
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
		
		loadJSON("crimeData.json", function(response){
				jsonData = JSON.parse(response);
			});
		$("#myForm").submit(function(event) {
			var query = $("#query").val();
			createData(query);
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