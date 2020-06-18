let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function(){
    console.log(input.value.match('[A-Z]'))
    if(input.value.match('[A-Z]') === null){
        document.querySelector('p').innerHTML = 'huruf pertama, huruf kecil'
    }
    else{
        document.querySelector('p').innerHTML = 'huruf pertama, huruf besar'
    }
})