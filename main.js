
$("#uploadButton").click(function (e) {
	e.preventDefault();
	var target = $('#fileUpload').get(0);
	if (!target.files.length) {
		return;
	}
	file = target.files[0];

	console.log("main", file);
	if (file.type !=="application/pdf") {
		alert("Upload a pdf file");
		return;
	}
	const objectURL = window.URL.createObjectURL(file);

	//const array = window.array.readAsArrayBuffer(file);


	$("#a").html(`<iframe src="${objectURL}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);

	$("#uploadButton").val("View Another");

});

