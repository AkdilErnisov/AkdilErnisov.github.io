/* placeholder */
function placeholder(objInputs){
	if (objInputs.length) objInputs.placeholder();
}
// mobile menu init
function initMobileNav() {
	jQuery('.nav').mobileNav({
		hideOnClickOutside: true,
		menuActiveClass: 'nav__active',
		menuOpener: '.nav__opener',
		menuDrop: '.nav'
	});
	jQuery('.live').mobileNav({
		hideOnClickOutside: true,
		menuActiveClass: 'live__active',
		menuOpener: '.live__link',
		menuDrop: '.live'
	});
}
function selectLang(){
	if($('.js-lang-btn').length){		
		$('body').on('click', function(e){
			if ($(e.target).closest('.js-lang-btn').length !== 0) {
				$('.js-lang-list').toggleClass('open');	           
	        }else if ($(e.target).closest('.js-lang-btn').length === 0){  
	            $('.js-lang-list').removeClass('open');	            
	        }
		})
	}
}

$(document).on('ready', function() {
    initMobileNav();
    //IE9
	placeholder($('input[placeholder], textarea[placeholder]'));
	selectLang();
});