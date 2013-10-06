jQuery(function($) {

// Height for sidebar based on container height
if ($(window).width() > 767) {
	$divHeight = $(".main-content").height() + 30;
	$("div.row.main-content").css({"height": $divHeight + "px"});
}

$(window).resize(function() {
   if ($(window).width() > 767) {
   		
	
		//Add Hover effect to menus
		$('ul.nav li.dropdown').unbind('hover');
		$('ul.nav li.dropdown').hover(function() {
  			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function() {
  	
  	
  		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		});
		
		$(".toggle" ).show();
	}
	else {
   		$(".toggle" ).hide();
   		$( ".opener" ).unbind("click");  
   		$( ".opener" ).click(function() {
     		$(this).next('.toggle').slideToggle();
     	
     			if($(this).hasClass("opener")){
					$(this).removeClass( "opener" ).addClass("opener-active");
					

     			}
     			else {
     				$(this).removeClass("opener-active").addClass( "opener" );
				}     	
   	});
	}

}).resize();


// Scroll to top
$(function () {
  		$.scrollUp({
    	scrollName: 'scrollUp', // Element ID
    	topDistance: '300', // Distance from top before showing element (px)
    	topSpeed: 300, // Speed back to top (ms)
    	animation: 'fade', // Fade, slide, none
    	animationInSpeed: 200, // Animation in speed (ms)
    	animationOutSpeed: 200, // Animation out speed (ms)
    	scrollText: '', // Text for element
    	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  		});
	});

// Tool tip
$(".tool-tips").tooltip();
  


//  Slider 
var tpj=jQuery;
				tpj.noConflict();

				tpj(document).ready(function() {

				if (tpj.fn.cssOriginal!=undefined)
					tpj.fn.css = tpj.fn.cssOriginal;

					var api = tpj('.fullwidthbanner').revolution(
						{
							delay:1000000000000,
							startwidth:1200,
							startheight:344,

							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:3,

							hideThumbs:1,
							navigationType:"none",				// bullet, thumb, none
							navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

							
							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							touchenabled:"on",						// Enable Swipe Function : on/off


							stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
							stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

							hideCaptionAtLimit:320,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
							hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
							hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


							fullWidth:"on",

							shadow:1								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

						});


						// TO HIDE THE ARROWS SEPERATLY FROM THE BULLETS, SOME TRICK HERE:
						// YOU CAN REMOVE IT FROM HERE TILL THE END OF THIS SECTION IF YOU DONT NEED THIS !
							api.bind("revolution.slide.onloaded",function (e) {


								jQuery('.tparrows').each(function() {
									var arrows=jQuery(this);

									var timer = setInterval(function() {

										if (arrows.css('opacity') == 1 && !jQuery('.tp-simpleresponsive').hasClass("mouseisover"))
										  arrows.fadeOut(300);
									},3000);
								})

								jQuery('.tp-simpleresponsive, .tparrows').hover(function() {
									jQuery('.tp-simpleresponsive').addClass("mouseisover");
									jQuery('body').find('.tparrows').each(function() {
										jQuery(this).fadeIn(300);
									});
								}, function() {
									if (!jQuery(this).hasClass("tparrows"))
										jQuery('.tp-simpleresponsive').removeClass("mouseisover");
								})
							});
						// END OF THE SECTION, HIDE MY ARROWS SEPERATLY FROM THE BULLETS
						

});

// Send main contact javascript
$('#submit-maincontact').click( function() {
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		
		var address = $('#address').val();
		var city = $('#city').val();
		var state = $('#state').val();
		var zip = $('#zip').val();
		
		var description    = $('#description').val();
		
		var agentName = $('#agentName').val();
		var companyName = $('#companyName').val();
		var agentPhone = $('#agentPhone').val(); 
		
		alert(agentPhone);
		
		$('.loading').fadeIn('fast');

		if ((fname != "" && fname !="First Name (required)") && (lname != "" && lname !="First Name (required)")  && (phone != "" && phone != "Phone (required)")  && (email != "" && email != "Email (required)"))
			{
				$.ajax(
					{

						url: 'sendmaincontact.php',
						type: 'POST',
						data: "fname=" + fname + "&lname" + lname + "&phone=" + phone + "&email" + email + "&address" + address + 
							  "&city" + city + "&state" + state + "&zip" + zip + "&description=" + description + 
							  "&agentName" + agentName + "&companyName" + companyName + "&agentPhone" + agentPhone,
						success: function(result) 
						{
							alert(result);
							$('.loading').fadeOut('normal');
							if(result == "phone_error") {
								$('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
							
							} 
							
							else {
								alert("inside else");
								$('#fname, #lname, #phone, #email ').css({"background":"#FFFCFC","border-bottom":"none"});

								$('<div class="success-contact"><img src="images/success.png" alt="" class="succes-icon" />Success! Thank you. </div>').insertAfter('#submit-maincontact');
								$('.success-contact').fadeOut(10000, function(){ $(this).remove(); });
							}
						}
					}
				);
				return false;
				
			} 
		else 
			{
				$('.loading').fadeOut('normal');
				if(fname == "" || fname == "First Name (required)") $('#fname').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
				if(lname == "" || lname == "Last Name (required)") $('#lname').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
				if(phone == "" || phone == "Phone (required)") $('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});	
				if(email == "" || email == "Email (required)") $('#email').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});

				return false;
			}
			
			
});

// Send quick contact javascript
$('#submit-quickcontact').click( function() {
		var name   = $('#name').val();
		var phone    = $('#phone').val();
		var description = $('#description').val();
		$('.loading').fadeIn('fast');

		if ((name != "" && name !="Name (required)")  && (phone != "" && phone != "Phone (required)"))
			{
				$.ajax(
					{
						url: 'sendquickcontact.php',
						type: 'POST',
						data: "name=" + name + "&phone=" + phone + "&description=" + description,
						success: function(result) 
						{
							$('.loading').fadeOut('normal');
							if(result == "phone_error") {
								$('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"}).next('.require').text(' !');
							
							} else {
								
								$('#name, #phone, #description').val("");
							    $('#name, #phone, #description').css({"background":"#FFFCFC","border-bottom":"none"})

								$('<div class="success-contact"><img src="images/success.png" alt="" class="succes-icon" />Success! Thank you. </div>').insertAfter('#submit-quickcontact');
								$('.success-contact').fadeOut(10000, function(){ $(this).remove(); });
							}
						}
					}
				);
				return false;
				
			} 
		else 
			{
				$('.loading').fadeOut('normal');
				if(name == "" || name == "Name (required)") $('#name').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
				if(phone == "" || phone == "Phone (required)") $('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});	
				return false;
			}
	});
	
	
	$('#name, #fname, #lname, #email, #phone').focus(function(){
		$(this).val(' ');
	    $(this).css({"background":"#FFFCFC","border-bottom":"none"});

	});
	
	
});

	

$(window).resize($);