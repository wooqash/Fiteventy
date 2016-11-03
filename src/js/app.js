(function(){
    var startYear = 2016,
        actualYear = new Date().getFullYear(),
        copyrightYear = actualYear > startYear ? startYear + ' - ' + actualYear : actualYear;

    $('.year').text(copyrightYear);

    $(window).on('resize', function(){
        var maxHHeight = 0,
            maxCHeight = 0,
            header = $('.do-wrap > h4'),
            content = $('.do-wrap > p'),
            numbCountersH = $('.number-counters').height('auto').height();
            
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


        $('.number-counters').height(numbCountersH);
    }).trigger('resize');

    $('.navbar-toggle').on('touchend', function(){
        if($(this).hasClass('collapsed')){
            $('#navigation').addClass('open');
        }
        else{
            $('#navigation').removeClass('open');
        }    
    });
})();