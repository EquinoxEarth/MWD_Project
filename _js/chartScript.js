var labels = new Array();
var dataTotal = new Array();
var dataAvail = new Array();

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
		dataAvail[x] = $(this).find("availableBikes").text();
	});
	x++;
}

// Display the Total Docks the Station has //
$(document).on("pageshow", "#totalDocks", function() {
	
});