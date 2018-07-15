(function() {
	var menuBtn = $('a.hamburger'),
	menuBtnBlock = menuBtn.find('div.hamburger-block');  
	menuBtn.on('click', function() {
		menuBtnBlock.toggleClass('active');
	});
})();