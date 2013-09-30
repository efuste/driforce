jQuery(function($) {
   	
// Height for sidebar based on container height   	
$divHeight = $(".main-content").height() + 30;
$("div.row.main-content").css({"height": $divHeight + "px"});

// Tool tip
$(".tool-tips").tooltip();
  
//Add Hover effect to menus
$('ul.nav li.dropdown').hover(function() {
  	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
	}, function() {
  	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});

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

// Send quick contact javascript
$('#submit-quickcontact').click( function() {
		var name   = $('#name').val();
		var phone    = $('#phone').val();
		var description = $('#description').val();
		var counter = 0;
		
		$('.loading').fadeIn('fast');

		if (name != ""  && phone != ""  && description != "")
			{
				
				$.ajax(
					{
						url: 'sendquickcontact.php',
						type: 'POST',
						data: "name=" + name + "&phone=" + phone + "&description=" + description,
						success: function(result) 
						{
							$('.loading').fadeOut('normal');
							if(result == "email_error") {
								$('#email').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"}).next('.require').text(' !');
							
							} else {
								
								$('#name, #phone, #description').val("");
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
				if(name == "") $('#name').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
				if(phone == "") $('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});	
				if(description == "") $('#description').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
				return false;
			}
	});
	
	$('#name, #phone, #description').focus(function(){
		$(this).val(' ');
	});
	

});