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
let siti = ["თბილისი","რუსთავი","ქუთაისი","ზესტაფონი","სუგდიდი","ბათუმი","ქობულეთი"];
console.log(siti);
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
   console.log(event.target);

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
 

//  ვანულებთ ინპუტის დეფაულტ მნიშვნელობებს
let forma = document.querySelector('.forms');
forma.addEventListener('submit',function(e){
        e.preventDefault();      
    })

// document.getElementById('[form]').addEventListener('submit',function(e){
//         e.preventDefault();
      
//     })
