const towarEl = document.querySelector('.towar')
const dostavkaEl = document.querySelector('.dostavka')
const sumaEl = document.querySelector('.suma')

function sumInputs() {

    let num1 = Number(document.getElementById("i-12_1").value);
    let num2 = Number(document.getElementById("i-12_2").value);

    document.getElementById("out-13").innerHTML = num1 + num2;

}