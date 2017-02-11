
<!-- var plugin=navigator.plugins["Shockwave Flash"];

// End -->

//For iphone and ipad enabling code we can do same thing in the javasript file

var deviceIphone = "iphone";
var deviceIpod = "ipod";
 
//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();
 
//**************************
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
      return true;
   else
      return false;
}
