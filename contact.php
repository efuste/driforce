<?php include('header.php'); ?>



    <!-- Carousel
    ================================================== -->
   <div id="page-header-container">
   		<img src="images/contact-us-header.jpg" />
   	</div>
	<div id="bottom-bar">
		<div class="container">
			<h1 id="bottom-bar-title">24 Hour Emergency Service</h1>
			<div id="bottom-bar-icons">
				<a href="water-remediation.php"><img src="images/water-icon.png" /></a>
				<a href="mold-remediation.php"><img src="images/mold-icon.png" /></a>
				<a href="fire-restoration.php"><img src="images/fire-icon.png" /></a>
				<a href="bio-hazard-remediation.php"><img src="images/biohazard-icon.png" /></a>
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
          				<form action="#" id="main-contact">
          					<input class="text-field-half" type="text" name="fname" id="fname" value="First Name (required)"  />
          					<input class="text-field-half" type="text" name="lname" id="lname" value="Last Name (required)"  />
          					<input class="text-field-half" type="text" name="phone" id="phone" value="Phone (required)"  />
          					<input class="text-field-half" type="text" name="email" id="email" value="Email (required)"  />
          					
          				<fieldset id="location">	
          					<input class="text-field-full" type="text" name="address" id="address" value="Address"/>
          					<input class="text-field-half" type="text" name="city" id="city" value="City"  />
							<input class="text-field-quarter" type="text" name="state" id="state" value="FL" />
							<input class="text-field-quarter" type="text" name="zip" id="zip" value="Zip"/>
          				</fieldset>	
          				
          			    <fieldset id="case-description">
          			    	<textarea class="text-area-full" rows="10" type="text" name"description" id="description">Case Description</textarea>
          			    </fieldset>

          				
          				<fieldset id="insurance-info">
          					<input class="text-field-half" type="text" name="policyNum" id="policyNum" value="Policy Number"  />
          					<input class="text-field-half" type="text" name="companyName" id="companyName" value="Insurance Company Name"  />
          				</fieldset>
							<button type="submit" name="submit" class="button-blue" id="submit-maincontact">Submit &raquo;</button>
							<span class="loading" style="display: none;">Please wait..</span> 

          				</form>
          	</div>
        <!-- /.col-lg-4 -->
       
       <div class="sidebar">
        	<div class="inner">
          		
        			<div id="sidebar-services">
        				<h2>Our Services</h2>
        				<ul>
        					<li><a href="water-remediation.php">&raquo; Water Remediation</a></li>
        					<li><a href="mold-remediation.php">&raquo; Mold Remediation</a></li>
        					<li><a href="fire-restoration.php">&raquo; Fire Restoration</a></li>
        					<li><a href="bio-hazard-remediation.php">&raquo; Bio-Hazard Remediation</a></li>
        				</ul>
        				
        				<h2>Contact Info</h2>
        		
        				<p><span class="bold-blue">24 HOURS A DAY<br />7 DAYS A WEEK</span></p>
        				<p><span class="bold-blue">Phone:</span> 786.280.2278</p>
        			<p><span class="bold-blue">Email:</span> 	<a href="mailto:mcabello@driforceinc.com?subject=feedback">mcabello@driforceinc.com</p></a>

        				
        				
        				<img src="images/iirc-logo.png"  />
        			</div>
        	</div>
        </div><!-- /.col-lg-4 -->
      </div>
      </div><!-- /.row -->


     

      <!-- /END THE FEATURETTES -->


      

    </div><!-- /.container -->
	<?php require('footer.php'); ?>
