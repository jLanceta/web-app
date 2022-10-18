const btn = document.getElementsByClassName('boton')[0]
const botones = document.getElementsByClassName('botones')[0]
const resultado = document.getElementById('textoRes')
const btnConfirm = document.createElement("button")
const textPrompt = document.getElementById('textoPrompt')
btnConfirm.textContent = 'Confirmar'
btnConfirm.classList.add('btnConfirm')

let anterior = undefined
let comidaHoy = ''
let clicado = false
let prev = 0

window.onload = () => {
    setTimeout(() => {
        resultado.style.opacity = 0

        anterior = localStorage.getItem('comidaAnterior')
        
        setTimeout(() => {
            resultado.style.opacity = 1
            let mensaje = 'Elige la comida de hoy...'
            if (anterior != undefined) {
                mensaje += '<br><br>Ayer comimos:<br><span style="color: #f0f000">' + anterior + '</span>'
            }
            
            resultado.innerHTML = mensaje
        },1000)

    }, 500)

}

btn.addEventListener('click', () => {
    if (!clicado) {
        botones.appendChild(btnConfirm)
        botones.style.gridTemplateColumns = '1fr 1fr'
        btn.style.backgroundColor = 'rgb(255,50,50)'
        // btn.innerHTML = '<p>Seleccionar<br>otro</p>'
        btn.textContent = 'Seleccionar otro'
        
        clicado = true
    }
    
    let idxAnt = comida.indexOf(anterior)
    let idx = idxAnt
    
    while (idx == idxAnt || idx == prev) {
        idx = Math.floor(Math.random() * comida.length)
    }
    
    comidaHoy = comida[idx]
    prev = idx
    
    textPrompt.innerHTML = 'Comida de hoy: <span style="color: #00f000">' + comidaHoy + '</span>'
})

btnConfirm.addEventListener('click', () => {
    localStorage.setItem('comidaAnterior',comidaHoy)
    resultado.innerHTML = '<p class="finTexto">Has elegido: <span style="color: #00f000">' + comidaHoy +'</span></p>'
    btn.style.display = 'none'
    btnConfirm.style.display = 'none'
    textPrompt.style.display = 'none'
})
