function getContent(){
	var messageBody = window.frames.document.body.getElementsByTagName('pre')[0].innerHTML.toString();
	var venue = new String("");
	var date = new String("");
	var time = new String("");
	var matchVenue = /venue/i.exec(messageBody);
	var matchDate = /date/i.exec(messageBody);
	var matchTime = /time|timing/i.exec(messageBody);

	var i=0;
	if(matchVenue)
		while( i < 25 && messageBody[matchVenue.index + 6 + i] != "\n"){
			venue = venue.concat(messageBody[matchVenue.index + 6 + i]);
			i++;
		}
	i=0;
	if(matchDate)
		while( i < 20 && messageBody[matchDate.index + 5 + i] != "\n"){
			date = date.concat(messageBody[matchDate.index + 5 + i]);
			i++;
		}
	i=0;
	if(matchTime)
		while( i < 25 && messageBody[matchTime.index + 6 + i] != "\n"){
			time = time.concat(messageBody[matchTime.index + 6 + i]);
			i++;
		}
        chrome.storage.local.set({subject:document.getElementsByTagName('td')[10].innerText});
        chrome.storage.local.set({from:document.getElementsByTagName('td')[12].innerText}); 
        chrome.storage.local.set({date_sent:document.getElementsByTagName('td')[14].innerText});
        chrome.storage.local.set({to:document.getElementsByTagName('td')[16].innerText}); 
	chrome.storage.local.set({date:date});
	chrome.storage.local.set({time:time});
	chrome.storage.local.set({venue:venue});
}


getContent();
// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
// 	switch(request.need){
// 		case "date": sendResponse(getContent("d"));
// 					 break;
// 		case "time": sendResponse(getContent("t"));
// 					 break;
// 		case "venue": sendResponse(getContent("v"));
// 					  break;
// 	}
// });
	// chrome.runtime.sendMessage(document.getElementsByTagName('pre')[0].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[10].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[12].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[14].innerText);
