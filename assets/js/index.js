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
    document.getElementsByClassName('textColor')[0].style.color = 'rgb(18, 131, 206)';
    document.getElementsByClassName('textColor')[1].style.color = 'rgb(18, 131, 206)'; break;

    case "white":
    document.getElementById('themeColor').style.background = 'rgb(242, 247, 248)';
    document.getElementById('navColor').style.background = 'white';
    document.getElementsByClassName('textColor')[0].style.color = 'rgb(18, 131, 206)';
    document.getElementsByClassName('textColor')[1].style.color = 'rgb(18, 131, 206)'; break;

    case "black":
        document.getElementById('themeColor').style.background = 'rgb(27, 39, 44)';
        document.getElementById('navColor').style.background = 'rgb(42, 66, 77)';
        document.getElementsByClassName('textColor')[0].style.color = 'white';
        document.getElementsByClassName('textColor')[1].style.color = 'white'; break;
    }
}

function data() {

    document.getElementById('error').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
    document.getElementById('helloLogin').innerHTML = "";
    document.getElementById('mail').style.border = 'none';
    document.getElementById('mail').style.borderBottom = '4px solid rgb(84, 133, 145)';
    document.getElementById('mail').style.borderRadius = '0px';
    document.getElementById('name').style.border = 'none';
    document.getElementById('name').style.borderBottom = '4px solid rgb(84, 133, 145)';
    document.getElementById('name').style.borderRadius = '0px';
    document.getElementById('tel').style.border = 'none';
    document.getElementById('tel').style.borderBottom = '4px solid rgb(84, 133, 145)';
    document.getElementById('tel').style.borderRadius = '0px';
    document.getElementById('password').style.border = 'none';
    document.getElementById('password').style.borderBottom = '4px solid rgb(84, 133, 145)';
    document.getElementById('password').style.borderRadius = '0px';
    document.getElementById('repeat').style.border = 'none';
    document.getElementById('repeat').style.borderBottom = '4px solid rgb(84, 133, 145)';
    document.getElementById('repeat').style.borderRadius = '0px';
    let login = document.getElementsByClassName('record__input')[0].value;

    if (document.getElementsByClassName('record__input')[0].value == '') {
        document.getElementById('name').style.border = '3px solid red';
        document.getElementById('name').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Некорректный логин<br>';
    }

    if (document.getElementsByClassName('record__input')[1].value == '') {
        document.getElementById('mail').style.border = '3px solid red';
        document.getElementById('mail').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Некорректный email<br>';
    }

    if (document.getElementsByClassName('record__input')[2].value == '') {
        document.getElementById('tel').style.border = '3px solid red';
        document.getElementById('tel').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Некорректный номер телефона<br>';
    }

    if (document.getElementsByClassName('record__input')[3].value == '') {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('password').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Некорректный пароль<br>';
    }

    if (document.getElementsByClassName('record__input')[4].value == '') {
        document.getElementById('repeat').style.border = '3px solid red';
        document.getElementById('repeat').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Некорректный ввод<br>';
    }

    else {
        document.getElementById('helloLogin').innerHTML += `Добро пожаловать, ${login}!`;
        document.getElementById('helloLogin').style.color = 'rgb(84, 133, 145)';
    }

    let inputPassword = document.getElementsByClassName('record__input')[3];
    let inputRepeat = document.getElementsByClassName('record__input')[4];

    if (inputPassword.value != inputRepeat.value) {
        document.getElementById('password').style.border = '3px solid red';
        document.getElementById('password').style.borderRadius = '15px';
        document.getElementById('repeat').style.border = '3px solid red';
        document.getElementById('repeat').style.borderRadius = '15px';
        document.getElementById('error').innerHTML += 'Пароли не совпадают<br>';
    }

    if (inputPassword.value == inputRepeat.value && inputPassword.value != '') {
        document.getElementById('correct').innerHTML += 'Пароли совпадают<br>';
        document.getElementById('correct').style.color = 'green';
    }
    
}

function cheackPass() {
    document.getElementById('security').innerHTML = "";
    let inputPassword = document.getElementById('password');
    if (inputPassword.value.length <= 5){
        document.getElementById('security').style.color = 'red';
        document.getElementById('security').innerHTML += 'Пароль слишком короткий<br>';
    }
    else if (inputPassword.value.length <= 7 && inputPassword.value.length > 5) {
        document.getElementById('security').style.color = '#ffba00';
        document.getElementById('security').innerHTML += 'Пароль слишком короткий<br>';
    }
    else if (inputPassword.value.length > 7) {
        document.getElementById('security').style.color = 'green';
        document.getElementById('security').innerHTML += 'Надежный пароль<br>';
    }
}

password.addEventListener('keyup', cheackPass);