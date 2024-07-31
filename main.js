let tugma = document.querySelector('.btn');
let quti = document.querySelector('.box');

tugma.addEventListener('click', () => {
    if(quti.classList.contains('new')){
        quti.classList.remove('new');
        tugma.textContent = 'Knopka';
    } else {
        quti.classList.add('new');
        tugma.textContent = 'Change';
    }
});