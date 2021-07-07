var name1 = document.getElementById("name1");
var lastname = document.getElementById("lastname");
var id = document.getElementById("id");
var category = document.getElementById("category");
var rankingPoints = document.getElementById("ranking_points");
var contact = document.getElementById("contact");
const btsuscribePlayer = document.getElementById('suscribePlayer')

btsuscribePlayer.addEventListener("click", function(){
    fetch('http://localhost:5000/suscribe?name=' + name1.value + "&lastname=" + lastname.value + "&id=" + id.value + "&category=" + category.value + "&ranking_points=" + rankingPoints.value + "&contact=" + contact.value)
    window.location = 'C:/Users/bajer/Documents/Programacion/Proyectos/PadelWeb/web.html'
    window.alert("Jugador dado de alta");
})

function functionReturn(){
    window.location = 'C:/Users/bajer/Documents/Programacion/Proyectos/PadelWeb/web.html'
 }
