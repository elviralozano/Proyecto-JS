const guardarContacto = (local, contacto) =>{
    local.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}