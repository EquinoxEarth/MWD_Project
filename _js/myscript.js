// LIST ALL STATIONS
$(document).on("pagebeforeshow", "#listAll", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayAll
	});
});

function displayAll(xml) {
	$(xml).find("stationBeanList").each(function(){
		$("#listAllXML").append(
			"<div style='float:left; width:33%;'>" +
			"<h1 class='center'>" + $(this).find("stationName").text() + "</h1>" +
			"<table class='center' style='text-align:left;'>" +
				"<tr><th>ID:</th><td>" + $(this).find("id").text() + "</td></tr>" +
				"<tr><th>CITY: </th><td>" + $(this).find("stationName").attr("city") + "</td></tr>" +
				"<tr><th>OPEN DOCKS: </th><td>" + $(this).find("availableDocks").text() + "</td></tr>" +
				"<tr><th>TOTAL DOCKS: </th><td>" + $(this).find("totalDocks").text() + "</td></tr>" +
				"<tr><th>LATITUDE: </th><td>" + $(this).find("latitude").text() + "</td></tr>" +
				"<tr><th>LONGITUDE: </th><td>" + $(this).find("longitude").text() + "</td></tr>" +
				"<tr><th>STATUS VALUE:&nbsp;&nbsp;</th><td>" + $(this).find("statusValue").text() + "</td></tr>" +
				"<tr><th>STATUS KEY: </th><td>" + $(this).find("statusKey").text() + "</td></tr>" +
				"<tr><th>OPEN BIKES: </th><td>" + $(this).find("availableBikes").text() + "</td></tr>" +
			"</table><br>" +
			"</div>"
		);
	});
}