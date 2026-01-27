function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgcrop')
    var data = new Date()
    var hora =  data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#88b9da'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#a5834f'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1d1d2b'
    }
}