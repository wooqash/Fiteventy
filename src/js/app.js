(function(){
	$(window).on('resize', function(){
		var maxHHeight = 0,
			maxCHeight = 0,
			header = $('.do-wrap > h4'),
			content = $('.do-wrap > p');

		$(header).each(function(index){
			$(this).height('auto');
			var headerHeight = $(this).outerHeight(true);
			if(headerHeight > maxHHeight){
				maxHHeight = headerHeight;
			}
		});

		$(header).height(maxHHeight);
		$(content).each(function(index){
			$(this).height('auto');
			var boxHeight = $(this).outerHeight(true);
			if(boxHeight > maxCHeight){
				maxCHeight = boxHeight;
			}
		});
		$(content).height(maxCHeight);
	}).trigger('resize');
})();