var btn=document.getElementById("submit")
// btn.addEventListener('click',sub) //when mouse click on sub btn
// btn.addEventListener('dblclick',sub) //when mouse double click on sub btn
// btn.addEventListener('mouseover',sub) //when mouse hover the sub btn
// btn.addEventListener('mouseout',sub) //when mouse hover out the sub btn 
// btn.addEventListener('mouseenter',sub) //when mouse click on sub btn
btn.addEventListener('mouseleave',sub) //wnen mouse leave on sub btn
const email=document.getElementById('email');
const password=document.getElementById('Password');
function sub(){
    console.log(email.value);
    console.log(password.value);
}