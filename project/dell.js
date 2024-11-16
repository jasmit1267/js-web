const button = document.querySelectorAll('.button');
const body =document.querySelectorAll('body');

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundcolor = e.target.id;
        }
        if(e.target.id === 'black'){
            body.style.backgroundcolor = e.target.id;
        }
        if(e.target.id === 'voilet'){
            body.style.backgroundcolor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundcolor = e.target.id;
        }
    });
    
});



//how change time --->

document.querySelector('#clock');
setInterval( function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
}, 2000);