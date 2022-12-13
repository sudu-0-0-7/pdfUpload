console.log(1);
$("#uploadButton").click(function(e){
	e.preventDefault();
	value = $("#fileUpload").val();
	console.log("main",value);
	var ext = value.substring(value.lastIndexOf('.') + 1);
        if(ext == "pdf" )
        {
		var displayElement = document.querySelector("#displayPdf");
	console.log("display",value);
	console.log(3);
	$('.accordion').html('<iframe src="value" frameborder="0" scrolling="no" id="myFrame"></iframe>');
			console.log(2);
        } 
        else
        {
			alert("Upload a pdf file");
        }
	
	

});

