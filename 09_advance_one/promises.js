const promiseOne = new promise(function(resolve ,reject){
    // DO an async task 
    // DBV calls , cryptography,network.

    setTimeout(function(){
        console.log('Async tack is done ');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promie consumed");
    
})

// new promise (function(reslove))