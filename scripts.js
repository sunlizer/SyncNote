var activeTab = 3;

function activate(selectedTab){
	document.getElementsByClassName("nav-options")[activeTab].classList.remove("active");
	activeTab = selectedTab;
	document.getElementsByClassName("nav-options")[activeTab].classList.add("active")

	var frames = document.getElementsByClassName("frame");
	for (var i = 0; i < frames.length; i++) {
		frames[i].style.left = (i - activeTab) * 400 +"px";
	}

}

function getClipboard(){

	var list = getClipboardData();
	list = groupByDate(list);

	var clipboard = document.getElementsByClassName("messages");

	for (var i = 0; i < list.length; i++) {

		var dailyItems = document.createElement("div");
		dailyItems.classList.add("daily-messages");
		dailyItems.appendChild(createDateDiv(list[i].date));
		for (var j = 0; j < list[i].records.length; j++) {
			dailyItems.appendChild(createClipboardItem(list[i].records[j]));
		}
		clipboard[0].appendChild(dailyItems);
	}
}


function groupByDate(list){
	var distinctDates = [...new Set(list.map(x=> x.date))];
	var listByDates = [];
	for (var i = 0; i < distinctDates.length; i++) {
		listByDates.push({date: distinctDates[i], records:list.filter(x=> x.date ==  distinctDates[i])})
	 } 
	 return listByDates.sort(x => new Date(x.date)).reverse();
}


function createClipboardItem(item){
	var divItem = document.createElement("div");
	divItem.classList.add("message");
	var content = document.createElement("div");
	divItem.appendChild(content);



	var span = document.createElement("span");
	span.appendChild(document.createTextNode(item.time));

	if(item.dataType == "text"){
		content.classList.add("message-content-text");
		var innerDiv = document.createElement("div");
		innerDiv.appendChild(document.createTextNode(item.data));

		content.appendChild(innerDiv);
		content.appendChild(span);
	}
	else if(item.dataType == "picture"){
		content.classList.add("message-content-image");
		content.appendChild(span);
		content.style.backgroundImage = "url(" + item.data + ")";

	}
	return divItem;

}

function createDateDiv(date){
	var outerDiv = document.createElement("div");
	outerDiv.classList.add("message-date");
	var innerDiv = document.createElement("div");
	var dateText = document.createTextNode(date);

	innerDiv.appendChild(dateText);
	outerDiv.appendChild(innerDiv);

	return outerDiv;
}



/*
<!--
					<div class="daily-messages">
						<div class="message-date"><div>10/01/1992</div></div>


						<div class="message">
							<div class="message-content-text">
								<div> message content</div>
								<span>10:01</span>
							</div>
						</div>

						<div class="message">
							<div class="message-content-image" style="background-image: url('testData/pic_1.PNG');">
								<span>10:01</span>
							</div>
						</div>
					</div>-->
*/



setTimeout(function(){
	activate(0);
	getClipboard();
},123);