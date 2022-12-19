
$("#uploadButton").click(function (e) {
	e.preventDefault();

	var target = $('#fileUpload').get(0);

	//console.log(target.val);
	if (!target.files.length) {
		return;
	}
	file = target.files[0];

	console.log("main", file);

	const reader = new FileReader();

	console.log("main1", reader);

	reader.readAsArrayBuffer(file);

	//reader.readAsText(file);



	

	//reader.readAsText(file);

	reader.onload = function(e){
		var arrayBuffer = reader.result;

		console.log("main2",arrayBuffer);
		//alert(arrayBuffer);

		//console.log("SSSS",arrayBuffer.Uint8Array);
	}
	
	

	
	//const array = window.array.readAsArrayBuffer(file);



















	// var target = $('#fileUpload').get(0);
	// if (!target.files.length) {
	// 	return;
	// }
	// file = target.files[0];

	// console.log("main", file);
	// if (file.type !=="application/pdf") {
	// 	alert("Upload a pdf file");
	// 	return;
	// }
	// const objectURL = window.URL.createObjectURL(file);

	// //


	$("#a").html(`<iframe src="${arrayBuffer}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);

	$("#uploadButton").val("View Another");

});

