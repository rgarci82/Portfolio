let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for (let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-mode"
    }
    else{
        document.body.classList.remove("dark-mode")
    }
}

function contact(event){
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visable"
    emailjs
        .sendForm(
            'service_3rg5d0k',
            'template_xsod9jz',
            event.target,
            'T1xOmRs6tCBAKRMan'
        ).then(() => {
            loading.classList.remove("modal__overlay--visable")
            success.classList += (" modal__overlay--visable")
        }).catch(() => {
            loading.classList.remove("modal__overlay--visable")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on ruben.garcia30102@gmail.com"
            )
        })

}

function toggleModal(){
    isModalOpen = !isModalOpen
    if (isModalOpen){
        return document.body.classList.remove("modal__open")
    }
    document.body.classList += (" modal__open")
}