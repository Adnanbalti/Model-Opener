var model = document.querySelectorAll('.model')
var overlay = document.querySelector('.overlay')
var model_1 = document.querySelector('.model-1')
var close = document.querySelector('.close')
const body = document.querySelector('body')




body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.classList.add('hidden')
        model_1.classList.add('hidden')
    }
})


for (i = 0; i < model.length; i++) {
    model[i].addEventListener('click', () => {
        overlay.classList.remove('hidden')
        model_1.classList.remove('hidden')
    })
}

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    model_1.classList.add('hidden')
})

close.addEventListener('click', () => {
    overlay.classList.add('hidden')
    model_1.classList.add('hidden')
})