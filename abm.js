var affiliateNumber = document.getElementById("affiliate");
var name1 = document.getElementById("name1");
var lastname = document.getElementById("lastname");
var id = document.getElementById("id");
var category = document.getElementById("category");
var rankingPoints = document.getElementById("ranking_points");
var contact = document.getElementById("contact");
const btedit = document.getElementById("edit")
const btunsuscribe = document.getElementById("unsuscribe")
const url = new URL(window.location.href);
window.onload = load(url.searchParams.get("affiliateNumber"))

function load(affiliateNumber){
   fetch('http://localhost:5000/edit?affiliateNumber=' + affiliateNumber)
  .then(response => response.json())
  .then(data => refreshRankingTable(data))
  .catch (error => console.log(error.message));
}

function refreshRankingTable(data){
   affiliateNumber.value = data[0].affiliate_number;
   name1.value = data[0].name;
   lastname.value = data[0].lastname;
   id.value = data[0].id;
   category.value = data[0].category;
   rankingPoints.value = data[0].ranking_points;
   contact.value = data[0].contact;
}

btedit.addEventListener("click", function(){
   fetch('http://localhost:5000/modify?affiliateNumber=' + affiliateNumber.value + "&name=" + name1.value + "&lastname=" + lastname.value + "&id=" + id.value + "&category=" + category.value + "&ranking_points=" + rankingPoints.value + "&contact=" + contact.value)
   load(affiliateNumber.value)
   window.alert("Información modificada");
})

btunsuscribe.addEventListener("click", function(){
   fetch('http://localhost:5000/unsuscribe?affiliateNumber=' + affiliateNumber.value)
   .catch (error => console.log(error.message));
   window.location = 'C:/Users/bajer/Documents/Programacion/Proyectos/PadelWeb/web.html'
   window.alert("Jugador dado de baja"); 
})

affiliateNumber.addEventListener("change", function(){
   fetch('http://localhost:5000/edit?affiliateNumber=' + affiliateNumber.value)
   .then(response => response.json())
   .then(data => refresh(data))
   .catch (error => console.log(error.message));
})

function refresh(data){
   if (data.lenght == 0){
      name1.value = "";
      lastname.value = "";
      id.value = "";
      category.value = "";
      rankingPoints.value = "";
      contact.value = "";
   }
   else{
      name1.value = data[0].name;
      lastname.value = data[0].lastname;
      id.value = data[0].id;
      category.value = data[0].category;
      rankingPoints.value = data[0].ranking_points;
      contact.value = data[0].contact;
   }
}