export const Modal = { // object literals
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close() 
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) { // fechando modal pelo esc
    console.log(event.key)

    if(event.key === 'Escape') {
        Modal.close()
    }
}