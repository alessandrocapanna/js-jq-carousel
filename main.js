$(document).ready(
  function(){
    // NOTE: al click di next
    $('.next').click(
      function(){
        immagineSuccessiva();
      }
    );

    // NOTE: al click di prev
    $('.prev').click(
      function(){
        immaginePrecedente();
      }
    );
  }
);

// NOTE: per immagine immagineSuccessiva
function immagineSuccessiva() {
  var immagineCorrente = $('.images img.active');
  var puntinoCorrente = $('.nav i.active');

  immagineCorrente.removeClass('active');
  puntinoCorrente.removeClass('active');

  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  } else {
    immagineCorrente.next('img').addClass('active');
    puntinoCorrente.next('i').addClass('active');
  }
}

// NOTE: per immagine immaginePrecedente
function immaginePrecedente() {
  var immagineCorrente = $('.images img.active');
  var puntinoCorrente = $('.nav i.active');

  immagineCorrente.removeClass('active');
  puntinoCorrente.removeClass('active');

  if (immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  } else {
    immagineCorrente.prev('img').addClass('active');
    puntinoCorrente.prev('i').addClass('active');
  }
}
