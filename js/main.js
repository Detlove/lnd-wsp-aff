const btns = document.querySelectorAll("#btn");


const btn_next = () => {
    window.open('aula-1', '_self');
}

for (i=0; i< btns.length; i++){
    btns[i].addEventListener("click", btn_next)
}