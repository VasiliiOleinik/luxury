$(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.header__area').addClass('scrolled');
    } else {
      $('.header__area').removeClass('scrolled');
    }
  });
  // Hamburger
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }
  $('.hamburger').on('click', function() {
		$('.mobile--menu').slideToggle();
  });
});
