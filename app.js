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