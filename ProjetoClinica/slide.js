var slide = document.querySelector('.manual-btn') /*guarda a navegaçãp manual dentro de uma variável*/ 
var cont = 1

document.getElementById('slide1').checked = true
setInterval(() => {
    proximoSlide()
}, 5000)

function proximoSlide(){
    cont++
    if (cont > 3){
        cont = 1
    }

document.getElementById('slide'+cont).checked = true
}
