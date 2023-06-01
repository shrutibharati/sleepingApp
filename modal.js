let openModal = document.querySelector('.setTimer'),
    showModal = document.querySelector('.modal'),
    closeModal = document.querySelector('.modalClose');

openModal.addEventListener('click', function(){
    showModal.style.display = 'block';
})  
closeModal.addEventListener('click', function(){
    showModal.style.display = 'none';
});