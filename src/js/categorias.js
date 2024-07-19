
 function cambiarpagina(){
    let refereciaSelect = document.getElementById("selec-categoria")
    let paginaEnlace = refereciaSelect.value
    if (paginaEnlace) {
        window.location.href=paginaEnlace
    }
 }

let btnEnviar = document.getElementById("btnEnviar")
function validarVacios(){
    let inputNombre = document.getElementById("inputNombre").value
    let inputGmail = document.getElementById("inputGmail").value
    let inputMensaje = document.getElementById("inputMensaje").value
    if (inputNombre=="" || inputGmail=="" || inputMensaje=="") {
        alert("Espacios vacios")
    }
}
btnEnviar.addEventListener("click",validarVacios)

