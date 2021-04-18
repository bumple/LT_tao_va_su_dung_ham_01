let arr1 = ["Polaris", "Aldebaran",
    "Deneb", "Vega", "Altair",
    "Dubhe", "Regulus"];

let arr2 = ['Ursa Minor', 'Tarurus',
    'Cygnus', 'Lyra', 'Aquila',
    'Ursa Major', 'Leo'];
let text = prompt("nhap vao ten ngoi sao")


function match(a) {
    for (let i = 0; i < arr1.length; i++) {
        if (a === arr1[i]) {
            return arr2[i];
        }
    }
}

match(text);
document.write(match(text));
