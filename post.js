
// function getajaxi(){
//     let reques = new XMLHttpRequest();
//  reques.open('GET','https://reqres.in/api/users?page=2');

//  reques.addEventListener('load',function(){

//     let divi = document.querySelector('.post-text');


//     let responsData = JSON.parse(this.responseText)
//     responsData.data.forEach(element => {
//         let div = document.createElement('div');
//         div.textContent = element.email;
//         divi.appendChild(div);
        
//     });

//  });
//     reques.send();
// }
// getajaxi();

// fetch('https://reqres.in/api/users?page=2',{
//     method: 'GET'
// })
// .then(function(respons){
//     if(respons.status != 200){
//         throw respons.status;
//     }
//     return respons.json();
// })
// .then(function(responsData){
//     let fragment = document.createDocumentFragment();
//     responsData.data.forEach(element => {
//        let divv = document.createElement('div');
//         divv.textContent = element.email;
//         fragment.appendChild(divv);
//         document.querySelector('.post-text').appendChild(fragment);
//     });

// })
// .catch(function(error){
//     console.log(error);
// })

// let curent = 1;

// function getUser(page){

//     fetch('https://reqres.in/api/users?page=' + page ,{
//      method: 'GET'
//  })
//  .then(function(respons){
//     if(respons.status != 200){
//     throw respons.status;
//     }
//     return respons.json();
//  })
// .then(function(responsData){
//     let fragment = document.createDocumentFragment();
//     responsData.data.forEach(element => {
//        let divv = document.createElement('div');
//         divv.textContent = element.email;
//         fragment.appendChild(divv);
//         document.querySelector('.post-text').appendChild(fragment);
//     });

// })
//  .catch(function(error){
//     console.log(error);
//  })
 

// }

// document.querySelector('.post-imig').addEventListener('click', ()=>{
//     curent ++;
//     getUser(curent);
// })

// getUser(curent);

/////////////////////////////////////////////////////////////////////////////////////////

// let divWraper = document.querySelector('.post-text');
// let ur = 'https://jsonplaceholder.typicode.com/posts';

// function ajaxi(URL, colback){
//     let requesti = new XMLHttpRequest();

// requesti.open('GET',URL)
// requesti.addEventListener('load',function(){
    
//     let data = JSON.parse(requesti.responseText);
//         colback(data);

// });
//     requesti.send();
// }

// function ajx_function(data){
//     data.forEach(element => { 

//         addPost(element);

//    });
// }


// function addPost(item){
//     let divteg = document.createElement('div');
//     divteg.classList.add('overflow');
//     divteg.setAttribute('data-id',item.id);

//     let h2teg = document.createElement('h2');
//     h2teg.textContent = item.id;

//     let h3teg = document.createElement('h3');
//     h3teg.textContent = item.title;

//     divteg.appendChild(h2teg);
//     divteg.appendChild(h3teg);

//     divteg.addEventListener('click',function(){
//         let id = divteg.getAttribute('data-id');

//         popapi(id);
//         console.log(id);
//     })

//     divWraper.appendChild(divteg);
// };
// let contenti = document.querySelector('.popapi');
// let contentidata = document.querySelector('.popInfo');

// function popapi(item){
//     contenti.classList.add('pop-activ');
//     let url = `https://jsonplaceholder.typicode.com/posts/${item}`;
//     ajaxi(url,function(data){
//         addPostInfo(data);
//         console.log(data);
//     });

// }
// document.querySelector('.close').addEventListener('click',function(){
//     contenti.classList.remove('pop-activ')
    
// })


// function addPostInfo(item){
//     let spanTeg = document.createElement('span');
//     spanTeg.textContent = item.userId;

//     let h3Teg = document.createElement('h3');
//     h3Teg.textContent = item.title;

//     let pTeg = document.createElement('p');
//     pTeg.textContent = item.body;

//     contentidata.innerHTML = '';1

//     contentidata.appendChild(spanTeg);
//     contentidata.appendChild(h3Teg);
//     contentidata.appendChild(pTeg);

// }

// ajaxi(ur,function(data){
//     ajx_function(data);
// });

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
            deletePost(id)
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
    //ფუნქცია რომელიც შლის პოსტს
    function deletePost(id){
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url,{
            method: 'DELETE',
        })
       .then(function(responsi){
        if (responsi.status != 200){
            throw responsi.status;
        }
        return responsi.JSON();
       })
       .then(function(responsData){
        console.log(responsData);
       })
       .catch(function(eror){
            alert('eror server');
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