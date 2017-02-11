// JavaScript Document
function loadXMLFile(xmlFile)
{
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Load the XML file and return an XML object
	xmlhttp.open("GET", xmlFile, false);
	xmlhttp.send();
	return (xmlhttp.responseXML);
}
var nextItem = 0; //The index of next ietm to be added
var currentCart = new Array(); //This array contains the current items in the cart

function displaypaintings()
{
	var xmlDoc;
	var txt;
	txt = "<br>";
	//Load the XML file that contains the information for all the books
	xmlDoc=loadXMLFile("paintings.xml");

    
	
	//Retrieve all the painting elements from the XML file
    paintings=xmlDoc.documentElement.getElementsByTagName("PAINTING");
    for (var i=0;i<paintings.length;i++)
    {

		txt+="<div class='items'>";
		
		paintingChildren=paintings[i].getElementsByTagName("FILE");
		txt+="<div class='img'><img src='images/"+paintingChildren[0].firstChild.nodeValue+"' width='130' height='110' /></div>";
		
		paintingChildren=paintings[i].getElementsByTagName("MEDIUM");
		txt+="<div class='medium' id='title"+i+"'>"+paintingChildren[0].firstChild.nodeValue+"</div>";
		
		paintingChildren=paintings[i].getElementsByTagName("CATEGORY");
		txt+="<div class='category'>"+paintingChildren[0].firstChild.nodeValue+"</div>";
		
		paintingChildren=paintings[i].getElementsByTagName("ARTIST");
		txt+="<div class='artist'>"+paintingChildren[0].firstChild.nodeValue+"</div>";
		
		paintingChildren=paintings[i].getElementsByTagName("PRI");
		txt+="<div class='price' >$<span id='price"+i+"'>"+paintingChildren[0].firstChild.nodeValue+"</span><button onclick='addToCart("+i+")';>add</button></div>";
		
		
		
		txt+="</div>";

      
    }

	
	//Display book table in <div id="txtBookInfo">
    document.getElementById("content").innerHTML=txt;
}
function displaypaintings_Category(c) {
    var xmlDoc;
    var txt;
    txt = "<br>";
    //Load the XML file that contains the information for all the books
    xmlDoc = loadXMLFile("paintings.xml");



    //Retrieve all the painting elements from the XML file
    paintings = xmlDoc.documentElement.getElementsByTagName("PAINTING");
    for (var i = 0; i < paintings.length; i++) {
        paintingChildren = paintings[i].getElementsByTagName("CATEGORY");
        if (paintingChildren[0].firstChild.nodeValue == c) {

            txt += "<div class='items'>";

            paintingChildren = paintings[i].getElementsByTagName("FILE");
            txt += "<div class='img'><img src='images/" + paintingChildren[0].firstChild.nodeValue + "' width='130' height='110' /></div>";

            paintingChildren = paintings[i].getElementsByTagName("MEDIUM");
            txt += "<div class='medium' id='title" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("CATEGORY");
            txt += "<div class='category'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("ARTIST");
            txt += "<div class='artist'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("PRI");
            txt += "<div class='price' >$<span id='price" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</span><button onclick='addToCart(" + i + ")';>add</button></div>";



            txt += "</div>";
        }

    }


    //Display book table in <div id="txtBookInfo">
    document.getElementById("content").innerHTML = txt;
}
function displaypaintings_Medium(c) {
    var xmlDoc;
    var txt;
    txt = "<br>";
    //Load the XML file that contains the information for all the books
    xmlDoc = loadXMLFile("paintings.xml");



    //Retrieve all the painting elements from the XML file
    paintings = xmlDoc.documentElement.getElementsByTagName("PAINTING");
    for (var i = 0; i < paintings.length; i++) {
        paintingChildren = paintings[i].getElementsByTagName("MEDIUM");
        if (paintingChildren[0].firstChild.nodeValue == c) {

            txt += "<div class='items'>";

            paintingChildren = paintings[i].getElementsByTagName("FILE");
            txt += "<div class='img'><img src='images/" + paintingChildren[0].firstChild.nodeValue + "' width='130' height='110' /></div>";

            paintingChildren = paintings[i].getElementsByTagName("MEDIUM");
            txt += "<div class='medium' id='title" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("CATEGORY");
            txt += "<div class='category'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("ARTIST");
            txt += "<div class='artist'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("PRI");
            txt += "<div class='price' >$<span id='price" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</span><button onclick='addToCart(" + i + ")';>add</button></div>";



            txt += "</div>";
        }

    }


    //Display book table in <div id="txtBookInfo">
    document.getElementById("content").innerHTML = txt;
}
function displaypaintings_type(c) {
    var xmlDoc;
    var txt;
    txt = "<br>";
    //Load the XML file that contains the information for all the books
    xmlDoc = loadXMLFile("paintings.xml");



    //Retrieve all the painting elements from the XML file
    paintings = xmlDoc.documentElement.getElementsByTagName("PAINTING");
    for (var i = 0; i < paintings.length; i++) {
        paintingChildren = paintings[i].getElementsByTagName("TYPE");
        if (paintingChildren[0].firstChild.nodeValue == c) {
            //if (c = "SPECIAL") { txt = "<div id='section'> <h2>Queen's Birthday Special !!!</h2>";}
            txt += "<div class='items'>";

            paintingChildren = paintings[i].getElementsByTagName("FILE");
            txt += "<div class='img'><img src='images/" + paintingChildren[0].firstChild.nodeValue + "' width='130' height='110' /></div>";
            
            paintingChildren = paintings[i].getElementsByTagName("MEDIUM");
            txt += "<div class='medium' id='title" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("CATEGORY");
            txt += "<div class='category'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("ARTIST");
            txt += "<div class='artist'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

            paintingChildren = paintings[i].getElementsByTagName("PRI");
            txt += "<div class='price' >$<span id='price" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</span><button onclick='addToCart(" + i + ")';>add</button></div>";



            txt += "</div>";
        }

    }


    //Display book table in <div id="txtBookInfo">
    document.getElementById("content").innerHTML = txt;
}
function displaypaintings_pri(a) {
    var xmlDoc;
    var txt;
    txt = "<br>";
    //Load the XML file that contains the information for all the books
    xmlDoc = loadXMLFile("paintings.xml");



    //Retrieve all the painting elements from the XML file
    paintings = xmlDoc.documentElement.getElementsByTagName("PAINTING");
    for (var i = 0; i < paintings.length; i++) {
        paintingChildren = paintings[i].getElementsByTagName("PRI");
        var j = paintingChildren[0].firstChild.nodeValue;
        if (j < a) {
            
                txt += "<div class='items'>";

                paintingChildren = paintings[i].getElementsByTagName("FILE");
                txt += "<div class='img'><img src='images/" + paintingChildren[0].firstChild.nodeValue + "' width='130' height='110' /></div>";

                paintingChildren = paintings[i].getElementsByTagName("MEDIUM");
                txt += "<div class='medium' id='title" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

                paintingChildren = paintings[i].getElementsByTagName("CATEGORY");
                txt += "<div class='category'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

                paintingChildren = paintings[i].getElementsByTagName("ARTIST");
                txt += "<div class='artist'>" + paintingChildren[0].firstChild.nodeValue + "</div>";

                paintingChildren = paintings[i].getElementsByTagName("PRI");
                txt += "<div class='price' >$<span id='price" + i + "'>" + paintingChildren[0].firstChild.nodeValue + "</span><button onclick='addToCart(" + i + ")';>add</button></div>";



                txt += "</div>";
            
        }

    }


    //Display book table in <div id="txtBookInfo">
    document.getElementById("content").innerHTML = txt;
}
function Remove(index)
{
	
	var newCart = new Array();
	var j = 0;
	
	for (i=0;i<nextItem;i++)
	{

		
		if(i == index)
		{
			
			i++;
			if(i==nextItem)
			{
				break;	
			}
		}
		
		newCart[j] = new Array();
		newCart[j][0]=currentCart[i][0];
		
		newCart[j][1]=currentCart[i][1];
		newCart[j][2]=currentCart[i][2];
		newCart[j][3]=currentCart[i][3];
		j++;
		
	}
	
	nextItem--;
	currentCart=newCart;
	displayCart();
	
		
}
function displayCart()
{
   //Construct shopping cart table heading
   txt="<table id='tblCart' border='5px' cellpadding='1px' cellspacing='0px' align='center' style='margin:0px;border:#666 solid;'>";
   txt+="<tr><th>Item</th><th>Title</th><th>Price</th><th>Quantity</th><th>Remove</th></tr>";
   totalCost = 0;
	//Construct shopping cart table body
	for (i=0;i<nextItem;i++)
    {
      txt+="<tr>";
      
      txt+="<td align='left'>" + currentCart[i][0] + "</td>"; 
	  txt+="<td align='left'>" + currentCart[i][1] + "</td>"; 
	  txt+="<td align='left'>" + currentCart[i][2] + "</td>"; 
	  txt+="<td align='center'><button onclick='minus("+i+")' style='width:20px'>-</button>" + currentCart[i][3] + "<button onclick='add("+i+")' style='width:20px'>+</button></td>"; 
	  txt+="<td align='center'><button onclick='Remove("+i+")'>Remove</button</td>";
	  
	  totalCost += currentCart[i][2] * currentCart[i][3];
     
      txt=txt + "</tr>";
    }
   
   //Display the total cost
   txt+="<td align='center' colspan='4' style='color:#900;'> Total Cost: " + parseFloat(totalCost).toFixed(2) + "</td>";
   
   //Close shopping cart table
   txt+="</table>";
   
   //Display shopping cart table in <div id="txtCart">
   document.getElementById("txtCart").innerHTML=txt;
}
function add(index)
{
	currentCart[index][3] += 1;
	displayCart();
}
function minus(index)
{
	if(currentCart[index][3]<=0)
	{
		currentCart[index][3]=0;	
	}
	else
	{
		currentCart[index][3]--;
	}
	displayCart();
}
function addToCart(selectedItem)
{
	var addedIndex = -1;
	
	
	//Check if the selected item has been added once
	for (i=0;i<nextItem;i++)
	{
		if (currentCart[i][0]==selectedItem+1)
		{
			//The selected item has been added once, record the index
			addedIndex = i;
			break; //stop looping
		}
	}
	
	//If the selected item has not been added, add a new item to the shopping cart, otherwise, simply increase the quantity for the item by one,  

	if (addedIndex == -1)
	{
	  //Create a new item in the shopping cart
	  currentCart[nextItem] = new Array();
	  
	  //Put the item details into the shopping cart
	  currentCart[nextItem][0] = selectedItem+1;
	  currentCart[nextItem][1] = document.getElementById("title" + selectedItem).innerHTML;
	  currentCart[nextItem][2] = document.getElementById("price" + selectedItem).innerHTML;
	  currentCart[nextItem][3] = 1; //set the quantity
	  
	  //Get ready to add next item
	  nextItem += 1;
	}
	else
	{
		currentCart[addedIndex][3] += 1;
	}
	
	//Refresh the shopping cart
	displayCart();
}

function clearCart()
{
	//Reinitialise the current item array
	nextItem = 0;
            currentCart = new Array(); 
	
	//Refresh the shopping cart
	displayCart();
}

function checkOut()
{
	
	//Construct XML string
	txt="<ITEMS>";
	
	//Loop through the shopping cart
	for (i=0;i<nextItem;i++)
    {
		txt=txt+"<ITEM>";
		txt=txt+"<TITLE>" + currentCart[i][1]  + "</TITLE>";
		txt=txt+"<PRICE>" + currentCart[i][2] + "</PRICE>";
		txt=txt+"<QUTANTY>" + currentCart[i][3] + "</QUTANTY>";
		txt=txt+"</ITEM>";
	}
	txt=txt+"</ITEMS>";
    
	//Save the XML data into an XML object, which could be used by another piece of JavaScript code
	
	if (window.DOMParser)
	{
	  parser=new DOMParser();
	  xmlDoc=parser.parseFromString(txt,"text/xml");
	}
	else // Internet Explorer
	{
	  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async=false;
	  xmlDoc.loadXML(txt);
	}
	
  //XML HTTP object
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  //Send the XML string to server
  var url = "ProcesingOrder.php?XMLStr=" + txt;
  xmlhttp.open("GET", url, false);
  xmlhttp.send(null);

	alert("Your details have been sent to the server. Thank you!!!")
  //Clear cart
  clearCart();
}

