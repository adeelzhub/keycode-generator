const key = document.getElementById("keyP");
const code = document.getElementById("codeP");
const which = document.getElementById("whichP");


window.addEventListener("keypress",(e)=>{
    key.textContent = e.key
    code.textContent = e.code
    which.textContent = e.which

    })