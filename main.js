$(document).ready(function() {
	$(".sidebar-dropdown > a").click(function() {
		$(".sidebar-submenu").slideUp(200);
		if (
			$(this)
			.parent()
			.hasClass("open")
			) {
			$(".sidebar-dropdown").removeClass("open");
		$(this)
		.parent()
		.removeClass("open");
	} else {
		$(".sidebar-dropdown").removeClass("open");
		$(this)
		.next(".sidebar-submenu")
		.slideDown(200);
		$(this)
		.parent()
		.addClass("open");
	}
});

	$("#close-sidebar").click(function() {
		$(".page-wrapper").removeClass("toggled");
	});
	$("#show-sidebar").click(function() {
		$(".page-wrapper").addClass("toggled");
	});

});


