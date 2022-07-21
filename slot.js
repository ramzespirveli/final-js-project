
"use strict";
// ბურგერ ბარი
let wraperDiv = document.querySelector('.burger-wraper');
wraperDiv.addEventListener('click',function(){
    wraperDiv.classList.toggle('active');
    document.querySelector(".ul-wraper").classList.toggle('active');
    document.querySelector(".a-color").classList.toggle('active');
})

let slot = [
    {
        id: 1,
        imag: 'https://cf.europebet.com/prod/games/images/BookofFallen.jpeg',
        title: 'BookofFallen',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 2,
        imag: 'https://cf.europebet.com/prod/games/images/Bulky-Fruits.jpeg',
        title: 'Bulky-Fruits',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 3,
        imag: 'https://cf.europebet.com/prod/games/images/Coba.jpeg',
        title: 'Coba',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 4,
        imag: 'https://cf.europebet.com/prod/games/images/Fruit-Cocktail.jpeg',
        title: 'Fruit-Cocktail',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 5,
        imag: 'https://cf.europebet.com/prod/games/images/boom-desktop.gif',
        title: 'boom-desktop',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 6,
        imag: 'https://cf.europebet.com/prod/games/images/extra-chilli.jpeg',
        title: 'extra-chilli',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 7,
        imag: 'https://cf.europebet.com/prod/games/images/isoftbetgatesofolympus.gif',
        title: 'isoftbetgatesofolympus',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    },
    {
        id: 7,
        imag: 'https://cf.europebet.com/prod/games/images/jackpot-raiders.jpeg',
        title: 'jackpot-raiders',
        url: 'https://www.europebet.com/ka/games/slots/free/extra-chilli'
    }

];

let slot_wraper = document.querySelector('.slot_logo');
let array = [];
function slotGames(item){
    let slotDiv = document.createElement('div');
    slotDiv.classList.add('icon_wraper');
    slotDiv.setAttribute('data-id',item.id);

    let slotAteg = document.createElement('a');
    slotAteg.classList.add('slot_icon');
    slotAteg.setAttribute('href',item.url)
    slotAteg.style.backgroundImage = `url(${item.imag})`;
    slotAteg.classList.add('aTeg');

    let h2Teg = document.createElement('h2');
    h2Teg.classList.add('slot_title');
    h2Teg.textContent = item.title;

    slotAteg.appendChild(h2Teg);
    slotDiv.appendChild(slotAteg);

    array.push(slotAteg);
    slot_wraper.appendChild(slotDiv);

}

slot.forEach(item => {
    slotGames(item);
})

// ფილტრი

let filter = document.getElementById('search');

function serch(element){
    array.forEach(item => {
        if (item.innerText.toLowerCase().includes(element.toLowerCase())){
            item.classList.remove('activserch')
        }
        else {
            item.classList.add('activserch')
        }
    })
}
filter.addEventListener('input',(eventi) => serch(eventi.target.value));