const html = document.querySelector('html');
const display = document.querySelector('.display');

function displayMessage(msgText, msgType) {
    const panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    html.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const btn = document.createElement('button');
    btn.textContent = 'x';
    panel.appendChild(btn);

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(images/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(images/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }

    btn.onclick = function () {
        panel.parentNode.removeChild(panel);
    }
}

display.onclick = function (){
    displayMessage('Your inbox is almost full — delete some mails', 'warning');
    // displayMessage('Brian: Hi there, how are you today?','chat');
}