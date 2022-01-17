
const buttonA = document.querySelector('#button_A');
const headerA = document.querySelector('#header_A');

buttonA.onclick = () => {
    const name = prompt('What is your name!');

    if(name === '') {
        const name = prompt('Please into your name');
    } else {
        alert(`Hello ${name}, nice to see you`);
    }

    headerA.textContent = `Welcome ${name}`;
}

console.log(buttonA);
console.log(headerA);
