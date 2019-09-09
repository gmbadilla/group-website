"use stric"
var media = screen.availWidth;
var flecha = document.querySelector('#flecha');
var contador = 1;


flecha.classList.add("right");

//responsive

console.log(media);
if (media >= 320 && media <= 760) {
  console.log("movil");

  flecha.addEventListener("click", function () {
    flecha.classList.add("left");
    if(contador != 0){
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX: media-(media/4),
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
        easing: 'easeOutCirc',
      });//termina animacion de los bloques
        flecha.style.left = "85vw";
        flecha.style.transition = ".5s";
        contador = 0;
    } else if(contador == 0){
      
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX:-media-(media/4),
        delay: anime.stagger(40), // increase delay by 100ms for each elements.
        easing: 'easeInCirc',
      });//termina animacion de los bloques
      flecha.style.transition = ".5s";
      flecha.style.transitionDelay = ".7s";
      flecha.style.left = "6vw";
      flecha.classList.remove("left");
      flecha.classList.add("right");
      contador = 1;
    }//termina segundo if
  });//termina funcion


}
if (media >= 768 && media <= 1040) {
  console.log("tablet");

  flecha.addEventListener("click", function () {
    flecha.classList.add("left");
    if(contador != 0){
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX: media-(media/1.8),
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
        easing: 'easeOutCirc',
      });//termina animacion de los bloques
        flecha.style.left = "50vw";
        flecha.style.transition = ".5s";
        contador = 0;
    } else if(contador == 0){
      
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX:-media-(media/4),
        delay: anime.stagger(40), // increase delay by 100ms for each elements.
        easing: 'easeInCirc',
      });//termina animacion de los bloques
      flecha.style.transition = ".5s";
      flecha.style.transitionDelay = ".7s";
      flecha.style.left = "6vw";
      flecha.classList.remove("left");
      flecha.classList.add("right");
      contador = 1;
    }//termina segundo if
  });//termina funcion


};
if (media >= 1041) {
  console.log("computadora");

  flecha.addEventListener("click", function () {
    flecha.classList.add("left");
    if(contador != 0){
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX: media-(media/1.3),
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
        easing: 'easeOutCirc',
      });//termina animacion de los bloques
        flecha.style.left = "25vw";
        flecha.style.transition = ".3s";
        
        contador = 0;
    } else if(contador == 0){
      
      anime({
        targets: '.nombre',//objetos a los que le hace referencia en html
        translateX:-media-(media/4),
        delay: anime.stagger(40), // increase delay by 100ms for each elements.
        easing: 'easeInCirc',
      });//termina animacion de los bloques
      flecha.style.transition = ".4s";
      flecha.style.transitionDelay = ".7s";
      flecha.style.left = "6vw";
      flecha.classList.remove("left");
      flecha.classList.add("right");
      contador = 1;
    }//termina segundo if
  });//termina funcion
 // flecha.classList.toggle("left");


};
// cambio de color del boton

var boton = document.querySelectorAll('.boton');
var letras = document.querySelectorAll('.boton > a > h2');


boton.forEach( function(element) {
    letras.forEach( function(btn) {
      element.addEventListener('mouseenter', function(){
      btn.style.transition = '.5s';
      btn.style.transitionDelay = '.1s';
      btn.style.color = '#fff';

    })

    element.addEventListener('mouseleave', function(){
      btn.style.color = '#000';

    })
    });

});
/*
boton.addEventListener('mouseenter', function(){
  letras.style.transition = '.5s';
  letras.style.transitionDelay = '.1s';
  letras.style.color = '#fff';

})

boton.addEventListener('mouseleave', function(){
  letras.style.color = '#000';

})*/


