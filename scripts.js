// JavaScript Document

/*Next function is a slideshow*/
	var Image = new Array ("images/slideshow_special_01.jpg",
					"images/slideshow_special_03.jpg",
					 "images/slideshow_special_02.jpg",
					 "images/slideshow_special_04.jpg",
					 "images/slideshow_special_05.jpg"
					  );
var Image_Number = 0;
var Image_Length = Image.length - 1;
var num = 1;


function auto(){

    
	setInterval("change_image(num)", 3000);
	}

function change_image(num) {
Image_Number = Image_Number + num;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
		return false;
}
/* Next functions are a buttons of slideshow   */
function goBack(){
	Image_Number = Image_Number -1;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
	sleep(1000);
		return false;
}
	
function goAhead(){
	Image_Number = Image_Number +1;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
	sleep(1000);
		return false;
	}	
	
/* Next function is user input form validation  */	
function validateForm() {
	var validation_result = true;
	var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    var x = document.forms["myForm"]["fname"].value;
	var email = document.forms["myForm"]["email"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        validation_result = false;
	}
	if (email==""){
		alert("Please enter your email.");
		validation_result = false;
		}
	
	 else if (patt.test(email) != true ){
		alert("Your email address is wrong");
	  validation_result = false; }

    if(validation_result == false)
    {    	
		var divElement = document.getElementById("error");

    		divElement.innerHTML = "";

    	divElement.appendChild(error_messages);

    	divElement.style.display = "block";

    }	

    
    	return validation_result;	
    
}


/*Next function allowes user to switch in between two different style sheets  */
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

/* Next functions are for displaying arts: meet_artist.html*/
	
		// JavaScript Document
		var length = 5;                //the total number of images
		var current = 1;               //the current slide number
		var slide_tray = new Array("images/img1.jpg",
            "images/img2.jpg", "images/img3.jpg", "images/img4.jpg");  //an array to hold the uploaded images
		var slideshow_interval; 	

	//the function to populate slide tray	
	function load_slide(place,file) {
	  
	   slide_tray[place] = file;
   }
   
	//This loop is executed when the page is loaded to initialise the image array
	for (i=1; i<=length;  i++)
	{
	   var file_name = "images/img" + i + ".jpg";	//Generate current iamge file name
	   load_slide(i, file_name);
	}

	//Load next image
	function goforward(e) {
		
		//get the target image element
	 var targetElement = document.getElementById('fullImage');
	 
		//stop a slide show
		slideshow(targetElement, 0);

		//I stop event propagation so that it will not 
		//trigger event handler in a parent element or a child element
		e.stopPropagation();
		
		//increase current image number	
	  current = current + 1;
	  //if the increased value is bigger than the total number of images
	  // we reset it the first image
	  if( current > length ) {
		 current = 1;
	  }
	  	   
		//assign a new image source
	  document.getElementById('fullImage').src = slide_tray[current]; //update current image
							
	 	 fade_in(targetElement,100); 
	 	 //start again
	 	 slideshow(targetElement, 8000);
	}

	//Load previous image
	function gobackward(e) {

	  //get the target image element
	  var targetElement = document.getElementById('fullImage');

	  //stop a slide show
		slideshow(targetElement, 0);
	
		e.stopPropagation();
		
	  current = current - 1;
	  
	   //if the decreased value is less than the first image number
	  // we reset it the last image

	  if( current < 1 ) {
		 current = 0;
	  }
	  	 
		//assign a new image source
	  document.getElementById('fullImage').src = slide_tray[current]; //update current image
							
	 	 fade_in(targetElement,100); 	

	 	 //start again
	 	 slideshow(targetElement, 8000);		
		  
	}

		function displayFullImage(ImageElement)
		{
		
		   var containerElement = document.getElementById('lightbox');
		   var targetElement = document.getElementById('fullImage');
		   var left_arrow = document.getElementById('left_button');
			var right_arrow = document.getElementById('right_button');
			
			 //need to set new current image
		  for (var i = 1; i < slide_tray.length; i++)
		  {
		     var source = ImageElement.src;
		    if(source.search(slide_tray[i].src) != -1)
				{	
				   current = i;
				}
			  }
		  		   
		   fade_in(containerElement,70);
		  
		   targetElement.style.transition = "width 1s,height 1s";
		   targetElement.src = ImageElement.src;

		    fade_in(targetElement,70);
		    
		    setTimeout(function(){
				targetElement.style.width = "800px";
		    	targetElement.style.height = "550px";
		   		   }, 100);
		   
		   setTimeout(function(){
				right_arrow.style.display = "inline-block";
				left_arrow.style.display = "inline-block";
		   
		   }, 1000);

		   //Once Everything set, start slide show 
		   slideshow(targetElement, 8000);
		
		}
				
		function removeFullImage(ContainerElement)
		{
		
		   var targetElement = document.getElementById('fullImage');
			var left_arrow = document.getElementById('left_button');
			var right_arrow = document.getElementById('right_button');
		 
		   
				left_arrow.style.display = "none";
				right_arrow.style.display = "none";

				targetElement.style.width = "200px";
		    	targetElement.style.height = "112px";
		   //stop a slide show 
		 slideshow(targetElement, 0);
		  		 
			fade_out(targetElement,70);	

			fade_out(ContainerElement,70);	
			
		}

function fade_in(element,millisecond)
{
	element.style.opacity=0.1;
	element.style.display = "inline-block";
	var op = parseInt(element.style.opacity);
	
	var myInterval = setInterval( function(){ 

			             if(element.style.opacity < 1)
						 {
						 	
						 	op += 0.1; 
							element.style.opacity = op;
													 }
						 else
						 {
							clearInterval(myInterval);
						 }
												 
						 }, millisecond);
}

function fade_out(element,millisecond)
{	
	element.style.opacity = "1";
	var op = parseInt(element.style.opacity);	
	var myInterval = setInterval( function(){ 

			             if(element.style.opacity > 0.1)
						 {
						 	op-= 0.1;
							element.style.opacity = op;
						 }
						 else
						 {
													
							element.style.display = "none";
							clearInterval(myInterval);
						 }
						 						 
						 },millisecond);
	}

function slideshow(imageElement, millisecond)
{

	if(millisecond > 0)
	{	
		slideshow_interval = setInterval(function(){

		current = current + 1;

		if( current > length ) {
		 current = 1;
	  	}

		imageElement.src = slide_tray[current].src;

		fade_in(imageElement,100); 	

		}, millisecond );

	}
	else
	{
		clearInterval(slideshow_interval);
	}
}

(function () {
    var cx = '000483727945217578410:lidhhrambx8';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

