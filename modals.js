const openModal = document.querySelector('.aboutBtn');
const openModal2 = document.querySelector('.projBtn');
const closeModal = document.querySelector('.closeModal');
const closeModal2 = document.querySelector('.closeModal2');
const abtmodal = document.querySelector('.aboutModal');
const projmodal = document.querySelector('.projectsModal');

openModal.addEventListener('click', () => {
    abtmodal.showModal();
})

closeModal.addEventListener('click', () => {
    abtmodal.close();
})


openModal2.addEventListener('click', () => {
    projmodal.showModal();
})

closeModal2.addEventListener('click', () => {
    projmodal.close();
})
