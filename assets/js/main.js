/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// $(document).ready(function() {
//
// 	$("#form").hide();
//

//
// };
var isFF = !!navigator.userAgent.match(/firefox/i);

Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('click', function(e) {
    e.preventDefault();
  });
});


initBt8();

function initBt8() {
  var bt = document.querySelectorAll('#component-8')[0];
	var bt2 = document.querySelectorAll('#component-9')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];

  bt.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
	// bt2.addEventListener('click', function(e) {
  //   TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
  //   TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
  //   TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  // });
}


(function($) {

$("#form").hide();
$("#btn-billett").hide();

$("#billett").click(function(){
	$("#form").toggle()
	$("#btn-billett").toggle();
});

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);
