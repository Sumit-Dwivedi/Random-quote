// document.addEventListener('DOMContentLoaded', function () {
//     console.log(color);
// });
const palette=['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
let index=0;
const newQuote=document.getElementById('new');
const quote=document.querySelector('.quote-text');
const author=document.querySelector('.name');
const iconColor=document.querySelector('.bxs-quote-left');
var category = 'happiness'
document.addEventListener('DOMContentLoaded',()=>{
    newQuote.addEventListener('click',()=>{
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': 'g0NfdpFiuS5n/c9jb9t4iw==vrXYGgmprgt6qnpq'},
            contentType: 'application/json',
            success: function(result) {
                quote.innerText=result[0].quote;
                author.innerText=result[0].author;
                if(index>palette.length){
                    index=0;
                }
                console.log(index);
                document.documentElement.style.setProperty('--background-color',palette[index])
                iconColor.style.color=palette[index];
                index++;
                console.log('changed');
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    })
});
