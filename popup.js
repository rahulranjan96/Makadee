chrome.storage.local.get("subject", function(data) {
	    document.getElementById("subject").value = data.subject;
});
chrome.storage.local.get("from", function(data) {
	    document.getElementById("from").value = data.from;
});
chrome.storage.local.get("date_sent", function(data) {
	    document.getElementById("date_sent").value = data.date_sent;
});
chrome.storage.local.get("to", function(data) {
	    document.getElementById("to").value = data.to;
});
chrome.storage.local.get("date", function(data) {
	    document.getElementById("date").value = data.date;
});
chrome.storage.local.get("time", function(data) {
	    document.getElementById("time").value = data.time;
});
chrome.storage.local.get("venue", function(data) {
	    document.getElementById("venue").value = data.venue;
});


// document.addEventListener('DOMContentLoaded', function () {

// 	 chrome.runtime.sendMessage({need: "d"}, function(value) {
// 	 		alert(value);
// 	        document.getElementById("d").innerHTML = value;
// 	 });

// 	 chrome.runtime.sendMessage({need: "t"}, function(value) {
// 	        document.getElementById("t").innerHTML = value;
// 	 });

// 	 chrome.runtime.sendMessage({need: "v"}, function(value) {
// 	        document.getElementById("v").innerHTML = value;
// 	 });

// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	    chrome.runtime.sendMessage(tabs[0].id, {type: "needArray"}, function(array) {
// 	    	alert("start");
// 	        document.getElementById("d").innerHTML = "MAN U";
// 	    });
// 	});

// });
