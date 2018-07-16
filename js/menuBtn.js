function delay (URL, time) {
    setTimeout( function() { window.location = URL }, time );
}
(function() {
	var menuBtn = $('a.hamburger'),
	menuBtnBlock = menuBtn.find('div.hamburger-block'),
	menu = $('.main-nav'),
	menuEl = $('.menu-btn');
	menuBtn.on('click', function() {
		menuBtnBlock.toggleClass('active');
		menu.slideToggle(500, function(){});
	});
	menuEl.on('click', function(){
		menuBtnBlock.toggleClass('active');
		menu.slideToggle(500, function(){});
	});
})();