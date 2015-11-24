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
	$("#listAllXML").append(
		"<table>" +
			"<tr>" +
				"<th>ID</th>" +
				"<th>Name</th>" +
				"<th>City</th>" +
				"<th>Available Docks</th>" +
				"<th>Total Docks</th>" +
				"<th>Latitude</th>" +
				"<th>Longitude</th>" +
				"<th>Status Value</th>" +
				"<th>Status Key</th>" +
				"<th>Available Bikes</th>" +
			"</tr>"
	);
	$(xml).find("stationBeanList").each(function(){
		$("#listAllXML").append(
			"<tr>" +
				"<td>" + $(this).find("id").text() + "</td>" +
				"<td>" + $(this).find("stationName").text() + "</td>" +
				"<td>" + $(this).find("stationName").attr("city") + "</td>" +
				"<td>" + $(this).find("availableDocks").text() + "</td>" +
				"<td>" + $(this).find("totalDocks").text() + "</td>" +
				"<td>" + $(this).find("latitude").text() + "</td>" +
				"<td>" + $(this).find("longitude").text() + "</td>" +
				"<td>" + $(this).find("statusValue").text() + "</td>" +
				"<td>" + $(this).find("statusKey").text() + "</td>" +
				"<td>" + $(this).find("availableBikes").text() + "</td>" +
			"</tr>"
		);
	});
	$("#listAllXML").append(
		"</table>"
	);
}