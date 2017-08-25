function validate(){
	var input = document.getElementById('name');


if(input.value.length == 0){
    alert("Please enter a name");
    $("#name").css("border-color", "red");

    setInterval(function(){ alert("Hello"); }, 3000);
}



}