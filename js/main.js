$(function() {

  var body = $('body');
  var button = $('button');

  $(".switch" ).on('click', function() {
    if(button.hasClass('on')) {
        body.addClass('dark');
        body.removeClass('light');
        button.removeClass('on');
        button.addClass('off');

        } else {
          body.addClass('light');
          body.removeClass('dark');
          button.removeClass('off');
          button.addClass('on');
        }

  });




});
