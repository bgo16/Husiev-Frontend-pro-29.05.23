// let hours1 = prompt('Введіть кількість годин:');

// let seconds = hours1 * 3600;

// alert(`В ${hours} годинах ${seconds} секунд`);

document.querySelector('button').onclick = converter;

function converter() {
    let hours = document.querySelector('.hours').value;
    let seconds = hours * 3600;
    document.querySelector('.text').innerHTML = `В ${hours} годинах ${seconds} секунд.`;
    alert(`В ${hours} годинах ${seconds} секунд.`);
}
