console.log(1);
$("#uploadButton").click(function(e){
	e.preventDefault();
	value = $("#fileUpload").val();
	console.log("main",value);
	var ext = value.substring(value.lastIndexOf('.') + 1);
        if(ext == "pdf" )
        {
			console.log("main1",value);
			//$("#a").html(``);
			$("#a").html(`<iframe src="${value}" style="height:200px;width:300px;" title="Iframe Example"></iframe>`);
			
			console.log(2);
        } 
        else
        {
			alert("Upload a pdf file");
        }
	
	

});

