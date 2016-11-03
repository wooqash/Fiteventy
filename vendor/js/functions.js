function close_pop() {
    $('.backdrop, .box').animate({
        'opacity': '0'
    }, 300, 'linear', function () {
        $('.cookies').css('display', 'none');
    });

    setCookie('hide', true, 365);
    return false;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

jQuery.ready(function(){

});


jQuery(function($) {'use strict';


		  
	  //Window Loaded Handler

  $(window).load(function(){
		 $(".loader").fadeOut("slow");
		 
  });
	 
	if (!getCookie('hide')) {
	    window.setTimeout(function () {
	        $('.cookies').show();
	        $('.cookies').ready(function () {
	            $('.backdrop, .box').animate({
	                'opacity': '.50'
	            }, 300, 'linear');
	            $('.box').animate({
	                'opacity': '1.00'
	            }, 300, 'linear');
	            $('.backdrop, .box').css('display', 'block');
	        });

	        $('.close-btn').click(function () {
	            close_pop();
	        });

	        // $('.backdrop').click(function () {
	        //     close_pop();
	        // });
	        //change 1000 to 20000 for 20 seconds
	    }, 1000);
	}
	else{
		$('.cookies').hide();
	}
   	
	 
  
  // ========================================================================= 
	//	Back to Top
	// ========================================================================= 
	 
	if ($('.go-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
  
  
//Contact Us
  $("#btn_submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(),
       		user_email      = $('input[name=email]').val(),
			user_message    = $('textarea[name=message]').val(),
        	proceed = true,//simple validation at client's end
        	output = '';

        if(user_name===""){ 
            proceed = false;
        }
        if(user_email===""){ 
            proceed = false;
        }
		if(user_message==="") {  
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            var post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('/php/contact_me.php', post_data, function(response){  

                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="alert-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('.form-inline input').val(''); 
					$('.form-inline textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
        }
        else{
        	var output = '<div class="alert-danger">Aby wysłać do nas wiadomość wypełnij wszystkie pola formularza!</div>';
        	$("#result").hide().html(output).slideDown();
        }

    });
    
    //reset previously set border colors and hide all message on .keyup()
    $(".form-inline input, .form-inline textarea").keyup(function() { 
        $("#result").slideUp();
    });
    

 //Slider Main
  jQuery('.fullscreenbanner').revolution({
			delay:15000,
			startwidth:1170,
			startheight:500,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			shadow:0,
			dottedOverlay:"none",
			fullScreenOffsetContainer: ""
	 });
  

//Change Diffrent Logos on Nav
  jQuery(window).scroll(function() {
  
	 if (jQuery(window).scrollTop() >= 25) {
		jQuery(".logo > img").attr("src", "img/logo.png");
	 }
	  else {
		jQuery(".logo > img").attr("src", "img/logo-white.png");
	 }
  
  });
   

// Scroll One Page Menu
  $('a.page-scroll, .cbp-spmenu a').on('click', function(event){
        //var $nav_height = $('#navigation.affix').outerHeight();		
		var $anchor = $(this),
			hash = $anchor.attr('href').replace('#', ''),
			url = window.location.href;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
  //       if(history.pushState) {
		//     history.pushState(null, null, hash);
		// }
		// else {
		//     location.hash = hash;
		// }
       	// event.preventDefault();

		$('#navigation').affix({offset: {top: 50} });
		
   });



//Facts Counters Home Page
	 $(".number-counters").appear(function () {
		$(".number-counters [data-to]").each(function () {
		  var e = $(this).attr("data-to");
		  $(this).delay(6e3).countTo({
			 from: 50,
			 to: e,
			 speed: 3e3,
			 refreshInterval: 50
		  });
		});
	 });
		  
	 
	
 //FOr Circular Progress show
	 $('.some').appear(function () {
		 $('.myStat2').circliful();
	 });   
	 

  
//For Testinomial 
	$("#testinomial-slider").owlCarousel({
		  autoPlay : true,
		  navigation : true,
		  slideSpeed : 250,
		  pagination : false,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  singleItem:true
	
	 });

  
//For Publication Section(Home Page)
    $("#publication-slider").owlCarousel({
		  autoPlay: true, 
		  pagination : false,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  navigation : true,
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
 
  });
  //Paralax Page Slider
	var owl = $("#paralax-slider");
  owl.owlCarousel({
    autoPlay: 3000,
	 navigation : false,
    singleItem : true,
    transitionStyle : "fade"
  });
    
  
	  // portfolio filtering
    $(".project-wrapper").mixItUp();
	 
	 
	 
 // Popup
   $(".fancybox").fancybox({
		openEffect : 'fade',
		closeClick : true,

    });
	 //Video Popup
	 $('.fancybox-media').fancybox({
		openEffect  : 'fade',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
	
	
	//Push Menu on click
	$('.toggle-menu').jPushMenu();
	  $(document).on('click', function () {
        $('.cbp-spmenu-right').removeClass('menu-open');
    });
    $('#menu-toggle').on('click', function (e) {
        e.stopPropagation();
        $('.cbp-spmenu-right').toggleClass('menu-open');
    });
    $('.cbp-spmenu-right').on('click', function (e) {
        e.stopPropagation();
    });

//Parallax effects
$('#bg-paralax ').parallax("50%", 0.3);
$('#testinomial').parallax("50%", 0.2);
$('.text-rotator').parallax("50%", 0.2);


	 
		  //Initiat WOW JS
		 new WOW().init(); 
		 
  
  });
 if(screen.width <720 ){ 
 $('div, img, input, textarea, button, a').removeClass('wow'); // to remove transition
 }