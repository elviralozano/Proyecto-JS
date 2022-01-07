const nombre = document.getElementById("name")
const email = document.getElementById("email")
const number = document.getElementById("number")
const form = document.getElementById("form")
const parrafo = document.getElementById("respuesta")
const btnform = document.getElementById ("btn-form")

const local = window.localStorage 

btnform.onclick =() => {
    let contacto = {
        id: Math.random (1,100),
        nombre: nombre.value,
        email: email.value,
        number: number.value, 
    }

    guardarContacto (local, contacto)
}

form.addEventListener("submit", e=>{
    e.preventDefault()
    let respuesta = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        respuesta += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        respuesta += `El email no es valido`
        entrar = true
    }
    if(number < 18){
        respuesta += `No puedes hacer parte de esta convocatoria`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = respuesta
    }else{
        parrafo.innerHTML = "Pronto nos comunicamos contigo"
    }
})
