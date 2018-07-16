(function() {
	var menuBtn = $('a.hamburger'),
	menuBtnBlock = menuBtn.find('div.hamburger-block'),
	menu = $('.main-nav');
	menuBtn.on('click', function() {
		menuBtnBlock.toggleClass('active');
		menu.slideToggle(500, function(){});
	});
})();