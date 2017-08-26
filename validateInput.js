function validate(){


	var form = {inputName:["name","email","description"],
				input:[document.getElementById("name").value,document.getElementById("email").value,
						document.getElementById("description").value]};

	console.log(form.inputName[0] , form.input[0]);

	for(var i = 0; i < form.input.length; i ++){
		if(form.input[i].length == 0){
			//console.log("Please enter a " + form.inputName[i]);
			$("#"+form.inputName[i]).css("border-color", "red");
		}
		else{
			$("#"+form.inputName[i]).css("border-color", "transparent");
		}
	}

	/*if(input[x].value.length == 0)

	if(input.value.length == 0){
	    $("#name").css("border-color", "red");
	}

	input = document.getElementById('email');

	if(input.value.length == 0){
	    alert("Please enter an email");
	    $("#name").css("border-color", "red");
	}*/

}