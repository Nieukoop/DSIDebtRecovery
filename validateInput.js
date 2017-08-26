function validate(){


	var form = {inputName:["name","email","description"],
				input:[document.getElementById("name").value,document.getElementById("email").value,
						document.getElementById("description").value]};

	console.log(form.inputName[0] , form.input[0]);
	var check = 1;

	for(var i = 0; i < form.input.length; i ++){
		if(form.input[i].length === 0){
			//console.log("Please enter a " + form.inputName[i]);
			$("#"+form.inputName[i]).css("border-color", "red");
			check *= form.input[i].length;
		}
		else if (form.input[i].length > 0){
			$("#"+form.inputName[i]).css("border-color", "transparent");
		}
		
	}

	if (check === 1)
		alert("Thank you for submitting your request " + form.input[0] + ". We will contact you shortly!");

}