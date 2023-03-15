import { showToast, observeState} from '@wix/dashboard-sdk';

let stateData;
observeState((state) => {
    console.log('State changed', state);
})

const text = document.createElement('p')
text.innerText = 'State ';
document.body.appendChild(text);
console.log("I'm communicating with you through the void!");

const toastOptions = {
    message: 'Toast 1 Hello World! Hope you enjoy this toast',
    timeout: 'none',
    type: 'error',
    priority: 'low',
    action: {
        uiType: 'link',
        text: 'Click me',
        removeToastOnClick: false,
        onClick: () => {
            text.innerText = 'Clicked!'
        }
    }
}

// const toastOptions2 = {
//     message: 'Toast 2 Hello World! Hope you enjoy this toast',
//     timeout: 'none',
//     type: 'error'
// }


// const toastOptions3 = {
//     message: 'Toast 3 Hello World! Hope you enjoy this toast',
//     timeout: 'none',
//     type: 'error',
//     priority: 'high'
// }


const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', () => {
    showToast(toastOptions);
    //showToast(toastOptions2);
    //showToast(toastOptions3);
    navigate(PageComponentId.home);
});

document.body.insertAdjacentHTML('beforeend', 'Hello World! TPA');
document.body.appendChild(button); 

