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
	

	

	$("#dynListXML").collapsibleset("refresh");
}
var home = new google.maps.LatLng(32, 32);

$(document).on("pagebeforeshow", "#stationMap", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayMap
	});
});

function displayMap(xml){
	$('#sMap').html("");
	$('#sMap').css({"height": "200px", "wdith": "200px", "background-color": "Lime"});
	var mapOptions = {
		center: home,
		zoom: 16
	};
	var map = new google.maps.Map(document.getElementById("sMap"), mapOptions);
}
$(document).on("pagebeforeshow", "#totalDock", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayDocks
	});
});
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
	function displayDocks(xml){
	$('#tDocks').html("");	
	$('#tDocks').append('<canvas id="myCanvas" width="200" height="100"></canvas>');
	var ctx = $("#myCanvas").get(0).getContext("2d");
	var myNewChart = new Chart(ctx).Line(data);
}
