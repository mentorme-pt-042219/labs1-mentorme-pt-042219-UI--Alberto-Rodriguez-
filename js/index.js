const btn = document.querySelectorAll('button');
btn.forEach(function(e){
    e.addEventListener('click',function(e){
        console.log('i was clicked');
    })
});


