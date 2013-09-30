<?php include('header.php'); ?>



    <!-- Carousel
    ================================================== -->
   <div id="page-header-container">
   		<img src="images/mold-remediation-header.jpg" />
   	</div>
	<div id="bottom-bar">
		<div class="container">
			<h1 id="bottom-bar-title">24 Hour Emergency Service</h1>
			<div id="bottom-bar-icons">
				<img src="images/water-icon.png" />
				<img src="images/mold-icon.png" />
				<img src="images/fire-icon.png" />
				<img src="images/biohazard-icon.png" />
			</div>
		</div>
		<div class="clearfix"></div>	
		
	</div>


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container">

      <!-- Three columns of text below the carousel -->
      <div class="row main-content">
       
        	<div class="col-lg-8">
          				<h1>Contact Dri-Force Restoration</h1>
          				<p>Please use the form below to get in touch with us.</p>
          				<form action="#" id="contact">
          					<input class="text-field-half" type="text" name="fname" id="fname" value="First Name"  />
          					<input class="text-field-half" type="text" name="lname" id="lname" value="Last Name"  />
          					<input class="text-field-half" type="text" name="phone" id="phone" value="Phone Number"  />
          					<input class="text-field-half" type="text" name="email" id="email" value="Email Address"  />
          					
          				<fieldset id="location">	
          					<input class="text-field-full" type="text" name="address" id="address" value="Address"/>
          					<input class="text-field-half" type="text" name="city" id="city" value="City"  />
							<input class="text-field-quarter" type="text" name="state" id="state" value="State" />
							<input class="text-field-quarter" type="text" name="zip" id="zip" value="Zip"/>
          				</fieldset>	
          				
          			    <fieldset id="case-description">
          			    	<textarea class="text-area-full" rows="10" type="text" name"description" id="description"  >Case Description</textarea>
          			    </fieldset>

          				
          				<fieldset id="insurance-info">
          					<input class="text-field-half" type="text" name="agentName" id="agentName" value="Insurance Agent Name"  />
          					<input class="text-field-half" type="text" name="companyName" id="companyName" value="Insurance Agency Name"  />
          					<input class="text-field-half" type="text" name="agentPhone" id="agentPhone" value="Insurance Agenct Phone"  />
          				</fieldset>
							<button type="submit" name="submit" class="btn btn-default" id="submit-quickcontact">Submit &raquo;</button>
							<span class="loading" style="display: none;">Please wait..</span> 

          				</form>
          	</div>
        <!-- /.col-lg-4 -->
       
       <?php include('sidebar.php'); ?>
      </div>
      </div><!-- /.row -->


     

      <!-- /END THE FEATURETTES -->


      

    </div><!-- /.container -->
	<?php require('footer.php'); ?>
