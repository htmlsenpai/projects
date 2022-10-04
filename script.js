let slideIndex = 0;
const slides = document.getElementsByClassName('slides');
const tn = document.getElementsByClassName('tn');

showSlides(); // hace funcionar los slides al cargar la página


// Next/previous controls
function plusSlides(s) {
  slideIndex += s;
  if (slideIndex > slides.length) { slideIndex = 1 }
  else if (slideIndex < 1) { slideIndex = slides.length }
  showSlides(slideIndex); // limpia los slides y hace que los botones funcionen correctamente
}

// Thumbnail image controls
function currentSlide(s) {
  showSlides(slideIndex = s);
}

function showSlides(s) {

  let i;
 
  if (!s) {
    slideIndex++; // si no encuentra el parametro, que empiece el contador de imagenes
    console.log('if !s')


    if (slideIndex > slides.length) {
      slideIndex = 1;
      console.log('if SI=1') 
    }
  } 
  else {
    slideIndex = s; // vuelve a la imagen principal
  }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < tn.length; i++) {
    tn[i].classList.remove('active'); // elimina la imagen activa
  }
  slides[slideIndex - 1].style.display = "block";
  tn[slideIndex - 1].classList.add = 'active'; // muestra la imagen activa

  console.log('index ' + slideIndex)
  console.log('s ' + s)
  if (!s) {setTimeout(showSlides, 8000);} // transición // automático de 8 segundos
  
}

/* modal */

const modalC = document.getElementById('modalContainer');
const img1 = document.getElementById('modalImg');
const imgs = document.getElementById('modalImgs');
const close = document.getElementById('close');

function modal(img) {
  modalC.style.display = 'block';
  img1.src = img.src;

}


close.addEventListener('click', () => {
  modalC.style.display = 'none';

})

window.onclick = function(event) {
  if (event.target == modalC) {
      modalC.style.display = 'none';
  }
}