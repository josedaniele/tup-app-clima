function listaCiudades() {
    let ciudades = localStorage.getItem("CIUDADES");
    if (ciudades) {
      ciudades = JSON.parse(ciudades);
    } else {
      ciudades = [];
    }
    return ciudades;
  }

function agregarCiudad() {
    let nuevaCiudad = document.getElementById("ciudadIngresada").value.toUpperCase();
    if (nuevaCiudad.length == 0){
      return alert("INGRESE UN VALOR")
    }
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${nuevaCiudad}&appid=c223f149ad4b4620f47b1f5f8a1ab787&units=metric&lang=es`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        let ciudades = listaCiudades();
        let validacion = comprobacion(nuevaCiudad, ciudades);
        if(data.cod == 404){
          document.getElementById("alerta2").style.display = "block";
          setTimeout(() => {
            document.getElementById("alerta2").style.display= "none";
          }, 2000)
        }
        else if (validacion == true) {
          ciudades.push(nuevaCiudad);
          localStorage.setItem("CIUDADES", JSON.stringify(ciudades));
          document.getElementById("alerta1").style.display= "block";
          setTimeout(() => {
            document.getElementById("alerta1").style.display= "none";
          }, 2000)
        } else if (validacion == false){
          document.getElementById("alerta3").style.display = "block";
          setTimeout(() => {
            document.getElementById("alerta3").style.display= "none";
          }, 2000)
          } 
        })


        .finally(()=>{console.log("terminado")}   )
}
      
function comprobacion(nuevaCiudad, ciudades) {
  if (ciudades.length != 0) {
    for (let i = 0; i < ciudades.length; i++) {
      let ciudad = ciudades[i];
      if (ciudad == nuevaCiudad) {
        return false;
      }
    }
  }
  return true;  
}