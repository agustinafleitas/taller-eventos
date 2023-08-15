function DivSaluda(event){
    alert("Hola! Soy el div");
    event.stopPropagation();
}

const areaDiv = document.getElementById("boton");
areaDiv.addEventListener("click", DivSaluda);


function saludar(event) {
    alert("Hola!");
    event.stopPropagation();
}