function listaCiudades() {
  
    let ciudades = localStorage.getItem("CIUDADES");
    if (ciudades) {
      ciudades = JSON.parse(ciudades);
    } else {
      ciudades = [];
    }
    return ciudades;
  }
  
