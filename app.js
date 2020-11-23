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

let intro_content = document.createElement('div');
intro_content.setAttribute('class', 'intro-content');

let intro_text = document.createElement('div');
intro_text.setAttribute('class', 'intro-text');

let h4 = document.createElement('h4');
h4.innerText = 'Take Amazing Shots'
let p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur facere quae, iste est quo, et, nam qui quasi ducimus delectus itaque modi nesciunt alias similique voluptates ab totam laudantium deserunt? Explicabo quam at hic vitae distinctio molestiae saepe ducimus.'

let intro_img = document.createElement('img');
intro_img.setAttribute('class', 'intro-img');
intro_img.setAttribute('src', './intro.jpg');

let empty = document.createElement('div')
empty.setAttribute('class', 'empty');

intro_title.appendChild(h1);
intro.appendChild(intro_title);

intro_text.appendChild(h4);
intro_text.appendChild(p);

intro_content.appendChild(intro_text);
intro_content.appendChild(intro_img);


intro.appendChild(intro_title);
intro.appendChild(intro_content);

document.body.appendChild(intro);
document.body.appendChild(empty);