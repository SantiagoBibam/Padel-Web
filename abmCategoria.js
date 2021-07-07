var categoryCode = document.getElementById("categoryCode");
var categoryName = document.getElementById("categoryName");
const btedit = document.getElementById("edit")
const btsuscribe = document.getElementById("suscribe")
const btunsuscribe = document.getElementById("unsuscribe")

categoryCode.addEventListener("change", function(){
    fetch('http://localhost:5000/category?categoryCode=' + categoryCode.value)
    .then(response => response.json())
    .then(data => updateCategoryName(data))
    .catch (error => console.log(error.message));
})

function updateCategoryName(data){
    if(data.length==0){
        categoryName.value = ""
    }
    else{
        categoryName.value = data[0].category_name;
    }
}

btsuscribe.addEventListener("click", function(){
    fetch('http://localhost:5000/categorysuscribe?categoryCode=' + categoryCode.value + '&categoryName=' + categoryName.value)
    window.alert("Categoría dada de alta")
})

btedit.addEventListener("click", function(){
    fetch('http://localhost:5000/categoryedit?categoryCode=' + categoryCode.value + '&categoryName=' + categoryName.value)
    window.alert("Categoría editada")
})

btunsuscribe.addEventListener("click", function(){
    fetch('http://localhost:5000/categoryunsuscribe?categoryCode=' + categoryCode.value)
    categoryCode.value = ""
    categoryName.value = ""
    window.alert("Categoría eliminada")

})