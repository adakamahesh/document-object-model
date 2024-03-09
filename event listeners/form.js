var btn=document.getElementById("submit")
btn.addEventListener('click',sub)
function sub(){
    const email=document.getElementById('username');
    console.log(email.value);
    const password=document.getElementById('password');
    console.log(password.value);
}