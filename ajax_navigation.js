// JavaScript Document
var please_wait = null;
function open_url(url,target) {
 	if ( ! document.getElementById) {
  		return false;
 	}
 	if (please_wait != null) {
  		document.getElementById(target).innerHTML = please_wait;
 	}

 	if (window.ActiveXObject) {
  		link = new ActiveXObject("Microsoft.XMLHTTP");
 	} else if (window.XMLHttpRequest) {
  		link = new XMLHttpRequest();
 	}
 	if (link == undefined) {
  		return false;
 	}
 	link.onreadystatechange = function() { response(url,target); }
 	link.open("GET",url,true);
 	link.send(null);
}
function response(url,target) {
 	if (link.readyState == 4) {
document.getElementById(target).innerHTML = (link.status == 200) ? link.responseText : "Ooops!! A broken link! Please contact the webmaster of this website ASAP and give him the following errorcode: "  + link.status;
	}
}
function set_loading_message(msg) {
 	please_wait = msg;
}
var loadedobjects=""
function loadobjs(){
	if (!document.getElementById)
	return
	for (i=0; i<arguments.length; i++){
	var file=arguments[i]
	var fileref=""
	if (loadedobjects.indexOf(file)==-1){ //Check to see if this object has not already been added to page before proceeding
	if (file.indexOf(".js")!=-1){ //If object is a js file
	fileref=document.createElement('script')
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", file);
	}
	else if (file.indexOf(".css")!=-1){ //If object is a css file
	fileref=document.createElement("link")
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", file);
	}
	}
	if (fileref!=""){
	document.getElementsByTagName("head").item(0).appendChild(fileref)
	loadedobjects+=file+" " //Remember this object as being already added to page
	}
	}
}

