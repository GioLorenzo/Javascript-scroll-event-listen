let header = document.createElement('header');
let header_img = document.createElement('img');
header_img.setAttribute('class', 'header-img');
header_img.setAttribute('src', './header.jpg');
header.appendChild(header_img);
document.body.appendChild(header);

let intro = document.createElement('div');
intro.setAttribute('class', 'intro');

let intro_title = document.createElement('div');
intro_title.setAttribute('class', 'intro-title');

let h1 = document.createElement('h1');
h1.innerText = 'Effect   Appear!';