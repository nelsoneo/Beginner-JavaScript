const bton = document.querySelector('button');
const text = document.querySelector('p');

bton.addEventListener('click', updateBton);

function updateBton() {
    if (bton.textContent === 'Start machine') {
        bton.textContent = 'Stop machine';
        text.textContent = 'The machine has started';
    } else {
        bton.textContent = 'Start machine';
        text.textContent = 'The machine is stopped';
    }
}