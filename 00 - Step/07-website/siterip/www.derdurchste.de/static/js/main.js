(function ($) {
	//JQuery 3 version
	$.fn.autoScroll = function (activate) {
		if ($.isNumeric(activate) || activate == true) {
			var offset = 0
			if ($.isNumeric(activate)) {
				offset = activate
			}

			$(this).find(" a[href^='#']").on("click", function (event) {
				normalscroll = true;
				event.preventDefault();
				var place = $($(this).attr('href'))

				if (!(place && place.offset() && $.isNumeric(place.offset().top))) {
					return
				}
				$('html,body').clearQueue()
				$('html,body').stop()
				if (activate == true) {
					offset = $(window).height() / 2 - place.parent("div").height() / 2
				}

				$('html,body').animate({
						scrollTop: place.offset().top - offset //auf Nullinie Scrollen
					}, 1000,
					function () {
						setTimeout(function () {
							normalscroll = false
						}, 500);
					}
				);
			})
		}
	};
})(jQuery);

(function ($) {

	$.fn.shuffle = function () {

		var allElems = this.get(),
			getRandom = function (max) {
				return Math.floor(Math.random() * max);
			},
			shuffled = $.map(allElems, function () {
				var random = getRandom(allElems.length),
					randEl = $(allElems[random]).clone(true)[0];
				allElems.splice(random, 1);
				return randEl;
			});

		this.each(function (i) {
			$(this).replaceWith($(shuffled[i]));
		});

		return $(shuffled);

	};

})(jQuery);


$(document).ready(function () {


	$("html").autoScroll(60);

	$(".js_random li").shuffle();
	$(".js_random_umfrage li").shuffle();
	$(".js_random_tschau li").shuffle();

	// Burger Toggle
	$(".burger").click(function () {
		$('.burger').toggleClass("is-active");
	});

	// Burger Menu Mobile

	$('.js_openumfrage').click(function () {
		$('#umfrage').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");
	});

	$('.js_openzahl').click(function () {
		$('#zahl').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");
	});

	$('.js_openblitz').click(function () {
		$('#blitz').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");

	});

	$('.js_openliste').click(function () {
		$('#liste').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");

	});

	$('.js_opentschau').click(function () {
		$('#tschau').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");

	});

	$('.js-umfrage').click(function () {
		$('#test').toggleClass("open");
	});

	$('.js-umfrage-sr').click(function () {
		$('#test02').toggleClass("open");
	});

	$('.js_openmerch').click(function () {
		$('#merch').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");

	});

	$('.js_openimpressum').click(function () {
		$('#impressum').toggleClass("is-active");
		$('body').toggleClass("is-article-visible");

	});


	// Hover Smartphone
	$('a.taphover').on("touchstart", function (e) {
		"use strict"; //satisfy the code inspectors
		var link = $(this); //preselect the link
		if (link.hasClass('hover')) {
			return true;
		} else {
			link.addClass("hover");
			$('a.taphover').not(this).removeClass("hover");
			e.preventDefault();
			return false; //extra, and to make sure the function has consistent return points
		}
	});

});

// ######################### COOKIES !!! ################################
function setCookie(key, value) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)) //30 Tage
	document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ";path=/";
}

function getCookie(key) {
	var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
	return keyValue ? keyValue[2] : null;
}

$(document).ready(function () {
	if (!getCookie("cookies-allowed")) {
		$(".cookie-info").addClass("is-active")
	}
	$(".cookie-info .js-cookieaction").on("click", function () {
		setCookie("cookies-allowed", "yes")
		$(".cookie-info").removeClass("is-active")
	})
});
// ##########


// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
//
//     //smoothscroll
//     $('.menu a').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
//       console.log('click');
//
//         $('.menu a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
//
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });
//
// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('.menu a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.menu a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }