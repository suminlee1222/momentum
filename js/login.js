const btn = document.querySelector('.login button');
const loginDiv = document.querySelector('.login');
const h1 = document.querySelector('h1');

function getLogin(event){
    event.preventDefault();
    let userId = frm.userId.value;
    localStorage.setItem('userId', userId);
    let name = localStorage.getItem('userId');
if(name !== null && name !== ''){
    loginDiv.style.display = 'none';
    h1.style.display = 'block';
    h1.innerText = `Welcome To My World, ${name}!`
}else{
    loginDiv.style.display = 'block'; 
    h1.style.display = 'none';
}
}

let name2 = localStorage.getItem('userId');
if(name2 !== null && name2 !== ''){
    loginDiv.style.display = 'none';
    h1.style.display = 'block';
    h1.innerText = `Welcome To My World, ${name2}!`
}else{
    loginDiv.style.display = 'block'; 
    h1.style.display = 'none';
}

//getLogin();
btn.addEventListener("click",getLogin);
