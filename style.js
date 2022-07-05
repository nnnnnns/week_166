const mileage = document.querySelector('#mileage');
const volumeRange = document.querySelector('#volume');

mileage.addEventListener('input', function() {
    volumeRange.value = mileage.value;
})

volumeRange.addEventListener('input', function() {
    mileage.value = volumeRange.value;
})

document.getElementById('price').addEventListener('click', () => {

    const brand = document.querySelector('#brands').value;
    const model = document.querySelector('#models').value;

    const year = document.querySelector('[name="year"]:checked').value;
    const body = document.querySelector('[name="body"]:checked').value;
    const transmission = document.querySelector('[name="transmission"]:checked').value;
    const engine = document.querySelector('[name="engine"]:checked').value;
    const drive = document.querySelector('[name="drive"]:checked').value;
    const power = document.querySelector('#power').value;

    const checkbox = document.querySelector('#check').checked ? 100 : 0;

    const resultHTML = document.querySelector('#result');
    
    const result = Number(brand) + Number(model) + checkbox + Number(volumeRange.value) + Number(year) + Number(body) + Number(transmission) + Number(engine) + Number(drive) + Number(power);

    resultHTML.innerHTML = 'Стоимость Вашего авто: ' + result + ' рублей';

});