import { showToast } from '@wix/dashboard-sdk';

const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', () => {
    showToast({message: 'Hello World! TPA'});
});

document.body.insertAdjacentHTML('beforeend', 'Hello World! TPA');
document.body.appendChild(button);