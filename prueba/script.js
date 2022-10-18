const btn = document.querySelector('.boton')
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')

window.onload = () => {
    // setTimeout(() => {
        div1.style.right = '90%'
        div2.style.right = '70%'
        div3.style.right = '50%'        

        div1.style.opacity = '0.7'
        div2.style.opacity = '0.7'
        div3.style.opacity = '0.7'

        btn.style.left = '50%'
        btn.style.opacity = 1


        /*let rect = div2.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);*/
    // }, 500)
}

// document.addEventListener('mousemove', (event) => {
//     //console.log(event.movementX)

//     if (event.x >= window.innerWidth/2) {
//         div1.style.left = '20%'
//         div2.style.left = '30%'
//         div3.style.left = '40%'
//     } else {
//         div1.style.left = '10%'
//         div2.style.left = '20%'
//         div3.style.left = '30%'
//     }
    
//     /*if (event.movementX >= 7) {
//         //div1.style.backgroundColor = "aqua"
//         div1.style.left = '20%'
//         div2.style.left = '30%'
//         div3.style.left = '40%'
//     } else if (event.movementY <= -7) {
//         div1.style.backgroundColor = "red"
//         div1.style.left = '10%'
//         div2.style.left = '20%'
//         div3.style.left = '30%'
//     }*/
// })

// document.querySelectorAll('*').forEach((v) => {v.style.backgroundColor = 'rgb(150,150,150)'})