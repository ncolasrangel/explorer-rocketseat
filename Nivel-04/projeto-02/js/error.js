export const alertError = {
    element: document.querySelector('.alert-error'),
    open() {
        alertError.element.classList.add('open')
    },
    remove() {
        alertError.element.classList.remove('open')
    }
}