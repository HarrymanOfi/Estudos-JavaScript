function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Bebe
                img.setAttribute('src', 'imagens/bebe-h.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else {
                //Idosos
                img.setAttribute('src', 'imagens/idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Bebe
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta-m.jpg')
            } else {
                //Idosos
                img.setAttribute('src', 'imagens/idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}