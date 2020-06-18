let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function(){
    let regex1 = /^Bagaimana cara memulai bisnis$/
    let regex2 = /^Bootcamp impact byte$/
    let regex3 = /^Status covid hari ini$/

    if(regex1.test(input.value)){
        document.querySelector('p').innerHTML = 'Cara memulai bisnis dengan belajar'
    }
    else if(regex2.test(input.value)){
        document.querySelector('p').innerHTML = 'Bootcamp impact byte asik'
    }
    else if(regex3.test(input.value)){
        document.querySelector('p').innerHTML = 'Kurva covid hari ini mulai menurun'
    }
    else{
        document.querySelector('p').innerHTML = 'Coba lagi'
    }
})