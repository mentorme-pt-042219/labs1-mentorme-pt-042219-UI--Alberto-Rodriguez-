const btn = document.querySelectorAll('button');
btn.forEach(function(e){
    e.addEventListener('click',function(e){
        console.log('i was clicked');
    })
});

//Used click to change the background on the buttons to black and then dblclick to change back to default color
const button = document.querySelectorAll('.btn');
button.forEach(function(element){
    element.addEventListener('click', function(e){
        // console.log('click works!')
        e.target.style.background = 'black';
    })
   button.forEach(function(element){
       element.addEventListener('dblclick', function(e){
        //    console.log('dblclick works!')
           e.target.style.background = '';
       })
   }) 

//    button.forEach(function(element){

//    })
});

// Used Mouseover and Mouseleave (changes color of p tags to blue when mouse hovers over and back to black when mouse isnt hovering over.)
const input = document.querySelectorAll('p');
input.forEach(function(element){
    element.addEventListener('mouseover', function(e){
        // console.log('mouseover works!')
        e.target.style.color = 'blue';
    })
    input.forEach(function(element){
        element.addEventListener('mouseleave', function(e){
            // console.log('mouseleave works!')
            e.target.style.color = '';
        })
    })
 });


 const newParagraph = document.createElement('p');

newParagraph.textContent = "Born in Los Angeles California in 1990 and moved to Riverside when I was 6. Later moved to Des Moines Iowa. Proud father of 3 girls Arianna, Jasmin and Jordyn. I enjoy watching sports, especially football and boxing. When im not spending time with my family, you can find me at the gym or on my computer coding. I love to code and learn new tricks when it comes to web development. I love to spend time with my family any chance I get.  "

const bottomContent = document.querySelector('.dev')
bottomContent.appendChild(newParagraph);

