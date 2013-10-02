  $(window).load(function() {		
  $('#submit-quickcontact').click( function() {
	alert('inside javascript');
		var name   = $('#name').val();
		var phone    = $('#phone').val();
		var description = $('#description').val();
		
		$('.loading').fadeIn('fast');
	
		if (name != ""  && phone != "" && description != "")
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
								$('#phone').css({"background":"#FFFCFC","border-bottom":"2px solid #A11E22"});
							} 
							else {
								
								$('#name, #phone, #description').val("");
								$('<div class="success-contact"><img src="images/success.png" alt="" class="succes-icon" />Success! Thank you. </div>').insertAfter('#sendnewsletter');
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
			$(this).css({"background":"#ffffff","border-top":"2px solid #cccbcb","border-left":"none","border-right":"2px solid #cccbcb","border-bottom":"none"});
		});
      	
		});