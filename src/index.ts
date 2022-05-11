import {createSDK} from "wix-backoffice-sdk";

const SDK = createSDK({origin: 'https://manage.wix.com'});

function showToastButton() {
  const button = document.createElement('button');
  button.innerText = 'Show a toast';
  button.addEventListener('click', () => {
    SDK.showToast({
      message: 'Hi! This is a message from TPA outside of Wix.'
    })
  });
  return button;
}



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



const title = () => `<h2 style='margin:0;padding:0;'>I'm a widget TPA!</h2>`;
const text = () => {
  const {protocol, host} = document.location;
  const url = `${protocol}//${host}`;
  return `<p style='margin:0;padding:0;'>You can see me at <a href="${url}" target='_blank'>${url}</a></p>`;
};

const body = window.document.body;
body.style.padding = '30px';
body.style.margin = '0';
body.style.fontFamily = 'sans-serif';
body.insertAdjacentHTML('afterbegin', `${title()}<br />${text()}<hr />`);
body.appendChild(showToastButton());
