// ბურგერ ბარი
let wraperDiv = document.querySelector(".burger-wraper");
wraperDiv.addEventListener('click',function(){
    wraperDiv.classList.toggle('active');
    document.querySelector(".ul-wraper").classList.toggle('active');
    document.querySelector(".a-color").classList.toggle('active');
})
