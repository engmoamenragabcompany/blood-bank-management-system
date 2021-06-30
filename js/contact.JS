let inputs=document.querySelectorAll('.input');


function validation(){
let errorMssage =document.getElementById('error-message');
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone=document.getElementById('phone').value;
let message=document.getElementById('message').value;
let text ;
    

errorMssage.style.padding='.5rem'

if (name.length<5){
    text='please enter name more than 5 latter '
    errorMssage.innerHTML=text;
    return false;
}
if (email.indexOf('@')==-1|| email.length<6){
    text='please entervalid email ';
    errorMssage.innerHTML=text;
    return false;
}

if (isNaN(phone)||phone.length !=10)
{
    text='please enter valid number ';
    errorMssage.innerHTML=text;
    return false;
}
alert('successf');
return true;

}










function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add('focus')

}

function blurFunc(){
    let parent=this.parentNode;
    if(this.value==''){
    parent.classList.remove('focus')}

}

inputs.forEach((input)=>{
    input.addEventListener('focus',focusFunc);
    input.addEventListener('blur',blurFunc)

})
