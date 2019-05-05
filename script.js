$('#bachelor-ende')
.countdown('2019/09/16 12:00:00', function(event) {
    $("#tage02").text(event.strftime('%D'));
    $('#stunden02').text(event.strftime('%H'));
    $('#minuten02').text(event.strftime('%M'));
    $('#sekunden02').text(event.strftime('%S'));

  }).on('finish.countdown', function(){
    $('#logo-ende').attr('src', 'tick.jpg');
  });

  $('#bachelor-start').countdown('2019/06/24 09:00', function(event) {
    $("#tage01").text(event.strftime('%D'));
    $('#stunden01').text(event.strftime('%H'));
    $('#minuten01').text(event.strftime('%M'));
    $('#sekunden01').text(event.strftime('%S'));
  }).on('finish.countdown', function(){
    $('#logo-start').attr('src', 'tick.jpg');
  });

  $('#bachelor-thema').countdown('2019/05/31 12:00', function(event) {
    $("#tage").text(event.strftime('%D'));
    $('#stunden').text(event.strftime('%H'));
    $('#minuten').text(event.strftime('%M'));
    $('#sekunden').text(event.strftime('%S'));
  }).on('finish.countdown', function(){
    $('#logo-thema').attr('src', 'tick.jpg');
  });

  $(document).ready(function(){
      if($("#tage").html() == '00' && $("#stunden").html() == '00' && $("#minuten").html() == '00' && $("#sekunden").html() == '00'){
        $('#logo-thema').attr('src', 'tick.jpg');
      }

      if($("#tage01").html() == '00' && $("#stunden01").html() == '00' && $("#minuten01").html() == '00' && $("#sekunden01").html() == '00'){
        $('#logo-start').attr('src', 'tick.jpg');
      }

      if($("#tage02").html() == '00' && $("#stunden02").html() == '00' && $("#minuten02").html() == '00' && $("#sekunden02").html() == '00'){
        $('#logo-ende').attr('src', 'tick.jpg');
      }
  });




  