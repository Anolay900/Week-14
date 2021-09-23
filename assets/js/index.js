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

function changeTheme() {
    switch (document.getElementById('theme').value)
    {case "blue": 
    document.getElementById('themeColor').style.background = 'rgb(202, 234, 255)';
    document.getElementById('navColor').style.background = 'white';
    document.getElementById('textColor').style.color = 'rgb(18, 131, 206)'; break;

    case "white":
    document.getElementById('themeColor').style.background = 'rgb(242, 247, 248)';
    document.getElementById('navColor').style.background = 'white';
    document.getElementById('textColor').style.color = 'rgb(18, 131, 206)'; break;

    case "black":
        document.getElementById('themeColor').style.background = 'rgb(27, 39, 44)';
        document.getElementById('navColor').style.background = 'rgb(42, 66, 77)';
        document.getElementById('textColor').style.color = 'white'; break;
    }
}