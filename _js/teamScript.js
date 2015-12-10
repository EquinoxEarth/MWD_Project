$(document).on("pagebeforeshow", "#teamPage", function() {
	$.getJSON("team.json", function(data) {
		// Set up Start of Loop //
		var start = data.team.member;
		
		// Clear the List //
		$("#teamList").html("");
		
		// Loop through Members //
		for (var x = 0; x < start.length; x++) {
			// Check if First Record //
			if (x === 0) {
				// Print List Top Heading //
				$("#teamList").append(
					"<li data-role=\"list-divider\" role=\"heading\" id=\"ph0\" class=\"ui-li-divider ui-bar-inherit ui-first-child\">" +
						start[x].fullName +
					"</li>"
				);
			} else {
				// Print List Regular Heading //
				$("#teamList").append(
					"<li data-role='list-divider' role='heading' class='ui-divider ui-bar-inherit'>" +
						start[x].fullName +
					"</li>"
				);
			}
			
			// Print Table with Fields //
			$("#teamList").append(
				"<div class='ui-grid-a' style='background:grey;'>" +
					"<div class='ui-block-a'><table>" +
							"<tr><th>LOGIN:</th><td>" + start[x].slateLogin + "</td></tr>" +
							"<tr><th>ID:</th><td>" + start[x].studentNumber + "</td></tr>" +
					"</table></div>" +
					"<div class='ui-block-b'>" +
						"<image width='150' height='150' src='_images/" + start[x].studentPicture + "'></image>" +
					"</div>" +
				"</div>"
			);
		}
	});
});