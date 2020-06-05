// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Here';
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let headerImage = document.querySelector('img');
headerImage.onclick = function () {
    if (headerImage.getAttribute('src') === 'images/asg.jpg') {
        headerImage.setAttribute('src','images/asg2.jpg');
    }
    else {
        headerImage.setAttribute('src', 'images/asg.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername () {
    let myName = prompt('please enter your username.');
    if (!myName) setUsername();
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
}

if (!localStorage.getItem('name')) {
    setUsername();
}
else {
    myHeading.textContent = localStorage.getItem('name');
}

myButton.onclick = function () {
    setUsername();
}