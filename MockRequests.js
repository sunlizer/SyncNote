function getClipboardData(index){
	var list = [];

	list.push({dataType:"text", data: "Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 ", deviceID:1, date:  "01/11/1992", time:"01:00"});
	list.push({dataType:"picture", data: "testData/pic_1.PNG", deviceID:1, date:  "01/12/1992", time:"02:00"});
	list.push({dataType:"text", data: "Text 2 ", deviceID:1, date:  "01/12/1992", time:"03:00"});
	list.push({dataType:"text", data: "Text 3 ", deviceID:1, date:  "01/12/1992", time:"04:00"});
	list.push({dataType:"text", data: "Text 4 ", deviceID:1, date:  "01/12/1992", time:"05:00"});
	list.push({dataType:"picture", data: "testData/pic_2.PNG", deviceID:1, date:  "01/11/1993", time:"06:00"});
	list.push({dataType:"picture", data: "testData/pic_3.PNG", deviceID:1, date:  "01/10/1994", time:"07:00"});
	list.push({dataType:"text", data: "Text 2 ", deviceID:1, date:  "01/12/1995", time:"08:00"});
	list.push({dataType:"text", data: "Text 2 ", deviceID:1, date:  "01/12/1995", time:"09:00"});
	list.push({dataType:"text", data: "Text 2 ", deviceID:1, date:  "01/12/1995", time:"10:00"});

	return list;
}