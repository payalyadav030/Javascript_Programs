// DUCKDUCKGO - Search engine
//  format that ddg returns-  https://api.duckduckgo.com/?q=angel.co&format=json&pretty=1
// in the above line upto.com is the base url and from q to 1 is query parameter
// q =  search query 
// format = format of the response
// pretty= beautify the format so that its readable, here pretty is like true or false i.e 0 or 1

//////////////////////////////////////////
// TASK: Create a search engine based on DuckDuckGo's API
// 1. create the skeleton of html of the app
// 2. import bootstrap jquery and
// 3. create a js file where the application logic build
// 4. create function which takes input and sends it to the ddg server
// 5.  create function that will render the response of search query in our application
// 6. style the result s
// 7. link the url to the search text

/////********    LOGIC      **************/
$(document).ready(function(){
    //console.log("app is ready");

    // adding event for search button
    $('#process-search').on('click', function(){
       // get search input value
        var queryElem = $('#search-query').val();
       //console.log(queryElem)
    
        var ddgURL = "https://api.duckduckgo.com";
        var queryParameter = {
            q: queryElem,
            format:"json",
            pretty: 1
        };

        // getting result from ddg  via ajax
        $.getJSON(ddgURL, queryParameter, function(searchData){
           //console.log(searchData.RelatedTopics);
          //console.log(typeof(searchData))
          var results = searchData.RelatedTopics;
          //console.log(results);

          results = results.filter(function(value){
              return value.Text && value.FirstURL;

          });
          console.log(results);
          searchResultWrapperElem = $('#search-result-data');
          searchResultWrapperElem.empty(); // it delete what was inside this before cant use remove() here
          if(results.length == 0){
            var noResult = $('<span/>').text("-no result found-").css({
                "text-align": "center"
            })
            noResult.appendTo(searchResultWrapperElem);
            $('.search-result').show();
            return;
          }
          results.forEach(function(value, index){
              var liElem = $('<li/>');
              //console.log(liElem);
              var resultTitleElem = $('<p/>').text(value.Text);
              var resultURLElem = $('<span/>').text(value.FirstURL);
              var anchorElem= $('<a/>').attr({
                  href: value.FirstURL,
                  target: "_blank",
              });
              resultTitleElem.appendTo(anchorElem);
              resultURLElem.appendTo(anchorElem);
              anchorElem.appendTo(liElem);



              liElem.appendTo(searchResultWrapperElem);
              
          })
        });
        $('.search-result').show();
       
    });    
});