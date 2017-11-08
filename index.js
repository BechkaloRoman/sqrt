const a = Number(prompt('Enter the value:\n' + 'A= '));
const b = Number(prompt('Enter the value:\n' + 'B= '));
const c = Number(prompt('Enter the value:\n' + 'C= '));
document.write('Your equation:');
document.write('<u>' + a + 'x^2+ ' + b + 'x+ ' + c + ' =0' + '</u>');

function quadraticEquation(a, b, c) {
    let x, x1, x2;
    const d = disc(a, b, c);
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return '<br>' + 'X1= ' + x1 + '<br>' + 'X2= ' + x2;
    }
    else if (d === 0) {
        x = -b / (2 * a);
        return 'Discriminator = 0. So one answer: X= ' + x;
    }
    return 'd<0. Not result';
}

function disc(a, b, c) {
    return (b * b) - (4 * a * c);
}

document.write('<br>' + 'Your result:  ');
const result = quadraticEquation(a, b, c);
document.write(result);
