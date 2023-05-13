
const modalt=document.getElementById("container-modal")
const cerrar=document.getElementById("cerrar")
const img=document.getElementById("photo")


function openimage(reference) {
    img.src = reference
   
    modalt.classList.add("ver");

}
cerrar.addEventListener("click",()=>{
    modalt.classList.remove("ver")

})



function abrirModal(){
    const launch=document.getElementById("modal-numeros");
    launch.classList.add("view")
    
    }
    function cerrate() {
        const launch=document.getElementById("modal-numeros");
        launch.classList.remove("view")
    }






