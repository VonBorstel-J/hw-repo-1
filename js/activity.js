$(document).ready(function() {
   
    $('td').css('cursor', 'pointer');

$("td").click(function () {
var content = $(this).text()
     if ( "td".text == "Not Available") { 
      //No Highlight
     } else {     
         $("td").toggleClass ("highlight");
        };

      });
  });



 