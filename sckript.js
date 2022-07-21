"use strict";
// ბურგერ ბარი
let wraperDiv = document.querySelector('.burger-wraper');
wraperDiv.addEventListener('click',function(){
    wraperDiv.classList.toggle('active');
    document.querySelector(".ul-wraper").classList.toggle('active');
    document.querySelector(".a-color").classList.toggle('active');
})

// რეგისტრაციის ღილაკი
let registr = document.getElementById("registr-user");
registr.addEventListener('click',function(){
    document.querySelector(".registracia").classList.add('new-registr')
    document.querySelector(".header").classList.add('new-registr')
    document.querySelector(".footer").classList.add('new-registr')
    document.querySelector(".registtr-form").classList.add('new-registr')
    document.querySelector(".registr-head").classList.add('new-registr')
})
// ქალაქების მასივი იყრება ასარჩევ ბლოკში
let siti = ["თბილისი","რუსთავი","ქუთაისი","ზესტაფონი","ზუგდიდი","ბათუმი","ქობულეთი"];
let select = document.getElementById('siti')
function setSiti(){
    siti.forEach(element => {
       let options = document.createElement('option');
       options.setAttribute('value',element);
       options.textContent = element;
       select.appendChild(options);
    });
}
setSiti();
// დიალოგური ფანჯარის გამოჩენა იმ შემთხვევაში თუ პაროლი არასწორად აარის შეყვანილი ან არ ახსოვთ

let clik = document.getElementById('opens');
let opens = document.querySelector('.modal');
let clous = document.querySelector('.fa-xmark');

clik.addEventListener('click',()=>{
    opens.showModal();
})
clous.addEventListener('click',()=>{
    opens.close();
})

//ღილაკზე მაუს ივენთი ჯავასკრიპტიდან კლასის დამატებით
document.querySelector('[type="submit"]').addEventListener('mouseover',function(e){
    e.target.classList.add('js-over');

});
document.querySelector('[type="submit"]').addEventListener('mouseout',function(e){
    e.target.classList.remove('js-over');
});

// ინპუტს უცვლის ფონის ფერს
// function inputBackgColor(){
//     document.querySelector('input').addEventListener('focus',function(e){
//         e.target.style.background = 'red';
//             })
// }

let v= document.getElementById('search');
 

//  ვანულებთ ინპუტის დეფაულტ მნიშვნელობებს  და შემდგომში ხდება ფორმის ვალიდაცია
let forma_submit = document.getElementById('registr_form')
forma_submit.addEventListener('submit',function(e){
        e.preventDefault();     
        let eror = {}; 
    
        let form = e.target;
        let fname = document.querySelector('[name="fname"]').value;

  
            if(fname.length == 0)
            eror.fname = 'შეავსეთ ცარიელი ველი'

        let lname = document.querySelector('[name="lname"]').value;

             if(lname.length == 0)
            eror.fname = 'შეავსეთ ცარიელი ველი';

            let pone = document.getElementById('ponenuma').value;
            if (pone.length != 9)
            eror.ponenuma = 'ნომერი არასწორადაა ჩაწერილი';


        let chek = document.getElementById('checkbox').checked;
        if (!chek)
        eror.checkbox = 'ველი არ არის მონიშნული';
        let redio = false;
        form.querySelectorAll('[name="radio"]').forEach(item => {
            if (item.checked){
                redio = true;
            }            

        })
        if (!redio){
            eror.radio = 'მონიშნეთ რომელიმე ველი'
        }

        let pass1 = document.getElementById('password1').value;
        let pass2 = document.getElementById('password2').value;
        let p = pass2[0];
        
   
            if (pass2.length < 2 )
            eror.password2 = 'სიმბოლოების რაოდენობა არაა საკმარისი';
            if (pass1 != pass2)
            eror.password2 = 'პაროლი არ ემთხვევა';
            if (pass2.length > 2 && pass2[0] != p.toUpperCase())
            eror.password2 = 'პირველი ასო უნდა იყოს დიდი სიმბოლო';

            form.querySelectorAll('.span-stil').forEach(item => {
                item.textContent = '';
            })


        for(let item in eror){
            let spanEror = document.getElementById('eror_' + item);
            if (spanEror){
                spanEror.textContent = eror[item];
            }
        }

            if (Object.keys(eror).length == 0){
                form.submit();
            }


    })

// პაროლი გამოჩნდება ტექსტური სახით
let eye = document.getElementById('iconId');
let shoPas1 = document.getElementById('password1');
let shoPas = document.getElementById('password2');


// function shoPassword(){
//     if (shoPas.type == 'password'){
//         shoPas.setAttribute('type','text');
//         shoPas1.setAttribute('type','text');
//         eye.classList.add('fa-eye-slash');
//     } 
//     else {
//         eye.classList.remove('fa-eye-slash')
//         shoPas.setAttribute('type','password');
//         shoPas1.setAttribute('type','password');
//     }
// }
// ...............................................
 let shoPassword = () => {
    if (shoPas.type == 'password'){
        shoPas.setAttribute('type','text');
        shoPas1.setAttribute('type','text');
        eye.classList.add('fa-eye-slash');
    } 
    else {
        eye.classList.remove('fa-eye-slash')
        shoPas.setAttribute('type','password');
        shoPas1.setAttribute('type','password');
    }

   } 
eye.addEventListener('click',shoPassword);

// email -is validacia    sendemail

function emailValid(){
    let email = document.getElementById('meil').value;
    let inputColor = document.querySelector('#meil');
    // let spanEmail = document.getElementById('eror_meil');
    let validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

    if (email.match(validator)){
        inputColor.style.border = '1px solid green'
    }
    else {
        inputColor.style.border = '1px solid red'      
    }
}
function emailValid2(){
    let email = document.getElementById('sendemail').value;
    let inputColor = document.querySelector('#sendemail');
    // let spanEmail = document.getElementById('eror_meil');
    let validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

    if (email.match(validator)){
        inputColor.style.border = '1px solid green'
    }
    else {
        inputColor.style.border = '1px solid red'      
    }
}


// localStorage

// let counterlUser = localStorage.getItem('user');
// let newItem;
// if (!counterlUser)
//     newItem = document.getElementById('username').value;

// localStorage.setItem('user', newItem);

//coock

document.getElementById('form-submit').addEventListener('submit',function(e){
    e.preventDefault(); 
    let users = document.getElementById('user-name').value; 
     Cookies.set('user',users);
     
    e.target.submit();
})

let getCook = Cookies.get('user');
if (getCook){
    document.getElementById('user-name').value = getCook;
}