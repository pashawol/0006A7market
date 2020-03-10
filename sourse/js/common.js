const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".top-line__mobile-hidden"),
	body: document.querySelector("body"),

	modalCall() {

		$(".link-modal").fancybox({
			closeExisting: true,
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function (e) {
			e.preventDefault();
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();

	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	var Sticky = new hcSticky('.top-line', {
		stickTo: 'body'
	});
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/card.jpg);"></div>')
	// /добавляет подложку для pixel perfect

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});


	const swiper5 = new Swiper('.slider-main-js', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		pagination: {
			el: '.swiper-pagination-lg',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next-lg',
			prevEl: '.swiper-button-prev-lg',
		},
		breakpoints: {
			// when window width is >= 320px
			576: {
				slidesPerView: 2,
			},
			// when window width is >= 480px
			992: {
				slidesPerView: 3,
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 4,

			}
		}
	});
	// slider
	$(".slider-wrap").each(function () {
		let sliderDef = {

			slidesPerView: 1,
			spaceBetween: 0,
			by: 'container',
			loop: true,
			lazy: {
				loadPrevNext: true,
			},
			pagination: {
				el: $(this).children('.swiper-pagination'),
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: $(this).children('.swiper-button-next'),
				prevEl: $(this).children('.swiper-button-prev'),
			},
		}
		const swiper4 = new Swiper($(this).children('.slider-js'), {
			...sliderDef
		});
		const swipermain4 = new Swiper($(this).children('.slider-lg-js'), {
			...sliderDef,
			autoplay: {
				delay: 5000,
			},

		});


		const swiper7 = new Swiper($(this).children('.slider-prod-js'), {
			...sliderDef,
			effect: 'fade',
			speed: 1,
		});
		$(this).find('.swiper-pagination-hover').on('mouseenter', '.swiper-pagination-bullet', function () {
			$(this).click();
		})
	})

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		// some code..$()
		$(".prod-item .slider-wrap").addClass('disabled');
	}
	else {
		$(".prod-item .slider-wrap").removeClass('disabled');

	}


	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true,
	});

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)
	}

	$(".s-filter__toggle").click(function () {
		$(this).toggleClass('active');
		$(".s-filter__hidden-block--js").slideToggle(function () {
			$(this).toggleClass('active');
		})
	})
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}