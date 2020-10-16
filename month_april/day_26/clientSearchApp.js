$(document).ready(function(){
    var result=[];
    $.ajax({
        method: "GET",
        url:"clientSearchApp.json",
        success: function(data){
            console.log(data);
           
           
            $('.button').addClass("btn-primary")
            $('.button').addClass("text-white")

          $('body').append($('<table/>'));
          $('table').append($('<tr/>').append($('<th/>').text("title"),$('<th/>').text("author"),$('<th/>').text("country"),$('<th/>').text("language"),$('<th/>').text("link"),$('<th/>').text("pages"),$('<th/>').text("year")));
          
        $('th').addClass("col-md-2");
        result = data;

        }
    });
    
    var store=[];
    $('.button').on('click', function(){
        var input = $('.input').val();
        console.log(input);
        for(var i=0; i< result.length; i++){
           // console.log(result[i].language);
            if(result[i].language == input){
                console.log(result[i]);
                //store = result[i];
                store.push(result[i]);
            }    
        }
        console.log(store);

        for(var k=0; k<store.length; k++){
           //console.log(store);
          // console.log(store[0].author);
        
          $('table').append($('<tr/>').append([$('<td/>').text(store[k].title),$('<td/>').text(store[k].author),$('<td/>').text(store[k].country),$('<td/>').text(store[k].language),$('<td/>').text(store[k].link),$('<td/>').text(store[k].pages),$('<td/>').text(store[k].year)]))
        }

        $('table').addClass("table table-striped")
       // $('table').addClass("table-striped")
    })
   
    

    
});