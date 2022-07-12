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
