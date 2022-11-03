function listaCiudades() {
  
    let ciudades = localStorage.getItem("CIUDADES");
    if (ciudades) {
      ciudades = JSON.parse(ciudades);
    } else {
      ciudades = [];
    }
    return ciudades;
  }
  
function ciudadesSelect(){
    let ciudades = listaCiudades()
    const selectCiudades = document.getElementById("ciudades")
    if(ciudades.length != 0) {
        for (let i = 0; i < ciudades.length; i++) {
        option = document.createElement('option')
        option.value= ciudades[i]
        option.innerHTML = ciudades[i];
        selectCiudades.appendChild(option)
        }
      }else{
        document.getElementById("form-city-list").innerText = "No hay ciudades cargadas, vaya a la seccion agregar ciudad"
        document.getElementById("form-city-list").style.color = "red";
        document.getElementById("form-city-list").style.fontSize = "20px"
      } 
}
ciudadesSelect()

function consulta(){
    let ciudadSeleccionada= document.getElementById("ciudades").value
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudadSeleccionada}&appid=c223f149ad4b4620f47b1f5f8a1ab787&units=metric&lang=es`
    let $cargando = document.getElementById("carga");
    $cargando.style.display = 'block'
    fetch(url)
        .then((response) => response.json())
        .then(data => {
        console.log(data)
         let resultado= document.getElementById("section-weather-result")
         resultado.innerHTML = `
         <div class="carta">
             <h3>${data.name}</h3>
             <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
             <p>Temperatura: ${data.main.temp} </p>
             <p>Sensacion térmica:${data.main.feels_like} </p>
             <p>Humedad: ${data.main.humidity}%</p>
             <p>Velocidad del viento:${data.wind.speed} km/h</p>
             <p>Presion:${data.main.pressure} P</p>
         </div>
        `
        
    })
        .catch(err=> console.log(err))
        .finally(()=>{$cargando.style.display = 'none';}     )
}