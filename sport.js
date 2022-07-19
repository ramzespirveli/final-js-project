"use strict";
// ბურგერ ბარი
let wraperDiv = document.querySelector('.burger-wraper');
wraperDiv.addEventListener('click',function(){
    wraperDiv.classList.toggle('active');
    document.querySelector(".ul-wraper").classList.toggle('active');
    document.querySelector(".a-color").classList.toggle('active');
})

let sport = [
    {
        id: 1,
        imig:'https://www.malex-travel.com/wp-content/uploads/elementor/thumbs/Alianz_Arena_Nacht-ov0r22hcrpf6bbymnq9wwz2igv73mnl5y7s1mcyks8.jpg',
        title: 'ფეხბურთი',
        url: 'https://www.malex-travel.com/mjunhen/alianz-arena/'
    },
    {
        id: 2,
        imig:'https://cdn.nba.com/manage/2021/07/NBA-Finals-Individual-Game-Tune-Ins-v2.psd16x9-cropped.jpg',
        title: 'კალათბურთი',
        url: 'https://www.malex-travel.com/mjunhen/alianz-arena/'
    },
    {
        id: 3,
        imig:'https://poisknews.ru/wp-content/uploads/2021/07/depositphotos_40275659_s-2019.jpg',
        title: 'ცურვა',
        url: 'https://www.malex-travel.com/mjunhen/alianz-arena/'
    },
    {
        id: 4,
        imig:'https://www.ski.ru/kohana/upload/ckfinder_images/u111030/images/c792302fdeb3210456122c937f2ff956.jpg',
        title: 'სნოუბორდი',
        url: 'https://www.malex-travel.com/mjunhen/alianz-arena/'
    },
    {
        id: 5,
        imig:'https://assets.tennismajors.com/app/uploads/2022/05/30122417/Daria_Kasatkina_Roland_Garros_2022.jpg',
        title: 'ჩოგბურთი',
        url: 'https://www.malex-travel.com/mjunhen/alianz-arena/'
    }

]

let divWraper = document.getElementById('slider-mini');
let sliderImig = document.getElementById('slider');
let leftclick = document.getElementById('slider-left');
let rightclick = document.getElementById('slider-right');
let element = document.querySelectorAll('.imig-class');

let index = 0;

function createDivImig(item){
    
    let divImig = document.createElement('div');
    divImig.classList.add('imig-class');
    divImig.setAttribute('data-id', item.id-1);
    divImig.style.backgroundImage = `url(${item.imig})`;
   
    divImig.onclick = function(event){
        document.querySelector('.sport-slider-title').remove();
        let id = event.target.getAttribute('data-id');
        index = id;
        setimig(index);

    }

    return divImig;
}
//mtavari funqcia
function slider(){
    sport.forEach(item => {
        divWraper.appendChild(createDivImig(item));
    })
    setimig(index);   
}

function setimig(index){
   
    sliderImig.style.backgroundImage = `url(${sport[index].imig})`; 
    let h3Div = document.createElement('div');
    let tegH3 = document.createElement('h3');
    tegH3.classList.add('sport-slider-title');
    tegH3.textContent = sport[index].title;
    h3Div.appendChild(tegH3);
    sliderImig.appendChild(h3Div);
}

function clickright(){
   
    if (index == sport.length-1)
    return;
    document.querySelector('.sport-slider-title').remove();
    index ++;
    setimig(index);
}
rightclick.addEventListener('click',clickright)

function clickleft(){

    if (index == 0)
    return;
    document.querySelector('.sport-slider-title').remove();
    index --;
    setimig(index);
}
leftclick.addEventListener('click',clickleft)


slider();
