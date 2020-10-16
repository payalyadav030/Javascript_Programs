$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:"hashMedia.json",
        success:function(data){
           console.log(data);
        //    var appnameElem = $('<h2/>');
        //    console.log(appnameElem);
        //    $('body').append(appnameElem);
        //     appnameElem.text(data.appName);
            $('body').append($('<h2/>').text(data.appName));

           $('body').append ($('<table/>'));
           $('table').append($('<tr/>'));

           for(var i=0; i< data.headers.length; i++){
               $('tr').append($('<th/>').text(data.headers[i]));
              
           }
           $('tr').addClass("bg-secondary");
           $('th').addClass("text-white")
          // $('th').addClass("mx-3")
           //$('tr').addClass("row");
           $('th').addClass("col-md-2")
           $('table').addClass("container-fluid")
          // $('th').addClass("mx-auto")

         

          for(var i=0; i< data.users.length; i++){
         $('table').append($('<tr/>').append([$('<td/>').text(i), $('<td/>').text(data.users[i].name),$('<td/>').text(data.users[i].email),$('<td/>').text(data.users[i].country),$('<td/>').text(data.users[i].salary)]).append($('<button/>').text("delete")));
          }
        // $('td').addClass("mx-auto");
          $('td').addClass("col");
          $('td').addClass("col-md-2");
         
        $('body').on('click','button', function(){
           $(this).closest('tr').remove();
           
        })
       
        }

    });

});

