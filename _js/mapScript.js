var home = new google.maps.LatLng(43, -79);
	
$(document).on("pageshow", "#stationMap", function(){
	$.ajax({
		type: "GET",
		url: "projectXML06.xml",
		dataType: "xml",
		success: displayMap
	});
});

function displayMap(xml){
	var x = 0;
	var y = 0;
	var xCount = 0;
	var yCount = 0;
	$(xml).find("stationBeanList").each(function(){
		x += parseFloat($(this).find("latitude").text());
		y += parseFloat($(this).find("longitude").text());
		xCount += 1;
		yCount += 1;
	});
	home = new google.maps.LatLng(x / xCount, y / yCount);
	$('#sMap').html("");
	$('#sMap').css({"height": "400px", "wdith": "200px", "background-color": "Lime"});
	var mapOptions = {
		center: home,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("sMap"), mapOptions);
	$(xml).find("stationBeanList").each(function(){
		var loc = new google.maps.Marker ({
			map : map,
			animation : google.maps.Animation.DROP,
			position : new google.maps.LatLng(parseFloat($(this).find("latitude").text()), parseFloat($(this).find("longitude").text()))
		});
	});
	
}