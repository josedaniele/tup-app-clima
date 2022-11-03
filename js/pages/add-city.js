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
    let ciudades = listaCiudades();
    let validacion = true;
    validacion = comprobacion(nuevaCiudad, ciudades);
    if (validacion == true) {
      ciudades.push(nuevaCiudad);
      localStorage.setItem("CIUDADES", JSON.stringify(ciudades));
      document.getElementById("alerta1").style.display= "block";
      setTimeout(() => {
        document.getElementById("alerta1").style.display= "none";
      }, 2000)
    } else {
      document.getElementById("alerta3").style.display = "block";
      setTimeout(() => {
        document.getElementById("alerta3").style.display= "none";
      }, 2000)
  }
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