//GET = pass data in query parameters
//  http://mywebsite.com/record/reaction?postId=2387367
// http://mywebsite.com/login?username=payalyadav&password=231232

// POST = pass data in request body
// http://mywebsite.com/record/reaction
//  request body: {
//     reaction: "LIKE",
//     postId: "2387367"
// }

// call back function - it is invoked when the request is completed succesfully

// $.get();
// $.get("http://mywebsite.com/record/reaction", {
//     postId: 2387367
// }, function(data){
//     data= 90742
//     $('#like-count').text(data);
// });

// $.post();
// $.post("http://mywebsite.com/record/reaction", {
//     postId : 2387367,
//     reaction: "LIKE"

// }, function(data){
//     alert("reaction recorded");
// }, "json");

// $.getJSON();

//***************************************************** */
// but try do this in this way (above code)
// for GET
// $.ajax({
//     method: "GET",
//     url: "http://mywebsite.com/record/reaction",
//     success: function(data){
//         $('#like-count').text(data);

//     },
//     error: function(error){
//         alert("failed recorded");
//     }
// })

// FOR POST 
// $.ajax({
//         method: "POST",
//         url: "http://mywebsite.com/record/reaction",
 //         data: {
    //        postId : 2387367,
    //     reaction: "LIKE"
    //    }
//         success: function(data){
//          alert("reaction recorded");            
//                
//         },
//         error: function(error){
//             alert("failed recorded");
//         }
//  })

