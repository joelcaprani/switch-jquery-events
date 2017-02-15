$(function() {

  var body = $('body');
  var button = $('button');
  var status = $('status');

  $(".switch" ).on('click', function() {
    if(button.hasClass('on')) {
        body.addClass('dark');
        body.removeClass('light');
        button.removeClass('on');
        button.addClass('off');
        $('.status').text("Hey, who turned off the lights?");


        } else {
          body.addClass('light');
          body.removeClass('dark');
          button.removeClass('off');
          button.addClass('on');
          $('.status').text("It's so bright in here!");
        }

  });




});
