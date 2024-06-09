const openModal = document.querySelector("#abrir_modal")
const modal = document.querySelector(".Modal")
const closeModal = document.querySelector("#cerar_modal")

openModal.addEventListener("click", (e)=>{
    e.preventDefault
    modal.classList.add("modal--show")
})
closeModal.addEventListener("click", (e)=>{
    e.preventDefault
    modal.classList.remove("modal--show")
})
export const fecha = document.getElementById("#fecha").value
export const precio = document.getElementById("#precio").value
export const tipo = document.getElementById("#tipo").value
