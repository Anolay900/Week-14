let a = 0;

function changeRed() {
    let change = document.getElementById('color1');

    if (a % 2 > 0) {
        change.style.background = "rgb(252, 92, 92)";
        a += 1
    }
    else {
        change.style.background = "red";
        a += 1
    }
}

let b = 0;

function changeBlue() {
    let change = document.getElementById('color2');

    if (b % 2 > 0) {
        change.style.background = "rgb(91, 91, 247)";
        b += 1
    }
    else {
        change.style.background = "blue";
        b += 1
    }
}

let c = 0;

function changeViolet() {
    let change = document.getElementById('color3');

    if (c % 2 > 0) {
        change.style.background = "rgb(185, 119, 247)";
        c += 1
    }
    else {
        change.style.background = "blueviolet";
        c += 1
    }
}

let n = 0;

function imgChange() {
    let image = document.getElementById('imageChange');

    if (n % 2 > 0) {
        image.src = '../assets/images/gallery/img1.jfif';
        n += 1
    }
    else {
        image.src = '../assets/images/gallery/img2.jfif';
        n += 1
    }
}
