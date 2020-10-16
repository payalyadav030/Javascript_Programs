$(document).ready(function(){
    // $.get("https://api.exchangeratesapi.io/latest", {}, function(data){
    //     var selectElem1 = $("<select/>").addClass("currency-one");
    //     var selectElem2 = $("<select/>").addClass("currency-two")
    //     selectElem1.appendTo("#exchange-container");
    //     selectElem2.appendTo("#exchange-container");


    //     for(var currencyCode in data.rates){
    //         //console.log(currencyCode);
    //        var optionElem=  $("<option/>").text(currencyCode).val(currencyCode);
    //         optionElem.appendTo(selectElem1);
    //         optionElem.clone().appendTo(selectElem2);
           
    //      }
    // });

    /******************************************************* */
    // LOGIC//
    $('#convert-currency-btn').on('click', function(){
        var currencyOne = $('.currency-one').val();
        console.log(currencyOne);
        var currencyTwo = $('.currency-two').val();
        console.log(currencyTwo);
       if(currencyOne == currencyTwo){
           alert("please choose two different  currencies");
           return;
       }
       //binding currency symnols in the result container right away
       $('#cr-one-symbol').text(currencyOne);
       $('#cr-two-symbol').text(currencyTwo);


       // call exchangeratesapi server and get the currency conversion
       //for selected currencies
        $.get("https://api.exchangeratesapi.io/latest", {
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
        $('#result').fadeIn(400);
    })
});
   
});