$(document).ready(function(){
    $.ajax({
        method: "GET",
        url:"currency_converter.json",
        success: function(data){
            console.log(data);
            var selectElem1 = $("<select/>").addClass("currency-one");
            var selectElem2 = $("<select/>").addClass("currency-two")
            selectElem1.appendTo("#exchange-container");
            selectElem2.appendTo("#exchange-container");
           
           
            for(var currencyCode in data.rates){
                //console.log(currencyCode);
               var optionElem=  $("<option/>").text(currencyCode).val(currencyCode);
                optionElem.appendTo(selectElem1);
                optionElem.clone().appendTo(selectElem2);
               
             }
        }  
        });
        $('#convert-currency-btn').on('click', function(){
            var currencyOne = $('.currency-one').val();
            console.log(currencyOne);
            var currencyTwo = $('.currency-two').val();
            console.log(currencyTwo);
           if(currencyOne == currencyTwo){
               alert("please choose two different  currencies");
               return;
           }
           $('#cr-one-symbol').text(currencyOne);
           $('#cr-two-symbol').text(currencyTwo);
    

           $.get("currency_converter.json", {
            base: currencyOne,
            symbols: currencyTwo
    
    }, function(data){
        //limit the decimal value upto two
        //console.log(data.rates[currencyTwo]);
        var convertedValue = data.rates[currencyTwo].toFixed(2);
        console.log(convertedValue);
        // bind the currency ount to the respective element
        $('#cr-two-count').text(convertedValue);
        //finally show the result
        $('#result').fadeIn(200);
    })
        
});

});