window.onload = function() {
    const currentValue = document.getElementById('color-value');

    document.getElementById('color-generate').addEventListener('click', function (event) {
    console.log(document.getElementById)
    const rgb = randomRGB();

    const content = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    document.documentElement.style.setProperty('--initial-color', content);
    currentValue.textContent = content;
    });

  };


const randomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomRGB = () =>  [
     randomNumber(0, 255),
     randomNumber(0, 255),
     randomNumber(0, 255)
];