const title = document.getElementsByClassName('title');
const error_txt = document.getElementsByClassName('error-text');
const username_input = document.getElementById('login-usuario');
const pass_input = document.getElementById('login-senha');


title[0].style.color = 'red';



function validateForms() {

    if (username_input.value != 'oi') {
        error_txt[0].classList.add('visible');
    }

    if (pass_input.value != 'teste') {
        error_txt[1].classList.add('visible');
    }

}