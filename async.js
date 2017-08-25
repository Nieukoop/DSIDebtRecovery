function ajax(){

  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 200){
      //document.getElementById("surname").innerHTML = http.responseText;


      document.getElementById("ajax").innerHTML =
              http.responseText;

              //document.write(http.responseText);
  }

};
  http.open("GET", "test.xml", true);
  http.send();
};
