var email = document.getElementById('email')
var pswd = document.getElementById('pswd')

function change_email(){
    email.style.backgroundColor = 'grey'


}
function hide_email(){
    email.style.backgroundColor = 'white'

}
function change_pswd(){
    pswd.style.backgroundColor = 'grey'

}
function hide_pswd(){
    pswd.style.backgroundColor = 'white'

}

pswd.addEventListener('keyup',function display(e){console.log(e.target.value)})