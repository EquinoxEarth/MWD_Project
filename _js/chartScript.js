var labels = new Array();
var dataTotal = new Array();
var dataAvailDocks = new Array();
var dataAvailBikes = new Array();

// Load Data from XML //
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: loadXMLData
	});
});
function loadXMLData(xml){
	var x = 0;
	$(xml).find("stationBeanList").each(function() {
		labels[x] = $(this).find("stationName").text();
		dataTotal[x] = $(this).find("totalDocks").text();
		dataAvailDocks[x] = $(this).find("availableDocks").text();
		dataAvailBikes[x] = $(this).find("availableBikes").text();
		x++;
	});
}

// Display the Total Docks the Station has //
$(document).on("pageshow", "#totalDocks", function() {
	var pieChart = new Array();
	for (var x = 0; x < labels.length; x++) {
		pieChart[x] = {label : labels[x], value : dataTotal[x], color : 'rgb(' + Math.floor(Math.random() * 256) + ',' +Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'};
	}
	
	var cvs = document.getElementById("tDocks").getContext('2d');
	var totalChart = new Chart(cvs).Pie(pieChart);
});

// Display the Available Docks each Station has //
$(document).on("pageshow", "#availBike", function() {
	var chartData = new Array();
	var dataSets = [
		{
			strokeColor : "rgba(255, 0, 0, 1)",
			fillColor : "rgba(220, 0, 0, 0.5)",
			data : dataTotal
		},
		{
			strokeColor : "rgba(0, 255, 0, 1)",
			fillColor : "rgba(0, 220, 0, 0.5)",
			data : dataAvailDocks
		},
		{
			strokeColor : "rgba(0, 0, 255, 1)",
			fillColor : "rgba(0, 0, 220, 0.5)",
			data : dataAvailBikes
		}
	]
	
	chartData = {
		labels : labels,
		datasets : dataSets
	}
	
	var cvs = document.getElementById("aDocks").getContext('2d');
	var allChart = new Chart(cvs).Bar(chartData);
});