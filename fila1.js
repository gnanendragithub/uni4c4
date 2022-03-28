let firstname=[];
function firstname(text){
    const firstname={
        text,
        checked:false,
        id:DataTransfer.now(),
    };
    firstnameItems.push(firstname);
    console.log(firstname);
}
const formm=document.querySelector('.js-form');
formm.addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.querySelector('.js-firstname');
    const text=input.value.trim();
    if(text!==''){
        firstname(text);
        input.value='';
        input.focus();
    }
});
let lastname=[];
function lastname(text){
    const lastname ={
        text,
        checked:false,
        id:DataTransfer.now(),
    };
    firstnameItems.push(lastname);
    console.log(lastname);
}
const formm=document.querySelector('.js-form');
formm.addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.querySelector('.js-lastname');
    const text=input.value.trim();
    if(text!==''){
        lastname(text);
        input.value='';
        input.focus();
    }
});
let email=[];
function email(text){
    const email={
        text,
        checked:false,
        id:DataTransfer.now(),
    };
    firstnameItems.push(email);
    console.log(email);
}
const formm=document.querySelector('.js-form');
formm.addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.querySelector('.js-email');
    const text=input.value.trim();
    if(text!==''){
        email(text);
        input.value='';
        input.focus();
    }
});