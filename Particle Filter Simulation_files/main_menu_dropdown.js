// this variable keeps track of whether or not the dropdown menu is currently
//	displayed:
var mainMenuLinksShown = false;

$(function() {
	$(".dropdown_menu").hover(showMainMenuDropdown, hideMainMenuDropdown);
});

// toggle the dropdown menu (show if hidden, hide if shown). This is used when
//	user clicks on the links (networks) button, to make it click-interactive.
function toggleMainMenuDropdown(){
	if(mainMenuLinksShown)
		hideMainMenuDropdown();
	else
		showMainMenuDropdown();
}

// shows the main menu dropdown list (if not already shown)
function showMainMenuDropdown(){
	document.getElementById("links_dropdown_list").style.visibility = "visible";
	document.getElementById("links_dropdown_images").style.visibility = "visible";
	//$("#links_dropdown a").addClass("selected");
	mainMenuLinksShown = true;
}

// hides the main menu dropdown list (if not already hidden)
function hideMainMenuDropdown(e){
	document.getElementById("links_dropdown_list").style.visibility = "hidden";
	document.getElementById("links_dropdown_images").style.visibility = "hidden";
	//$("#links_dropdown a").removeClass("selected");
	mainMenuLinksShown = false;
}