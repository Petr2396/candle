document.getElementById('main-action').onclick =function () {
    document.getElementById( "candle").scrollIntoView( {behavior: "smooth"});
}

var buttons =document.getElementsByClassName( "candle-button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById( "main").scrollIntoView( {behavior: "smooth"});
    }
}

document.getElementById('price-action').onclick =function () {
    if (document.getElementById( "name").value ===""){
        alert("Заполните поле имя!");
    } else if (document.getElementById( "phone").value ===""){
        alert("Заполните поле телефон!");
    } else if (document.getElementById( "car").value ==="") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Спасибо за заявку мы свяжемся с вами в ближайшее время!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.8) / 9) + 'px,' + ((event.clientY * 0.8) / 9) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});


var buttons=document.getElementsByClassName("button candle-button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        
    }
}


