
const rankingTable = document.getElementById("rankingtable")
const categoriesSelect = document.getElementById('categoriesSelect');
window.onload = refreshCategoriesSelect()
window.onload = refreshRankingTable("1")

categoriesSelect.addEventListener("change", function(){
refreshRankingTable(categoriesSelect.value);
})

function refreshRankingTable(string){
  fetch('http://localhost:5000/main?category=' + string)
  .then(response => response.json())
  .then(data => buildRankingTable(data))
  .catch (error => console.log(error.message));
   
}

function refreshCategoriesSelect(){
  fetch('http://localhost:5000/select')
  .then(response => response.json())
  .then(data => buildCategoriesSelect(data))
  .catch (error => console.log(error.message));
   
}

function btedit(affiliateNumber){
    window.location = 'C:/Users/bajer/Documents/Programacion/Proyectos/PadelWeb/abm.html?affiliateNumber=' +  affiliateNumber
}

function buildCategoriesSelect(data){
  categoriesSelect.innerHTML = " ";
  for(let i=0; i<data.length; i++){
    let row = `<option value="${data[i].category_code}">${data[i].category_name}</option>`;
    categoriesSelect.innerHTML += row;
  }
}

function buildRankingTable(data){
  rankingTable.innerHTML = " "
  for(let i=0; i<data.length; i++){
    let row = `<tr>
                <td>${i+1}</td>
                <td>${data[i].name + " " + data[i].lastname}</td>
                <td>${data[i].ranking_points}</td>
                <td><button id="edit" value="${i+1}" name="edit" onclick="btedit(${data[i].affiliate_number})">editar</button></td>
                </tr>` ;
   rankingTable.innerHTML += row;
  }
}

