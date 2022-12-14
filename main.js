$('body').addClass('stop-scrolling');
const dragArea = document.querySelector('.dragAndDrop');
let pdfFile;

dragArea.addEventListener('dragover', (e) => {
	e.preventDefault();
	console.log("File is inside the drag area");
});

dragArea.addEventListener('drop', (e) => {
	e.preventDefault();
	$('#fileUpload').val("")
	$('body').addClass('start-scrolling');
	pdfFile = e.dataTransfer.files[0];
	if (pdfFile.type == 'application/pdf') {
		const reader = new FileReader();
		reader.readAsDataURL(pdfFile);
		reader.onload = function (e) {
			var pdf = reader.result;
			$("#pdfDisplay").html(`<iframe src="${pdf}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);
		}
		$("#uploadButton").val("View Another");
	}
	else {
		alert("Enter a pdf file");
	}
});

$("#uploadButton").click(function (e) {
	e.preventDefault();

	var target = $('#fileUpload').get(0);
	if (!target.files.length) {
		alert("Enter a pdf file");
		return;
	}
	$('body').addClass('start-scrolling');
	file = target.files[0];
	if (file.type == 'application/pdf') {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (e) {
			var pdf = reader.result;
			$("#pdfDisplay").html(`<iframe src="${pdf}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);
		}
		$("#uploadButton").val("View Another");
	}
	else {
		alert("Enter a pdf file");
	}
});


