

let Name = document.querySelector('#guest-name');
Name.innerText = ``;
Name.innerText = JSON.parse(localStorage.getItem('userInfo'))[`name`];




let Email = document.querySelector('.email');
Email.innerText = ``;
Email.innerText = JSON.parse(localStorage.getItem('userInfo'))[`email`];



const footer = document.getElementsByTagName('footer')[0];
const hideFooter = document.getElementById('hideFooter');
const showFooter = document.querySelector('.showFooter');

hideFooter.onclick = () => {
    footer.classList.toggle('hidden')
}
showFooter.onclick = () => {
    footer.classList.toggle('hidden')
}



