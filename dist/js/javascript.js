var run=function(){function n(){o(),e(a)}function e(n,e){var o=new XMLHttpRequest,i=n;o.onreadystatechange=function(){4==o.readyState&&200==o.status&&(r=JSON.parse(o.responseText),t(r,s))},o.open("GET",i,!0),o.send()}function t(n,e){for(var t="",o=0;o<n.length;o++)t+="<li><a href="+n[o].url+">"+n[o].displayText+"</a></li>";e.innerHTML=t,console.log(" div.innerHTML ",e.innerHTML," jsonArr ",n)}function o(n){for(var e=0;e<i.length;e++)l===i[0]&&($newLink.text("Dynamic Link1"),console.log($newLink.text())),l===i[1]&&($newLink.text("Dynamic Link2"),console.log($newLink.text()));console.log("Parse ",l)}var i=["index.html","index2.html"],r=[],a="js/menu.json",l=document.URL,s=($("body").attr("id"),$(".theText"),$(".dropdown"),$(".hidden"),$("#new-link"),document.querySelector("#output-div"));n()}();