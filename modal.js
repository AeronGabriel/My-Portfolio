const openModal = document.querySelector('.aboutBtn');
const closeModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
