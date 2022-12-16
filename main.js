
console.log(1);
$("#uploadButton").click(function (e) {
	e.preventDefault();
	pathValue = $("#fileUpload").val();
	console.log("main", pathValue);
	var ext = pathValue.substring(pathValue.lastIndexOf('.') + 1);
	let value = pathValue.split('\\').pop().split('/').pop();
	if (ext == "pdf") {
		console.log("main1", pathValue);

		
//-----------------------------------------------------------------------------------------------------
// 		const fs = require('fs');

// The path to the PDF file that you want to move
// const sourceFilePath = value;

// The path where you want to move the PDF file
// const destinationFilePath = './dummy_file/';

// Use the fs.rename() method to move the file from the source location to the destination location
//   fs.rename(sourceFilePath, destinationFilePath, (err) => {
//   if (err) {
//     Handle any errors that may occur while moving the file
//     console.error(err);
//   } else {
//     The file has been successfully moved
//     console.log('The file has been moved to the destination location.');
//   }
// });
		
		//console.log("pdffff",pdf);
		
		//Create a new FileReader object

		// var pdf = document.getElementById("fileUpload");
		// var reader = new FileReader(pdf);
		// // Listen for the "load" event, which is triggered when the PDF file is finished loading
		// 	// Get the raw PDF data
		// 	var pdfData = reader.result;
		// 	// Create a new Blob object using the PDF data
		// 	var pdfBlob = new Blob([pdfData], { type: "application/pdf" });
		// 	// Create a new URL for the PDF data
		// 	var pdfUrl = URL.createObjectURL(pdfBlob);
		// 	// Use the URL to create an <iframe> element, which will display the PDF
		// 	var pdfIFrame = document.createElement("iframe");
		// 	pdfIFrame.src = pdfUrl;
		// 	// Add the <iframe> to the page
		// 	document.body.appendChild(pdfIFrame);
	
			// Trigger the "load" event by calling the readAsArrayBuffer method on the FileReader 
			//reader.readAsArrayBuffer();


		//$("#a").html(``);
		// var object = new ActiveXObject("Scripting.FileSystemObject");
		// var file = object.GetFile(`value`);

		// file.Move("C:\Users\mogapps\OneDrive - Wipfli LLP\Documents\pdfUpload");
	
		// const fs = require('fs');

		// fs.copyFile('value', 'C:\Users\mogapps\OneDrive - Wipfli LLP\Documents\pdfUpload', (err) => {
		// 	if (err) throw err;
		// 	console.log('File was copied to destination');
		// });
		$("#a").html(`<iframe src="/dummy_file/${value}" style="margin-top:300px;height:600px;width:600px;" title="Iframe Example"></iframe>`);

		console.log(2);
	}
	else {
		alert("Upload a pdf file");
	}



});

