import {showToast, observeState} from "wix-dashboard-sdk";

function showToastButton() {
  const button = document.createElement('button');
  button.innerText = 'Show a toast';
  button.addEventListener('click', () => {
    showToast({
      message: 'Hi! This is a message from TPA outside of Wix.',
      onCloseClick: () => {
        const status = document.getElementById('status');
        status!.insertAdjacentHTML('beforeend', '<div class="note">Toast close clicked!</div>');
      }
    })
  });
  return button;
}

async function unobserveButton() {
  const unobserve = await observeState(props => {
    console.log('got props@@', props);
  });


  const button = document.createElement('button');
  button.innerText = 'Unobserve!';
  button.addEventListener('click', () => {
    unobserve();
  });
  return button;
}

const title = () => `<h2 style='margin:0;padding:0;'>I'm a widget TPA!</h2>`;
const text = () => {
  const {protocol, host} = document.location;
  const url = `${protocol}//${host}`;
  return `<p style='margin:0;padding:0;'>You can see me at <a href="${window.location}" target='_blank'>${url}</a></p>`;
};

const body = window.document.body;
body.style.padding = '30px';
body.style.margin = '0';
body.style.fontFamily = 'sans-serif';
body.insertAdjacentHTML('afterbegin', `
<style>
@keyframes noteFadeIn {
    0% { opacity: 0; max-height: 0; padding: 0 5px; }
    100% { opacity: 1; max-height: 40px; padding: 5px;}
}
html, body {
  overflow: hidden;
}
.note {
  overflow: hidden;
  margin-bottom: 10px;
  border:1px solid blue;
  animation: noteFadeIn 0.5s ease-out 0s 1 forwards;
}
</style>
  ${title()}<br />
  <div id="status"></div>
  ${text()}
<hr />
`);
body.appendChild(showToastButton());

unobserveButton().then(btn => body.appendChild(btn));
