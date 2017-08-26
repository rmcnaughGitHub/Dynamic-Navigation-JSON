//Revealing Module
var run = (function(){
	//
	var linkArr = [],//['index.html','index2.html'],
		myObj = null,//for Json Object
		jsonArr = [],//empty array to parse json
		jsonFile = 'js/menu2.json',
		arr = [],//empty array
		currentPage,//curretPage
		//
		$query = document.URL,
		//if url = http://css-tricks.com/example/index.html//
		$url = window.location.href,//returns complete URL
		$protocol = window.location.protocol,//returns "http:"
		$host = window.location.host//returns "css-tricks.com" 
		$pathname = window.location.pathname,//returns "example/index.html"
		//
		$id = $('body').attr('id')//document.body.id,
		$className = document.body.classList.contains('self'),
		//
		outputDiv = document.querySelector('#output-div');

	function Start(){
		GetCurretPage();//get current Page
		LoadJSON(jsonFile);//load json
		TargetWin();
	};

	//FIND CURRET PAGE
	function GetCurretPage(arg){
		currentPage = $url;
		linkArr.push(currentPage);
		console.log('currentPage is ', currentPage, 'linkArr ',linkArr);
		return currentPage;
	};

	// LOAD JSON FILE (JavaScript Object Notation)
    function LoadJSON(file, callBack){
		// XHR Request for server data
		// Assing data to XHR response
		// Intead simple parse
		//return(JSON.parse(file);
		var xmlhttp = new XMLHttpRequest();
		var url = file;

		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			    jsonArr = JSON.parse(xmlhttp.responseText);
			    StyleJSON(jsonArr, outputDiv);//
			    //console.log('JSON FILE ',jsonArr);
		    }
		};

		xmlhttp.open('GET', url, true);
		xmlhttp.send();
	};

    //STYLE JSON
    /*////
	JSON Syntax Rules
		Data is in name/value pairs
		Data is separated by commas
		Curly braces hold objects
		Square brackets hold arrays
	*/////
    function StyleJSON(myObj, div){
    	var out = '';//to string

    	//get page and find correct json info
    	if ( currentPage.indexOf('index.html') > -1 ){
    		arr = myObj.menu.home;
    	}else if ( currentPage.indexOf('index2.html') > -1 ){
    		arr = myObj.menu.home2;
    	}

    	//map the array in the object
	    var currentLinks = arr.map(function(task, index, array){
	    	out += '<li class="self">' + '<a href=' + arr[index].url + '>' + arr[index].displayText + '</a>' + '</li>';
	    	console.log(' div.innerHTML ', div.innerHTML, ' jsonArr ',arr[index]); 
	    	return arr;
	    });
	    div.innerHTML = out;
	    
	};


	//TARGET WINDOW
	function TargetWin($className){
		if (!$className){
			document.getElementsByTagName('a').target = '_new';
		}
	}

	//UNUSED:
	function GetAbsolutePath() {
	    var loc = window.location;
	    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
	    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
	}

	//ClICK TO SLIDE
	function ClickSlide(ele, ObjToSlide){
		ele.on('click', function(){
			ObjToSlide.slideToggle(300);
			console.log('Button Pressed');
		});
	}
	
	Start();	
	//console.log('Function Instantiated!!');
})();