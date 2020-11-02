$(function() {
  // Open the meimei pop up
  $('body').on('click', '#lm-meimei-toggle', function(e) {
    e.preventDefault();
    $(".lm-meimei-popup").toggleClass("lm-meimei-popup--open");
  });

  $('body').on('click', '#lm-maoche-toggle', function(e) {
    e.preventDefault();
    $(".lm-maoche-popup").toggleClass("lm-maoche-popup--open");
  });

  $('body').on('click', '#lm-jiejie-toggle', function(e) {
    e.preventDefault();
    $(".lm-jiejie-popup").toggleClass("lm-jiejie-popup--open");
  });

  $('body').on('click', '#lm-xiaomao-toggle', function(e) {
    e.preventDefault();
    $(".lm-xiaomao-popup").toggleClass("lm-xiaomao-popup--open");
  });

  $('body').on('click', '#lm-longmao-toggle', function(e) {
    e.preventDefault();
    $(".lm-longmao-popup").toggleClass("lm-longmao-popup--open");
  });
});
