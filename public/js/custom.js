$(function () {
	var modalBtn = $(".js-modal__btn");
	var modalBtnClose = $(".js-modal__btn--close");
	var modalBg = $(".js-modal__bg");
	var modalMain = $(".js-modal__main");

	modalBtn.on("click", function (e) {
		$(this).next(modalBg).fadeToggle();
	});

	modalBtnClose.on("click", function (e) {
		modalBg.fadeOut();
	});

	modalMain.on("click", function (e) {
		e.stopPropagation();
	});

	modalBg.on("click", function () {
		$(this).fadeOut();
	});
});

$(document).ready(function () {
	//sidemenu
	$("#simpleSidebar")
		.fadeIn(1000)
		.simpleSidebar({
			opener: "#sideOpen",
			/*wrapper: '',*/
			animation: {
				easing: "easeOutQuint",
			},
			sidebar: {
				align: "left",
				width: 260,
				closingLinks: "#sideClose",
			},
			sbWrapper: {
				display: true,
			},
		});

	//top fixed
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 40) {
			$("#header").addClass("fixed"); //#globalNav #mainNav
		} else {
			$("#header").removeClass("fixed"); //#globalNav #mainNav
		}
	});
});
