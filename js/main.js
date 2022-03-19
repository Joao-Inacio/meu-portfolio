let nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100){
        nav.classList.add('shadow');
    }else{
        nav.classList.remove('shadow');
    }
})

let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    var largura = window.innerWidth;

    if (largura < 750){
        img2.classList.add('img2')
        img3.classList.add('img3')
    }else{
        img2.classList.remove('img2')
        img3.classList.remove('img3')
    }
})