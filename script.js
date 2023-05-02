
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



