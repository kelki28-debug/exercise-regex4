let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function(){
    let regexx = /[0-9]/

    if(regexx.test(input.value)){
        document.querySelector('p').innerHTML = 'ini angka'
    }
    else{
        document.querySelector('p').innerHTML = 'ini bukan angka'
    }
})