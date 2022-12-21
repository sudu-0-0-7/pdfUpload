$('body').addClass('stop-scrolling');
const dragArea = document.querySelector('.dragAreaa');
let pdfFile;

dragArea.addEventListener('dragover', (e) => {
	e.preventDefault();
	console.log("File is inside the drag area");
});

dragArea.addEventListener('drop', (e) => {
	e.preventDefault();
	$('body').addClass('start-scrolling');
	pdfFile = e.dataTransfer.files[0];
	if (pdfFile.type == 'application/pdf') {
		const reader = new FileReader();
		reader.readAsDataURL(pdfFile);
		reader.onload = function (e) {
			var pdf = reader.result;
			$("#a").html(`<iframe src="${pdf}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);
		}
		$("#uploadButton").val("View Another");
	}
	else {
		alert("Enter a pdf file");
	}
});

$("#uploadButton").click(function (e) {
	e.preventDefault();
	$('body').addClass('start-scrolling');
	var target = $('#fileUpload').get(0);
	if (!target.files.length) {
		return;
	}
	file = target.files[0];
	if (file.type == 'application/pdf') {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (e) {
			var pdf = reader.result;
			$("#a").html(`<iframe src="${pdf}" style="height:600px;width:800px;" title="Iframe Example"></iframe>`);
		}
		$("#uploadButton").val("View Another");
	}
	else {
		alert("Enter a pdf file");
	}
});


