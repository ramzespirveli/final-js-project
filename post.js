

"use strict";
// ბურგერ ბარი
let wraperDiv = document.querySelector('.burger-wraper');
wraperDiv.addEventListener('click',function(){
    wraperDiv.classList.toggle('active');
    document.querySelector(".ul-wraper").classList.toggle('active');
    document.querySelector(".a-color").classList.toggle('active');
})
/////////////////////////////////////////////////////////

let divWraper = document.querySelector('.post-text');
let u_r_l = 'https://jsonplaceholder.typicode.com/posts';

function ajaxi(url,colback){
    let request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener('load',function(){
        let data = JSON.parse(request.responseText);

        colback(data);

        console.log(data);
    })
    request.send();


    }
    function myFunction(item){
        item.forEach(element => {
            setPostInDiv(element)
        });
        //  ფუნქცია ცალკეული პოსტისთვის
    function setPostInDiv(item){
        let divPost = document.createElement('div');
        divPost.classList.add('overflow');
        divPost.setAttribute('data-id',item.id);

        let delBaton = document.createElement('button');
        delBaton.setAttribute('data-id',item.id);
        delBaton.classList.add('del-baton');
        delBaton.textContent = 'პოსტის წაშლა';

        let h2Teg = document.createElement('h2');
        h2Teg.innerText = item.id;

        let h3Teg = document.createElement('h3');
        h3Teg.innerText = item.title;

        divPost.appendChild(h2Teg);
        divPost.appendChild(h3Teg);
        divPost.appendChild(delBaton);

        // პოსტის წაშლის ღილაკი
        delBaton.addEventListener('click',function(e){
            e.stopPropagation();
            let id = delBaton.getAttribute('data-id');
            let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

            fetch(url,{
                method: 'DELETE',
            })
            .then(() => divPost.remove())
        })
        // კლიკი იძახებს პოპაპის გამოსატან ფუნქციას
        divPost.addEventListener('click',function(){
            let id = divPost.getAttribute('data-id')            

            getPopapi(id);
        })

        divWraper.appendChild(divPost);
        
       
    }
    //ფუნქციას გამოაქვს პოპაპი
    let content = document.querySelector('.popapi');
    function getPopapi(id){
        content.classList.add('pop-activ')
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        ajaxi(url,function(item){
            setPopap(item);
        })
    }


    //ხურავს პოპაპს
    document.querySelector('.close').addEventListener('click',function(){
        content.classList.remove('pop-activ');
    })
    // პოპაპში აგდებს ტექსტ
    let contentData = document.querySelector('.popInfo');
    function setPopap(item){
        let spanTeg = document.createElement('span');
        spanTeg.textContent = item.userId;

        let pTeg = document.createElement('p');
        pTeg.textContent = item.body;

        contentData.innerHTML = '';
        contentData.appendChild(spanTeg);
        contentData.appendChild(pTeg);
    }

}
ajaxi(u_r_l,function(data){
    myFunction(data)
});
// პოსტის დამატება

let postAdd = document.getElementById('add-pos');
postAdd.addEventListener('click',function(){

})
let addForm = document.querySelector('.form-legend');
addForm.addEventListener('submit',function(e){
    e.preventDefault();
   let formData = {
        title: e.target[1].value,
        body: e.target[2].value
   }

   // აქ ხდება ინფორმაციის სერვერზე გაგზავნა
   fetch(u_r_l, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    console.log(formData);
   
})

///////////////////////////////////////////////////////////

let nextclick = document.querySelector('.next');
let prevclick = document.querySelector('.previu');
let newDiv = document.querySelector('.post-imig');
let url2 = 'https://reqres.in/api/users?page=2';
let curent = 0;




    fetch(url2,{
        method: 'GET',
    })
    .then(function(parametr){
     
        return parametr.json();
    })
    .then(function(elementDta){
        
        addimig(elementDta.data);

        nextclick.addEventListener('click',function(){
            if (curent == elementDta.per_page - 2) {
                return;
            }
            curent += 2;
            addimig(elementDta.data);

        })
        prevclick.addEventListener('click',function(){
            if (curent == 0) {
                return;
            }
            curent -= 2;
            addimig(elementDta.data);

        })

    })
    .catch(function(error){
        
    })
function addimig(item){
    newDiv.innerHTML = '';
    for (let i = curent; i < curent + 2; i++ ){
        let a_teg = document.createElement('a');
        a_teg.classList.add('a-class_imig');
        a_teg.setAttribute('href','facebook.com')
    
        let div_teg = document.createElement('div');
        div_teg.classList.add('div-imig');
        div_teg.style.backgroundImage = `url(${item[i].avatar})`;
    
        let span_teg = document.createElement('span');
        span_teg.classList.add('span_name');
        span_teg.textContent = item[i].first_name + " " + item[i].last_name;
    
        a_teg.appendChild(div_teg);
        a_teg.appendChild(span_teg);
    
        newDiv.appendChild(a_teg);
    }


}