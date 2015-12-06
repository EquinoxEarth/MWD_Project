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
	$("#listAllXML").html("");
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

// DYNAMIC LIST
$(document).on("pagebeforeshow", "#dynamicList", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayColl
	});
});
function displayColl(xml){
	$("#dynListXML").html("");
	$(xml).find("stationBeanList").each(function(){
		$("#dynListXML").append(
			"<section data-role='collapsible'>" +
				"<h1 class='ui-btn'><span>" + $(this).find("stationName").text() + "</span></h1>" +
				"<div class='ui-grid-a>" +
					"<div class='ui-block-a'>" +
						"<br /><table class='dynTable'>" +
							"<tr><th>ID: </th><td>" + $(this).find("id").text() + "</td></tr>" +
							"<tr><th>CITY: </th><td>" + $(this).find("stationName").attr("city") + "</td></tr>" +
							"<tr><th>OPEN DOCKS: </th><td>" + $(this).find("availableDocks").text() + "</td></tr>" +
							"<tr><th>TOTAL DOCKS: </th><td>" + $(this).find("totalDocks").text() + "</td></tr>" +
							"<tr><th>LATITUDE: </th><td>" + $(this).find("latitude").text() + "</td></tr>" +
							"<tr><th>LONGITUDE: </th><td>" + $(this).find("longitude").text() + "</td></tr>" +
							"<tr><th>STATUS VALUE:&nbsp;&nbsp;</th><td>" + $(this).find("statusValue").text() + "</td></tr>" +
							"<tr><th>STATUS KEY: </th><td>" + $(this).find("statusKey").text() + "</td></tr>" +
							"<tr><th>OPEN BIKES: </th><td>" + $(this).find("availableBikes").text() + "</td></tr>" +
						"</table>" +
					"</div>" +
					"<div class='ui-block-b>" +
						"<p><img src='_images/" + $(this).find("stationImg").text() + "' width='200'></p>" +
					"</div>" +
				"</div>" +
			"</section>"
		);
	});
	

	$(document).on("pagebeforeshow", "#stationMap", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayMap
	});
});
	function displayMap(xml){
		$('#Smap').append("<script type="text/javascript" src='http://maps.google.com/maps/api/js?v=3&sensor=false&language=en'");
	}

	$("#dynListXML").collapsibleset("refresh");
}