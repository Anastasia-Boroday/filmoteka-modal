
const btnCloseRef = document.querySelector('.modal__btn-close');
const modalRef = document.querySelector('[data-modal]');
const backdropRef = document.querySelector('.backdrop');
const btnOpenRef = document.querySelector('[data-modal-open]');

btnOpenRef.addEventListener('click', onOpenModal);
btnCloseRef.addEventListener('click', onClosModal);
backdropRef.addEventListener('click', onBackdropClick);

// додати слухач клавіатури в функцію відкриття модалки
function onOpenModal() {
    document.addEventListener('keydown', onEscPress);
    modalRef.classList.toggle('is-hidden');
}
function onClosModal() {
    document.removeEventListener('keydown', onEscPress);
    modalRef.classList.toggle('is-hidden');

}
function onBackdropClick(evt) {
    if (evt.target===evt.currentTarget) {
        onClosModal();
    }
}
function onEscPress(evt) {
    const KEY_KODE_ESC = 'Escape';
    if (evt.code===KEY_KODE_ESC) {
        onClosModal();
    }
}