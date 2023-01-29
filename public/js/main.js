//---------------------画面遷移---------------------

$(function () {
	// サイトアクセス時に非表示にしてから、フェードインさせる
	$("body").hide();
	$("body").fadeIn(1000);

	//---------------------マウスオーバー設定---------------------

	$(document).ready(function () {
		$("#bnr img").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
		$("#contmenu a").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
		$("#stay ul.roomlist li a").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
		$("ul#contmenutop a img").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
		$("ul#onehmenu li a img").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
		$(".item a img").hover(
			function () {
				$(this).stop().animate({ opacity: "0.6" }, 300);
			},
			function () {
				$(this).stop().animate({ opacity: "1" }, 300);
			}
		);
	});
	//---------------------スムーススクロール---------------------

	var $btn = $(".btn_pagetop");
	$btn.click(function (event) {
		event.preventDefault();
		var link = this;
		$.smoothScroll({
			scrollTarget: link.hash,
		});
	});

	var isHidden = true;

	// デフォルトは非表示
	$btn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (isHidden) {
				$btn.stop(true, true).fadeIn();
				isHidden = false;
			}
		} else {
			if (!isHidden) {
				$btn.stop(true, true).fadeOut();
				isHidden = true;
			}
		}
	});

	$(".anchorlink").click(function (event) {
		event.preventDefault();
		var link = this;
		$.smoothScroll({
			scrollTarget: link.hash,
		});
	});
});

$(window).on("load", function () {
	if (typeof $.flexslider !== "undefined") {
		$(".flexslider").flexslider({
			animation: "fade",
			animationSpeed: 2000,
			pauseOnHover: false,
			controlNav: true,
			directionNav: false,
			start: function (slider) {},
		});
	}
});

function mycarousel_initCallback(carousel) {
	// Disable autoscrolling if the user clicks the prev or next button.
	carousel.buttonNext.bind("click", function () {
		carousel.startAuto(0);
	});

	carousel.buttonPrev.bind("click", function () {
		carousel.startAuto(0);
	});

	// Pause autoscrolling if the user moves with the cursor over the clip.
	carousel.clip.hover(
		function () {
			carousel.stopAuto();
		},
		function () {
			carousel.startAuto();
		}
	);
}

// Googleカスタム検索
(function () {
	var cx = "014912161878073967151:h9f_m_fdx7k";
	var gcse = document.createElement("script");
	gcse.type = "text/javascript";
	gcse.async = true;
	gcse.src =
		(document.location.protocol == "https:" ? "https:" : "http:") +
		"//cse.google.com/cse.js?cx=" +
		cx;
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(gcse, s);
})();

// 全て選択処理

$(function () {
	all_select_area();
	all_select_keyword();

	$(".all_select").on("click", function () {
		if ($(this).is(":checked")) {
			$(this).parents("ul").find("input").prop("checked", true);
		} else {
			$(this).parents("ul").find("input").prop("checked", false);
		}
	});

	$(".area_research input").on("click", function () {
		all_select_area();
	});
	$(".keyword_research input").on("click", function () {
		all_select_keyword();
	});

	function all_select_area() {
		if ($('input[name="area[]"]:not(:checked)').length == 0) {
			$("input[name=all_select_area]").prop("checked", true);
		} else {
			$("input[name=all_select_area]").prop("checked", false);
		}
	}

	function all_select_keyword() {
		if ($('input[name="keyword[]"]:not(:checked)').length == 0) {
			$("input[name=all_select_keyword]").prop("checked", true);
		} else {
			$("input[name=all_select_keyword]").prop("checked", false);
		}
	}
});
