// function checkArray(input){
//     var myArray = input;
 
//     console.log(myArray);
//     for(var i=0; i<myArray.length; i++){
       
//         if(myArray[i]> myArray[i+1]){
        
//         return "not sorted";
//         }
       
      
//     }
  
 
// }
// console.log(checkArray([4,5,8,7]));


function descArray(input){
    var myArray = input;
    console.log(myArray);
    for(var i=0; i< myArray.length; i++){
        for(var j= i+1; j< myArray.length; j++){
            if(myArray[i]> myArray[j]){
                return true;
               
            }
        }
    }
    //return true;
}
console.log(descArray([5,6,7]));